const React = require('react');

module.exports = function ({ updateValue, field, position, spacedLabel }) {
  return (
    <div className={`input ${position}`}>
      <label className="input-label">{field === 'name' ? spacedLabel : field}</label>
      <input className="input-field" onChange={e => updateValue(field, e.target.value)} />
    </div>
  );
};
