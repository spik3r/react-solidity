import React, { Component } from 'react'

class LineItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentValue: this.props.amount,
            collectorAmount: this.props.price * this.props.amount
        }

        this.changeIt = this.changeIt.bind(this);
    }

    changeIt(e) {
        this.setState({
            collectorAmount: parseInt(e.target.value) * parseInt(this.props.price)
        });
    }

    render() {
        return (
            <article className="line-item">
                <img className="line-item-image" alt="product" src={this.props.imgUrl}/>
                <div className="line-item-info">
                    <p className="line-item-description">{this.props.description}</p>
                    <p className="line-item-details">{this.props.details}</p>
                </div>
                <p className="line-item-price">{this.props.price + '€'}</p>
                <input className="line-item-price-input" type="text" name="price" maxLength="2" defaultValue={this.state.currentValue}
                       onChange={this.changeIt} onBlur={this.props.changeHandler}/>
                <input className="price-collector" type="hidden" value={this.state.collectorAmount}
                       />
            </article>
        );
    }
}

LineItem.defaultProps = {
    amount: 1
}

export default LineItem;