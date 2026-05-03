// Day 3 — Base Wallet Connect UI (page.tsx)

"use client";

import { useState } from "react";

export default function HomePage() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");

  const connectWallet = async () => {
    if (typeof window !== "undefined" && (window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });

        setWalletAddress(accounts[0]);
        setConnected(true);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("Please install MetaMask.");
    }
  };

  const disconnectWallet = () => {
    setConnected(false);
    setWalletAddress("");
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
          width: "500px",
          padding: "32px",
          border: "1px solid #222",
          borderRadius: "16px",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Base Wallet Connect</h1>

        {!connected ? (
          <>
            <p>Connect your wallet to start building on Base.</p>
            <button
              onClick={connectWallet}
              style={{
                padding: "12px 20px",
                marginTop: "20px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Connect Wallet
            </button>
          </>
        ) : (
          <>
            <p>Wallet Connected ✅</p>
            <p>{walletAddress}</p>

            <button
              onClick={disconnectWallet}
              style={{
                padding: "12px 20px",
                marginTop: "20px",
                borderRadius: "10px",
                border: "none",
                cursor: "pointer",
              }}
            >
              Disconnect
            </button>
          </>
        )}
      </div>
    </main>
  );
}
