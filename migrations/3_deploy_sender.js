var sender = artifacts.require("./Sender.sol");

module.exports = function(deployer) {
    deployer.deploy(sender);
};
