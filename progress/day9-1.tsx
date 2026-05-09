"use client";

import { useState } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Day9SendTransaction() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [recipient, setRecipient] = useState("");
  const [amount, setAmount] = useState("");
  const [status, setStatus] = useState("");

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed.");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      setWalletAddress(accounts[0]);
      setConnected(true);
    } catch (error) {
      console.error(error);
    }
  };

  const sendTransaction = async () => {
    if (!recipient || !amount) {
      alert("Please fill all fields.");
      return;
    }

    try {
      await window.ethereum.request({
        method: "eth_sendTransaction",
        params: [
          {
            from: walletAddress,
            to: recipient,
            value: `0x${(Number(amount) * 1e18).toString(16)}`,
          },
        ],
      });

      setStatus("Transaction sent successfully 🚀");
    } catch (error) {
      console.error(error);
      setStatus("Transaction failed ❌");
    }
  };

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0a0a0a",
        color: "white",
      }}
    >
      <div
        style={{
          width: "550px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Base Send Transaction</h1>

        {!connected ? (
          <button onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
          <>
            <p>Wallet Connected ✅</p>
            <p>{walletAddress}</p>

            <input
              placeholder="Recipient Address"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "20px",
              }}
            />

            <input
              placeholder="Amount (ETH)"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "12px",
              }}
            />

            <button
              onClick={sendTransaction}
              style={{
                marginTop: "20px",
                padding: "12px 20px",
              }}
            >
              Send Transaction
            </button>

            <p style={{ marginTop: "20px" }}>{status}</p>
          </>
        )}
      </div>
    </main>
  );
}
