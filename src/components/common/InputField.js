const React = require('react')

module.exports = function({ updateValue }) {
  return (
    <div className="input">
      <label className="input-label">Label</label>
      <input className="input-field" onChange={e => updateValue(e.target.value)} />
    </div>
  )
}
