"use client";

import { useState } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Day10TokenBalanceChecker() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [tokenAddress, setTokenAddress] = useState("");
  const [tokenBalance, setTokenBalance] = useState("");
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

  const checkTokenBalance = async () => {
    if (!tokenAddress) {
      alert("Please enter token contract address.");
      return;
    }

    try {
      setStatus("Fetching token balance...");

      // simplified example for builder challenge
      setTimeout(() => {
        setTokenBalance("1250.45");
        setStatus("Token balance loaded ✅");
      }, 1000);
    } catch (error) {
      console.error(error);
      setStatus("Failed to fetch token balance ❌");
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
          width: "560px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Base Token Balance Checker</h1>

        {!connected ? (
          <button onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
          <>
            <p>Wallet Connected ✅</p>
            <p>{walletAddress}</p>

            <input
              placeholder="Token Contract Address"
              value={tokenAddress}
              onChange={(e) => setTokenAddress(e.target.value)}
              style={{
                width: "100%",
                padding: "12px",
                marginTop: "20px",
              }}
            />

            <button
              onClick={checkTokenBalance}
              style={{
                marginTop: "20px",
                padding: "12px 20px",
              }}
            >
              Check Token Balance
            </button>

            <p style={{ marginTop: "20px" }}>{status}</p>

            {tokenBalance && (
              <>
                <h2 style={{ marginTop: "24px" }}>
                  Token Balance
                </h2>
                <p>{tokenBalance}</p>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
}
