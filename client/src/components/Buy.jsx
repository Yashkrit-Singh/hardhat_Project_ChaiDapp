import React, { useState } from 'react';
import { ethers } from 'ethers';
import './Buy.css'; // Import the CSS file for styling

const Buy = ({ state, account }) => {
    const [formData, setFormData] = useState({
        name: '',
        message: '',
    });

    const buyChai = async (e) => {
        e.preventDefault();
        const { contract } = state;

        const { ethereum } = window;
        const provider = new ethers.BrowserProvider(ethereum);
        const signer = await provider.getSigner();
        const currentAccount = await signer.getAddress();
        console.log(currentAccount);
        const amountToPay = ethers.parseEther("0.001");
        try {
            const transaction = await contract.buyChai(formData.name, formData.message, {
                value: amountToPay,
            });
            await transaction.wait();
            alert('Chai purchased successfully!');
        } catch (error) {
            console.error('Transaction failed:', error);
            alert('Transaction failed, see console for details.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    return (
        <div className="buy-container">
            <h2>Buy Chai</h2>
            <form onSubmit={buyChai} className="buy-form">
                <input
                    type="text"
                    name="name"
                    placeholder='Your Name'
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
                <textarea
                    name="message"
                    placeholder='Your Message'
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Pay 0.001 ETH</button>
            </form>
        </div>
    );
}

export default Buy;
