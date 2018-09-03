var sc = artifacts.require("./SendContract.sol");

module.exports = function(deployer) {
    deployer.deploy(sc);
};
