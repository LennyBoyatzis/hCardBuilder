const React = require('react');
const Component = require('react').Component;
const Form = require('./containers/Form');
const Card = require('./containers/Card');

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Form />
        <Card />
      </div>
    );
  }
}

module.exports = App;
