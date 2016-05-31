const React = require('react')

module.exports = function({ heading }) {
  return (
    <div className="section-divider">
      <p className="section-subtitle">{ heading }</p>
      <hr />
    </div>
  )
}
