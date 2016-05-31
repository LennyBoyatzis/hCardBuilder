const connect = require('react-redux').connect
const Card = require('../components/Card')

function mapStateToProps(state) {
  return {
    name: state.details.name,
    surname: state.details.surname,
    email: state.details.email,
    phone: state.details.phone,
    houseNumber: state.details.houseNumber,
    street: state.details.street,
    suburb: state.details.suburb,
    state: state.details.state,
    postcode: state.details.postcode,
    country: state.details.country,
    avatar: state.details.avatar,
  }
}
module.exports = connect(mapStateToProps)(Card)
