var purchase = artifacts.require("./Purchase.sol");

module.exports = function(deployer) {
    deployer.deploy(purchase);
};
