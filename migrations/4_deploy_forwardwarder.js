var forwarder = artifacts.require("./Forwarder.sol");

module.exports = function(deployer) {
    deployer.deploy(forwarder);
};
