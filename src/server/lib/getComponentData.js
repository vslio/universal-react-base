/**
 * Function used on the server to get any component
 * data we might need, before constructing and sending
 * the final HTML to the client. It looks for the static
 * array `needs` inside a component, which is an array
 * of the actions we need to dispatch.
 *
 * @return {Promise}
 */
export default function getComponentData(dispatch, components, params) {
  const needs = components.reduce((prev, current) => {
    return (current)
      ? (current.needs || []).concat(prev)
      : prev
  }, [])

  const promises = needs.map(need => dispatch(need(params)))

  return Promise.all(promises)
}
