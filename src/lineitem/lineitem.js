import React from 'react';

const LineItem = ({ imgUrl, description, details, price, amount = 1, changeHandler}) => (
    <article className="line-item">
        <img className="line-item-image" alt="product" src={imgUrl}/>
        <div className="line-item-info">
            <p className="line-item-description">{description}</p>
            <p className="line-item-details">{details}</p>
        </div>
        <p className="line-item-price">{price + '€'}</p>
        <input className="line-item-price-input" type="text" name="price" maxLength="2" value={amount}
               onChange={changeHandler}/>
    </article>
);

export default LineItem;