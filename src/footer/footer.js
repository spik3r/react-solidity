import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="footer-content-box">
            <h2 className="footer-title">Brauchen Sie Hilfe?</h2>
            <h3 className="footer-subtitle">Wir helfen Ihnen gerne.</h3>
        </div>
        {/*<div className="footer-content-box">*/}
        {/*<h4 className="footer-awards-title">Siegel und Auszeichnungen</h4>*/}
        {/*<img alt="logo ehi" src="./src/img/logo-ehi.png" />*/}
        {/*<p className="footer-price-explanation">Alle Preise in Euro (€) inkl. gesetzlicher Mehrwertsteuer, zuzüglich Versandkosten, Pfand und optionaler Servicegebühren.</p>*/}
        {/*</div>*/}
        <div className="checkout-footer-nav-container">
            <div className="checkout-footer-nav-inner">
                <a target="_blank" rel="noopener noreferrer" className="checkout-footer-nav-item" href="https://www.rewe.de/service/agb/" title="Allgemeine Geschäftsbedingungen">
                    AGB
                </a>
                <a target="_blank" rel="noopener noreferrer" className="checkout-footer-nav-item" href="https://www.rewe.de/service/impressum/" title="Impressum">
                    Impressum
                </a>
                <a target="_blank" rel="noopener noreferrer" className="checkout-footer-nav-item" href="https://www.rewe.de/service/datenschutz/" title="Datenschutz">
                    Datenschutz
                </a>
                <a target="_blank" rel="noopener noreferrer" className="checkout-footer-nav-item" href="https://www.rewe.de/service/nutzungsrichtlinien/" title="Nutzungsrichtlinien">
                    Nutzungsrichtlinien
                </a>
            </div>
        </div>
    </footer>
);

export default Footer;