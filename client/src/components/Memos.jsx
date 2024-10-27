import React, { useState, useEffect } from "react";
import './Memos.css'; // Import the CSS file for styling

const Memos = ({ state }) => {
    const [memos, setMemos] = useState([]);
    const { contract } = state;

    useEffect(() => {
        const memosMessage = async () => {
            try {
                const memos = await contract.getMemos();
                console.log("Memos:", memos);
                setMemos(memos);
            } catch (error) {
                console.error("Error fetching memos:", error);
            }
        };

        if (contract) {
            memosMessage();
        }
    }, [contract]);

    return (
        <div className="memos-container">
            <h2>Memos</h2>
            {memos.length > 0 ? (
                memos.map((memo) => (
                    <div className="memo-card" key={memo.timeStamp}>
                        <h3 className="memo-name">{memo.name}</h3>
                        <p className="memo-message">{memo.message}</p>
                        <p className="timestamp">{new Date(Number(memo.timeStamp) * 1000).toLocaleString()}</p>
                        <p className="from">{memo.from}</p>
                    </div>
                ))
            ) : (
                <p className="no-memos">No memos available.</p>
            )}
        </div>
    );
};

export default Memos;
