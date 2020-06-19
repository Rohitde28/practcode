// migrating the appropriate contracts
var SolnSquareVerifier = artifacts.require("./SolnSquareVerifier");
var ERC721Mintable = artifacts.require("./RealEstateERC721Token");
var SquareVerifier = artifacts.require("./SquareVerifier");


module.exports = function(deployer) {
  deployer.deploy(SquareVerifier)
   .then(() => {
     return deployer.deploy(SolnSquareVerifier,SquareVerifier.address);
   })
};
