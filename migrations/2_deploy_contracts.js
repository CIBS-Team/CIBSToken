var CIBSToken = artifacts.require("CIBSToken");

module.exports = function(deployer) {
  deployer.deploy(CIBSToken);
};
