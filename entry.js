require('es5-shim')
require('es5-shim/es5-sham')
require('console-polyfill')

require("./src/less/site.less")
const React = require('react')
const ReactDOM = require('react-dom')
const Provider = require('react-redux').Provider
const configureStore = require('./src/redux/store')
const App = require('./src/App')

const store = configureStore()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
