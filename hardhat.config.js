/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-waffle');

const INFURA_URL='----------------------------------'
const P_KEY='--------------------------------------'
module.exports = {
  solidity: "0.8.17",
  networks:{
    MAINNET:{
      url:INFURA_URL,
      accounts:[`0x${P_KEY}`],

    }
  }
};
