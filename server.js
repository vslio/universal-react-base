import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { match, RouterContext, createMemoryHistory } from 'react-router'
import createLocation from 'history/lib/createLocation'
import routes from 'routes'
import configureStore from 'store'

const server = express()
const isDevelopment = (process.env.NODE_ENV !== 'production')

if (isDevelopment) {
  require('./webpack.development').default(server)
}

server
  .set('views', path.join(__dirname, 'src/server/views'))
  .set('view engine', 'ejs')
  .use(express.static(path.join(__dirname, '')))

server.use((request, response) => {
  if (isDevelopment) {
    global.webpackIsomorphicTools.refresh()
  }

  const assets = global.webpackIsomorphicTools.assets()
  const location = createLocation(request.url)
  const store = configureStore()
  const history = createMemoryHistory()

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err)

      return response.status(500).end('Internal server error')
    }

    if (!renderProps) {
      return response.status(404).end('Not found')
    }

    function renderView() {
      const InitialView = (
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )

      const stylesheetURL = assets.styles.app
      const javascriptApp = assets.javascript.app
      const javascriptVendors = assets.javascript.vendors

      const componentHTML = renderToString(InitialView)
      const initialState = JSON.stringify(store.getState())

      response.render('index', {
        componentHTML,
        initialState,
        stylesheetURL,
        javascriptApp,
        javascriptVendors
      })
    }

    renderView()

    // fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
    //   .then(renderView)
    //   .catch(err => response.end(err.message));
  })
})

export default server
