const React = require('react')
const SectionDivider = require('./common/SectionDivider')
const InputField = require('./common/InputField')

module.exports = function({ change, name }) {
  const personalRows = [ ['name', 'surname'], ['email', 'phone' ]]
  const addressRows = [ ['house', 'street'],  ['suburb', 'state'], ['postcode', 'country']]

  const uploadFile = (e) => {
    e.preventDefault();

    const file = e.target.files[0];

    window.URL = window.URL || window.webkitURL;
    if (window.URL) {
      change('avatar', window.URL.createObjectURL(file));
    }
  }

  return (
    <div className="form">
      <div className="section">
        <h1 className="section-heading">hCard Builder</h1>
        <SectionDivider heading="Personal Details"/>
        {
          personalRows.map((row, i) =>
            <div className="input-row" key={i}>
              {row.map((field, j) => (
                <div className="input" key={j}>
                  <label className="input-label">{field}</label>
                  <input className="input-field" onChange={e => change(field, e.target.value) }/>
                </div>
              ))}
            </div>
          )
        }
        <SectionDivider heading="Address"/>
          {
            addressRows.map((row, i) =>
              <div className="input-row" key={i}>
                {row.map((field, j) => (
                  <div className="input" key={j}>
                    <label className="input-label">{field}</label>
                    <input className="input-field" onChange={e => change(field, e.target.value) }/>
                  </div>
                ))}
              </div>
            )
          }
          <button className="file-upload" >
            <input type="file" className="file-input" onChange={e => uploadFile(e)} />
            Upload Avatar
          </button>
          <button className="submit">Create hCard</button>
      </div>
    </div>
  )
}
