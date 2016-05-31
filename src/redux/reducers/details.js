const CHANGE = require('../actions/details').CHANGE

const defaultState = {
  name: 'Sam',
  surname: 'Fairfax',
  email: 'sam.fairfax@fairfax.com',
  phone: '02 9282 2833',
  houseNumber: '1',
  street: 'Darling Island Road',
  suburb: 'Pyrmont',
  state: 'NSW',
  postcode: '2009',
  country: 'Australia',
}

module.exports = function(state = defaultState, { type, payload }) {
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
