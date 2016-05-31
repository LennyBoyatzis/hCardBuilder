const React = require('react')

module.exports = function(props) {
  return (
    <div className="card-wrapper">
      <div className="section card">
        <div className="card-heading">
          <h1 className="card-name">{`${ props.name } ${props.surname}`}</h1>
          <img src={ props.avatar ? props.avatar : 'public/images/gravatar.png'} className="gravatar" width="100px" />
        </div>
        <div className="card-body">
            <div className="card-row">
              <p className="card-label">Email</p>
              <p>{ props.email }</p>
            </div>
            <div className="card-row">
              <p className="card-label">Phone</p>
              <p>{ props.phone }</p>
            </div>
            <div className="card-row">
              <p className="card-label">Address</p>
              <p>{`${props.houseNumber} ${props.street}`}</p>
            </div>
            <div className="card-row">
              <p></p>
              <p>{`${props.suburb}, ${props.state}`}</p>
            </div>
            <div className="card-row">
              <div className="card-row__half">
                <p className="card-label">Postcode</p>
                <p>{ props.postcode }</p>
              </div>
              <div className="card-row__half">
                <p className="card-label">Country</p>
                <p>{ props.country }</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}
