/**
 * Function used on the server to fetch any component
 * data we might need, before constructing and sending
 * the final HTML to the client.
 * @return {Promise}
 */
function fetchComponentData(dispatch, components, params) {
  const needs = components.reduce((prev, current) => {
    return (current)
      ? (current.needs || []).concat(prev)
      : prev
  }, [])

  const promises = needs.map(need => dispatch(need(params)))

  return Promise.all(promises)
}

export default fetchComponentData
