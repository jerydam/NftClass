import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
require('dotenv').config();

const config: HardhatUserConfig = {
  solidity: "0.8.19",
  networks: {
   
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/RbXzMY2Ap-CfgX2UhW6EvSwQIgg0H5Wn',
      //@ts-ignore
      accounts:[process.env.PRIVATE_KEY]},
  },
  etherscan: {
    apiKey: {
      sepolia: '4ECEUW6FRCQ1WI3FF7VCNYW2IKI3MWNCWV'
    }
  }

};

export default config;