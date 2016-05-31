const React = require('react');

module.exports = function (props) {
  return (
    <div className="vcard">
      <div className="section">
        <div className="fn">
          <h1 className="card-name">{`${props.name} ${props.surname}`}</h1>
          <img src={props.avatar ? props.avatar : 'public/images/gravatar.png'} className="photo" width="100px"  alt="image of the hCard owner" />
        </div>
        <div className="card-body">
          <div className="card-row">
            <span className="card-label">Email</span>
            <a className="email" href={`mailto:${props.email}`}>{props.email}</a>
          </div>
          <div className="card-row">
            <span className="card-label">Phone</span>
            <span className="tel">{props.phone}</span>
          </div>
          <div className="adr">
            <div className="card-row">
              <span className="card-label">Address</span>
              <span className="street-address">{`${props.houseNumber} ${props.street}`}</span>
            </div>
            <div className="card-row">
              <span className="card-label" />
              <span className="locality">{`${props.suburb} ${props.state ? ', ' + props.state : '' }`}</span>
            </div>
            <div className="card-row">
              <div className="card-row__half">
                <span className="card-label">Postcode</span>
                <span className="postal-code">{props.postcode}</span>
              </div>
              <div className="card-row__half">
                <span className="card-label">Country</span>
                <span className="country-name">{props.country}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
