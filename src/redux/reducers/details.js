const CHANGE = require('../actions/details').CHANGE;

const defaultState = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  houseNumber: '',
  street: '',
  suburb: '',
  state: '',
  postcode: '',
  country: '',
}

module.exports = function (state = defaultState, { type, payload }) {
  switch(type) {
    case CHANGE:
      return {
        ...state,
        [payload.field]: payload.val
      };

    default:
      return state
  }
}
