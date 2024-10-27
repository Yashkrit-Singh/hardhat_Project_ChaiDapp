import { useState, useEffect } from 'react';
import './App.css';
import { ethers } from 'ethers'; // Import ethers for interacting with Ethereum
import abi from './contractjson/chai.json'; // Contract ABI
import Buy from './components/Buy'; // Use capitalized component names
import Memos from './components/Memos'; // Use capitalized component names

function App() {
  const [state, setState] = useState({
    provider: null,
    signer: null,
    contract: null,
  });

  const [account, setAccount] = useState('Not Connected');

  useEffect(() => {
    const initialize = async () => {
        const contractAddress = '0x25e828c1Dc126c750BAAd8ab5aF26faa660a0F4f';
        const contractAbi = abi.abi;

        try {
            const { ethereum } = window;

            if (!ethereum) {
                alert('Please install MetaMask!');
                return;
            }

            const provider = new ethers.BrowserProvider(ethereum);
            const signer = await provider.getSigner();
            const accounts = await provider.send('eth_requestAccounts', []);
            setAccount(accounts[0]);
            console.log('Connected accounts:', accounts);

            window.ethereum.on("accountsChanged", (accounts) => {
                if (accounts.length > 0) {
                    setAccount(accounts[0]); // Update account state
                } else {
                    setAccount('Not Connected');
                }
            });

            const contract = new ethers.Contract(contractAddress, contractAbi, signer);
            console.log('Contract instance:', contract);

            setState({ provider, signer, contract });
        } catch (e) {
            console.error('Error connecting to Ethereum:', e);
            alert('Failed to connect to Ethereum. See console for details.');
        }
    };

    initialize();
    
    // Clean up event listener on unmount
    return () => {
        window.ethereum.removeListener('accountsChanged', (accounts) => {
            setAccount(accounts.length > 0 ? accounts[0] : 'Not Connected');
        });
    };
}, []);


  return (
    <div className="App">
      <h1>Chai DApp</h1>
      <p>Account: {account}</p>
      {/* Use capitalized component names */}
      <Buy state={state} account = {account}/>
      <Memos state={state} />
    </div>
  );
}

export default App;
