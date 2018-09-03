var etherTo = artifacts.require("./EtherTransferTo.sol");

module.exports = function(deployer) {
    deployer.deploy(etherTo);
};
