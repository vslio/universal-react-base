import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { match, RouterContext, createMemoryHistory } from 'react-router';
import createLocation from 'history/lib/createLocation'
import { Provider } from 'react-redux'
import configureStore from './src/shared/store/configureStore'
import createRoutes from './src/shared/routes'

const server = express()
const isDevelopment = process.env.NODE_ENV !== 'production'

if (isDevelopment) {
  require('./webpack.development').default(server)
}

server
  .set('views', path.join(__dirname, 'src/server/views'))
  .set('view engine', 'ejs')

server.use(express.static(path.join(__dirname, '/dist')))

server.use((request, response) => {
  if (isDevelopment) {
    global.webpackIsomorphicTools.refresh()
  }

  const location = createLocation(request.url)
  const store = configureStore()
  const history = createMemoryHistory()
  const routes = createRoutes(history)

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

      const componentHTML = renderToString(InitialView)
      const initialState = JSON.stringify(store.getState())

      response.render('index', { componentHTML, initialState })
    }

    renderView()

    // fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
    //   .then(renderView)
    //   .catch(err => response.end(err.message));
  })
})

export default server
