import React, { Component } from 'react'
import SimpleStorageContract from '../build/contracts/SimpleStorage.json'
import Sender from '../build/contracts/Sender.json'
import Forwarder from '../build/contracts/Forwarder.json'
import getWeb3 from './utils/getWeb3'
import ethereumjsunits from 'ethereumjs-units';

import Header from './header/header'
import Footer from './footer/footer'
import UserInput from './UserInput'
import LineItem from './lineitem/lineitem'

import './css/united.css'
import './App.css'

const USER = "0xb5A6D2c208DEf2dB496eE6c1c3c04D9e0295432F"
const SUPERMARKET = "0x819dDf87322aD1292649E575874c255f25A59445"

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            storageValue: 0,
            amountToPay: 0,
            web3: null,
            totalPrice: 0,
            amountToRefund: 0,
            refundPrice: 0.25
        }

        this.doit = this.doit.bind(this)
        this.getTotalPrice = this.getTotalPrice.bind(this)
        this.forwarderInputHandler = this.forwarderInputHandler.bind(this)
        this.forwarderRefundHandler = this.forwarderRefundHandler.bind(this)
        this.changeItAdmin = this.changeItAdmin.bind(this)
    }

    getTotalPrice() {
        let collectors = document.getElementsByClassName('price-collector');
        let total = 0;
        for (let i=0; i< collectors.length; i++) {
            let lineItem = collectors[i];
            total += parseInt(lineItem.value);
        }

        this.setState({
           totalPrice: total,
           amountToPay: total
        });
    }

    componentWillMount() {
        // Get network provider and web3 instance.
        // See utils/getWeb3 for more info.
        getWeb3
            .then(results => {
                this.setState({
                    web3: results.web3
                })
            })
            .catch(() => {
                console.log('Error finding web3.')
            })
    }

    componentDidMount() {
        this.getTotalPrice();
    }

    doit() {
        // Get network provider and web3 instance.
        // See utils/getWeb3 for more info.

        getWeb3
            .then(results => {
                this.setState({
                    web3: results.web3
                })

                // Instantiate contract once web3 provided.
                this.instantiateContract()
            })
            .catch(() => {
                console.log('Error finding web3.')
            })
    }

    changeItAdmin(e) {
        this.setState({
            amountToRefund: e.target.value * this.state.refundPrice
        })
    }

    // Send $$ to Contract
    buttonInputHandler = (event) => {
        this.setState({amountToPay: event.target.value})

        const contract = require('truffle-contract')
        const sender = contract(Forwarder);
        sender.setProvider(this.state.web3.currentProvider);

        this.state.web3.eth.getAccounts((error, accounts) => {
            sender.deployed().then((instance) => {

                console.log("Seems to explode after here" );
                return instance.sendTransaction({
                    from: this.state.web3.eth.accounts[0],
                    to:this.state.web3.eth.accounts[1],
                    value: this.state.web3.toWei(10, "ether"),
                    gas: "220000"}).then((result) => {

                    console.log("result: " + result);
                })
            })
        })
    };


    // Attempting to send $$ to another eth Address
    userInputHandler = (event) => {
        // this.setState({amountToPay: event.target.value})

        const contract = require('truffle-contract')
        const sender = contract(Sender);
        sender.setProvider(this.state.web3.currentProvider);

        this.state.web3.eth.getAccounts((err, accounts) => {
            console.log(accounts);
            console.log("WEI");
            console.log(typeof this.state.web3.toWei(10, "ether"));
            console.log( this.state.web3.toWei(10, "ether"));
            console.log(typeof this.state.web3.toWei(10, "wei"));
            console.log( this.state.web3.toWei(10, "wei"));
            console.log( "_");
            console.log(ethereumjsunits.convert('1', 'eth', 'wei'));
            console.log(ethereumjsunits.convert('1', 'wei', 'eth'));
            console.log(this.state.amountToPay);

            let totalEths = this.state.amountToPay * 0.0040;
            console.log("totaleths: "+totalEths);


            sender.deployed().then((instance) => {

                console.log(this.state.web3.eth.accounts.length);
                console.log(this.state.web3.eth.accounts[0]);
                console.log(this.state.web3.eth.accounts[1]);
                this.state.web3.eth.defaultAccount = this.state.web3.eth.accounts[0];


                return instance.sendMoney.sendTransaction("0x5fb43d29e6a367af26bc6768b976f105bac3f0c9", { // TODO
                    from: USER,
                    value: ethereumjsunits.convert(totalEths, 'eth', 'wei')
                });

            })
        })
    };


    // Attempting to send $$ to another eth Address
    forwarderInputHandler = () => {
        const contract = require('truffle-contract')
        const forwarder = contract(Forwarder);
        forwarder.setProvider(this.state.web3.currentProvider);

        let totalEths = this.state.amountToPay * 0.0040;
        console.log("euros for supermarket: "+this.state.amountToPay);
        console.log("totaleths for supermarket: "+totalEths);
        this.state.web3.eth.getAccounts((error, accounts) => {
            forwarder.deployed().then((instance) => {

                return instance.sendForwarderMoney.sendTransaction(SUPERMARKET, {
                    from: USER,

                    value: this.state.web3.toWei(totalEths, "ether")})
                    .then((result) => {

                    console.log("result: " + result);
                })
            })
        })
    };

    // Attempting to send $$ to another eth Address
    forwarderRefundHandler = () => {
        const contract = require('truffle-contract')
        const forwarder = contract(Forwarder);
        forwarder.setProvider(this.state.web3.currentProvider);


        let totalEths = this.state.amountToRefund * 0.0040;
        console.log("euros for user: " + this.state.amountToRefund);
        console.log("totaleths for user: " + totalEths);

        this.state.web3.eth.getAccounts((error, accounts) => {
            forwarder.deployed().then((instance) => {

                console.log("Seems to explode after here" );
                return instance.sendForwarderMoney.sendTransaction(USER, {
                    from: SUPERMARKET,

                    value: this.state.web3.toWei(totalEths, "ether")})
                    .then((result) => {

                    console.log("result: " + result);
                })
            })
        })
    };

    instantiateContract() {
        /*
         * SMART CONTRACT EXAMPLE
         *
         * Normally these functions would be called in the context of a
         * state management library, but for convenience I've placed them here.
         */

        const contract = require('truffle-contract')
        const simpleStorage = contract(SimpleStorageContract)
        simpleStorage.setProvider(this.state.web3.currentProvider)
        console.log("___PROVIDER: " + this.state.web3.currentProvider)
        // Declaring this for later so we can chain functions on SimpleStorage.
        var simpleStorageInstance

        // Get accounts.
        this.state.web3.eth.getAccounts((error, accounts) => {
            simpleStorage.deployed().then((instance) => {
                simpleStorageInstance = instance

                console.log("___accounts: " + accounts[0])
                // Stores a given value, 5 by default.
                return simpleStorageInstance.set(55, {from: accounts[0]})
            }).then((result) => {
                // Get the value from the contract to prove it worked.
                return simpleStorageInstance.get.call(accounts[0])
            }).then((result) => {
                // Update state with the result.
                return this.setState({storageValue: result.c[0]})
            })
        })
    }

    render() {
        return (
            <div className="App">
                <Header/>
                <main className="container">
                <section className="content">
                  <h1 className="page-title">Ihre Artikel</h1>
                  <h3>Lieferung durch REWE Lieferservice</h3>
                  <h4>Mittwoch 05.09. 13:00-15:00 Uhr</h4>
                    <LineItem
                        imgUrl="https://img.rewe-static.de/1171287/21729312_digital-image.png?output-quality=75&fit=inside|240:240"
                        description="Black Premium Rinder-Steakhüfte Irisch"
                        details="1 Stück ca. 200 g (1 kg = 25,90 €)"
                        price={10}
                        amount={2}
                        changeHandler={this.getTotalPrice}
                    />
                    <LineItem
                        imgUrl="https://img.rewe-static.de/0196479/3851190_digital-image.png?output-quality=75&fit=inside|240:240"
                        description="MILKA SCHOKO TAFEL MILCH 100 GR"
                        details="100g"
                        price={2}
                        changeHandler={this.getTotalPrice}
                    />
                    <LineItem
                        imgUrl="https://img.rewe-static.de/0570894/2622200_digital-image.png?output-quality=75&fit=inside|240:240"
                        description="TEEKANNE Ind. Chai Classic RFA 20er"
                        details="40g (100 g = 5,48 €)"
                        price={3}
                        changeHandler={this.getTotalPrice}
                    />
                    <LineItem
                        imgUrl="https://img.rewe-static.de/0471402/3882110_digital-image.png?output-quality=75&fit=inside|240:240"
                        description="Vollmilch, 3,8% Fett, pasteurisiert, homogenisiert. Länger haltbar."
                        details="1,50l (1 l = 1,26 €)"
                        price={1}
                        changeHandler={this.getTotalPrice}
                    />
                    <LineItem
                        imgUrl="https://img.rewe-static.de/1427496/23189253_digital-image.png?output-quality=75&fit=inside|240:240"
                        description="Orangensaft mit Fruchtfleisch"
                        details="1000ml"
                        price={5}
                        changeHandler={this.getTotalPrice}
                    />
                </section>
            <section className="buttons">
                <article className="sumblock">
                    <div>
                        <p className="sum">Gesamtsumme</p>
                        <p className="sum-detail">inkl. Mwst.</p>
                    </div>
                    <p className="sum-totalprice">{this.state.totalPrice} €</p>
                </article>
                <br/>
                {/*<UserInput inputEvent={this.userInputHandler}/>*/}
                {/*<p>You're paying: {this.state.amountToPay}</p>*/}
              <button className="buy-button" onClick={this.userInputHandler}>Jetzt kaufen</button>
                <br/>
              <button className="buy-button ether" onClick={this.forwarderInputHandler}>
                  <img alt="ethereum" className="ether-logo" src="data:image/png;base64,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" width="150" height="150"/>
                  <span className="ether-button-text">Jetzt mit Ethereum kaufen!</span>
              </button>
            </section>
        </main>
                <Footer/>
                <br/>
                <br/>
                <hr/>

                <br/>
                <br/>
                <h1>Administrator</h1>
                <br/>

                <article className="line-item">
                    <img className="line-item-image" alt="product" src="https://img.rewe-static.de/7665091/637950_digital-image.png?resize=60px:60px&output-quality=70&output-format=png"/>
                    <div className="line-item-info">
                        <p className="line-item-description">Pfand</p>
                    </div>
                    <p className="line-item-price">{0.25 + '€'}</p>
                    <input className="line-item-price-input" type="text" name="price" maxLength="2" defaultValue={this.state.currentValue}
                           onChange={this.changeItAdmin}/>
                </article>
                <br/>
                <button className="buy-button admin"  onClick={this.forwarderRefundHandler}>Pfand zurück</button>
                <br/>
            </div>
        );
    }
}

export default App
