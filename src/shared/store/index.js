import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducers from 'reducers';

function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(thunkMiddleware, createLogger()),
      ((typeof window === 'object') && (typeof window.devToolsExtension !== 'undefined'))
        ? window.devToolsExtension()
        : f => f
    )
  )

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers').default

      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}

export default configureStore
