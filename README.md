# Blockchain DApp Project - Buy Me a Chai

This project is a decentralized application (DApp) where users can "buy chai" by sending a small amount of cryptocurrency (ETH) along with a message. This DApp showcases a simple way to send Ethereum transactions and messages on the blockchain.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the DApp](#running-the-dapp)
- [Contract Deployment](#contract-deployment)
- [Usage](#usage)
- [License](#license)

## Features

- Users can send ETH to "buy chai" and leave a message.
- Each transaction is stored on the blockchain.
- Displays a list of recent messages and chai purchases.
- Shows the account of the user making the transaction.


## Technologies Used

- **Solidity**: For writing the smart contract.
- **React**: For the frontend interface.
- **Ethers.js**: To interact with the Ethereum blockchain from the frontend.
- **Hardhat**: For smart contract development and deployment.
- **Metamask**: Wallet integration for Ethereum transactions.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) and npm installed.
- [Metamask](https://metamask.io/) extension in your browser.
- [Hardhat](https://hardhat.org/) installed globally.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Yashkrit-Singh/hardhat_Project_ChaiDapp.git
   cd your-repo-name

2. Install dependencies:
   ```bash
   npm install

3. Navigate to the client folder and install dependencies for the frontend:
   ```bash
   cd client
   npm install

### Running the DApp

1. Start the Hardhat Node:
   ```bash
   npx hardhat node

2. Deploy the Contract:
   - In a new terminal, deploy the contract (on local hardhat environment network):
  
           npx hardhat run scripts/deploy.js --network localhost
   - To deploy the contract to a testnet (like Sepolia), update the hardhat.config.cjs with your API keys and deploy it:
  
           npx hardhat run scripts/deploy.js --network sepolia

4. Run the Frontend:
   ```bash
   cd client
   npm start


## Usage
Connect Wallet: Open the DApp and connect your Metamask wallet.
Buy Chai: Enter your name, message, and click "Pay" to send ETH along with your message.
View Memos: All messages and transactions are displayed in the "Memos" section.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

