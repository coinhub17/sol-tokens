/** @type import('hardhat/config').HardhatUserConfig */
require('@nomiclabs/hardhat-waffle');

const INFURA_URL='https://mainnet.infura.io/v3/b451e58e87b74c938e4d7968eb9b7fbf'
const P_KEY='ecfeda05917cd53cfa5e5848ad2e7e7c95f1cb841572f85d3cde45bfc18228b4'
module.exports = {
  solidity: "0.8.17",
  networks:{
    MAINNET:{
      url:INFURA_URL,
      accounts:[`0x${P_KEY}`],

    }
  }
};
