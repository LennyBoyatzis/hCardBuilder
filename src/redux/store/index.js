const createStore = require('redux').createStore;
const applyMiddleware = require('redux').applyMiddleware;
const reducer = require('../reducers');
const createLogger = require('redux-logger');

const logger = createLogger();

module.exports = function configureStore() {
  return createStore(reducer, applyMiddleware(
    logger
  ));
};
