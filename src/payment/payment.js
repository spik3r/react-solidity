import React from 'react';

const Payment = ({ goBack }) => (
   <main className="payment">
       <button className="buy-button payment-button" onClick={goBack}>Zurück</button>
       <img className="payment-gif" alt="Waiting for PayPal ..." src="http://smdgnet.com/loading.gif"/>
   </main>
);

export default Payment;