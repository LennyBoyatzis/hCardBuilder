const CHANGE = 'CHANGE'

const change = function(field, val) {
  return {
    type: CHANGE,
    payload: {
      field,
      val
    }
  }
}

module.exports = {
  change: change,
  CHANGE: CHANGE
}
