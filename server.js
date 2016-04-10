import path from 'path'
import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import { Provider } from 'react-redux'
import { match, RouterContext } from 'react-router'
import createLocation from 'history/lib/createLocation'
import getComponentData from './src/server/lib/getComponentData'
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

  const location = createLocation(request.url)

  match({ routes, location }, (error, redirectLocation, renderProps) => {
    if (error) {
      console.error(error)

      return response.status(500).end('Internal server error')
    } else if (redirectLocation) {
      response.redirect(302, redirectLocation.pathname + redirectLocation.search)
    } else if (!renderProps) {
      return response.status(404).end('Not found')
    }

    const store = configureStore()

    function renderView () {
      const assets = global.webpackIsomorphicTools.assets()
      const stylesheet = assets.styles.app
      const javascripts = {
        app: assets.javascript.app,
        vendors: assets.javascript.vendors
      }

      const InitialView = (
        <Provider store={store}>
          <RouterContext {...renderProps} />
        </Provider>
      )

      const componentHTML = renderToString(InitialView)
      const initialState = JSON.stringify(store.getState())

      response.render('index', {
        componentHTML,
        initialState,
        stylesheet,
        javascripts
      }, (error, html) => {
        if (error) {
          response.end(error.message)
        } else {
          response.end(html)
        }
      })
    }

    getComponentData(store.dispatch, renderProps.components, renderProps.params)
      .then((response) => renderView())
  })
})

export default server
