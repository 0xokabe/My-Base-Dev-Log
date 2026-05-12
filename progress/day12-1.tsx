"use client";

import { useState } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Day12NFTChecker() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [nftCount, setNftCount] = useState("");
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

  const checkNFTs = async () => {
    try {
      setStatus("Checking NFT holdings...");

      // simplified mock example
      setTimeout(() => {
        setNftCount("7");
        setStatus("NFT holdings loaded ✅");
      }, 1000);
    } catch (error) {
      console.error(error);
      setStatus("Failed to load NFTs ❌");
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
        <h1>Base NFT Holdings Checker</h1>

        {!connected ? (
          <button onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
          <>
            <p>Wallet Connected ✅</p>
            <p>{walletAddress}</p>

            <button
              onClick={checkNFTs}
              style={{
                marginTop: "20px",
                padding: "12px 20px",
              }}
            >
              Check NFT Holdings
            </button>

            <p style={{ marginTop: "20px" }}>{status}</p>

            {nftCount && (
              <>
                <h2 style={{ marginTop: "24px" }}>
                  NFT Count
                </h2>
                <p>{nftCount} NFTs</p>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
}
