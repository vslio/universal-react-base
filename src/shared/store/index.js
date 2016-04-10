import { compose, createStore, applyMiddleware } from 'redux'
import promiseMiddleware from 'lib/promiseMiddleware'
import reducers from 'reducers'

export default function configureStore (initialState) {
  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(promiseMiddleware),
      ((typeof window === 'object') && (typeof window.devToolsExtension !== 'undefined'))
        ? window.devToolsExtension()
        : (f) => f
    )
  )

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    module.hot.accept('reducers', () => {
      const nextRootReducer = require('reducers').default

      store.replaceReducer(nextRootReducer)
    })
  }

  return store
}
