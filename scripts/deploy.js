import pkg from 'hardhat';
const { ethers } = pkg;

const main = async () => {
    console.log("Contract Factory fetched for Chai.");
    const Chai = await ethers.getContractFactory("chai");
    console.log("Deploying Chai contract...");
    
    // Deploy the contract
    const chaiToken = await Chai.deploy();
    
    // Wait for the deployment to be mined
    await chaiToken.waitForDeployment();
    
    // Access and log the deployment target (address)
    const contractAddress = chaiToken.target || chaiToken.address; // Use target in Ethers v6+
    console.log("Contract deployed at:", contractAddress);
}

main().catch((e) => {
    console.error("Error:", e);
    process.exitCode = 1;
});
