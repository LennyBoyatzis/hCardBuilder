const React = require('react');
const SectionDivider = require('./common/SectionDivider');
const InputField = require('./common/InputField');

module.exports = function ({ change }) {
  const personalRows = [['name', 'surname'], ['email', 'phone' ]];
  const addressRows = [['houseNumber', 'street'], ['suburb', 'state'], ['postcode', 'country']];

  const uploadFile = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    window.URL = window.URL || window.webkitURL;
    if (window.URL) {
      change('avatar', window.URL.createObjectURL(file));
    }
  };

  return (
    <div className="form">
      <div className="section">
        <h1 className="section-heading">hCard Builder</h1>
        <SectionDivider heading="Personal Details" />
        {
          personalRows.map((row, i) =>
            <div className="input-row" key={i}>
              {row.map((field, j) => (
                <InputField
                  spacedLabel='Given Name'
                  position={`${j % 2 !== 0 ? 'right' : '' }`}
                  updateValue={change}
                  field={field}
                  key={j}
                />
              ))}
            </div>
          )
        }
        <SectionDivider heading="Address" />
          {
            addressRows.map((row, i) =>
              <div className="input-row" key={i}>
                {row.map((field, j) => (
                  <InputField
                    spacedLabel='House name or #'
                    position={`${j % 2 !== 0 ? 'right' : '' }`}
                    updateValue={change}
                    field={field}
                    key={j}
                  />
                ))}
              </div>
            )
          }
          <label className="file-upload ">
            <input type="file" className="file-upload file-input" onChange={e => uploadFile(e)} />
            Upload Avatar
          </label>
          <button className="submit">Create hCard</button>
      </div>
    </div>
  );
};
