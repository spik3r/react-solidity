import React from 'react';
import PropTypes from 'prop-types';
import { LOG } from '../../../common/Logging';

class Service extends React.Component {
  static logFAQCalls() {
    LOG.info('FAQ Url was called from checkout´s header');
  }

  static logContactCalls() {
    LOG.info('Contact Url was called from checkout´s header');
  }

  constructor(props) {
    super(props);

    this.logFAQCalls = this.logFAQCalls.bind(this);
    this.logContactCalls = this.logContactCalls.bind(this);
  }

  render() {
    let element;


    if (this.props.selfservice) {
      element = (
        <div className="checkout-header__headline">
          <p className="header-checkout__infotext-title">
Brauchen Sie Hilfe?
          </p>
          <div className="header-checkout__infotext header-checkout--address">

            <p>
              <a onClick={this.logFAQCalls} className="checkout-header__link" target="_blank" rel="noopener noreferrer" href="https://www.rewe.de/service/fragen-und-antworten/#checkout" title="Häufig gestellte Fragen und Antworten in den FAQ">
                <span className="checkout-list-icon" />
Fragen und Antworten
              </a>
            </p>
            <p>
              <a onClick={this.logContactCalls} className="checkout-header__link" target="_blank" rel="noopener noreferrer" href="https://www.rewe.de/service/kontakt/anfrage/#checkout" title="Wir stehen Ihnen auch persönlich zur Verfügung">
                <span className="checkout-list-icon" />
Kontakt
              </a>
            </p>
          </div>
        </div>
      );
    } else {
      element = (
        <address x-ms-format-detection="none" className="header-checkout__infotext header-checkout--address">
          <p className="header-checkout__infotext-phone-title">
Haben Sie Fragen?
            <a className="checkout-header__link" href="tel:+4922117739777">
0221-177 39 777
            </a>
          </p>
          <p>
Mo-Sa 8-23 Uhr (außer an Feiertagen)
          </p>
        </address>
      );
    }

    return (
      <section className="header-checkout-info">
        {element}
      </section>
    );
  }
}

Service.propTypes = {
  assetsPath: PropTypes.string.isRequired,
  selfservice: PropTypes.bool.isRequired,
};
export default Service;
