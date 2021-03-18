let Voting = artifacts.require("SimpleVoting");

module.exports = function(deployer) {
    deployer.deploy(Voting);
};