var acceptEth = artifacts.require("./AcceptEth.sol");

module.exports = function(deployer) {
    deployer.deploy(acceptEth);
};
