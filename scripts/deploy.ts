import { ethers } from "hardhat";

async function main() {
  
  const nftContract = await ethers.deployContract("MyNft");
  const [owner] = await ethers.getSigners();
  await nftContract.waitForDeployment();

  console.log(
  `Nft contract deployed to ${nftContract.target}`
  );
const IPFS = "QmX5hP59bSs1JxCFWgS52vUrY4bS4vU1cAnX9eJ2Ed9V8A";

 const MyMint = await nftContract.safeMint(owner.address,IPFS);
     console.log(MyMint)
 }

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});