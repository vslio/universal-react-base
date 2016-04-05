import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import createLocation from 'history/lib/createLocation'
import promiseMiddleware from 'lib/promiseMiddleware'
import fetchComponentData from 'lib/fetchComponentData'
import routes from 'routes'
import reducer from 'reducers'

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
  const store = applyMiddleware(promiseMiddleware)(createStore)(reducer)

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

      const stylesheet = assets.styles.app
      const javascripts = {
        app: assets.javascript.app,
        vendors: assets.javascript.vendors
      }

      const componentHTML = renderToString(InitialView)
      const initialState = JSON.stringify(store.getState())

      response.render('index', {
        componentHTML,
        initialState,
        stylesheet,
        javascripts
      }, (err, html) => {
        if (err) {
          response.end(err.message)
        } else {
          response.end(html)
        }
      })
    }

    fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
      .then(res => renderView(res))
  })
})

export default server
