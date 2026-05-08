"use client";

import { useState } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Day8NetworkChecker() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [networkName, setNetworkName] = useState("");
  const [isBaseSepolia, setIsBaseSepolia] = useState(false);

  const BASE_SEPOLIA_CHAIN_ID = "0x14a34"; // 84532

  const connectWallet = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed.");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });

      const chainId = await window.ethereum.request({
        method: "eth_chainId",
      });

      setWalletAddress(accounts[0]);
      setConnected(true);

      checkNetwork(chainId);
    } catch (error) {
      console.error(error);
    }
  };

  const checkNetwork = (chainId: string) => {
    if (chainId === BASE_SEPOLIA_CHAIN_ID) {
      setNetworkName("Base Sepolia");
      setIsBaseSepolia(true);
    } else {
      setNetworkName(`Wrong Network (${chainId})`);
      setIsBaseSepolia(false);
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
          width: "520px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Base Network Checker</h1>

        {!connected ? (
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
        ) : (
          <>
            <p style={{ marginTop: "20px" }}>
              Wallet Connected ✅
            </p>

            <p>{walletAddress}</p>

            <h2 style={{ marginTop: "24px" }}>
              Current Network
            </h2>

            <p>{networkName}</p>

            {isBaseSepolia ? (
              <p style={{ marginTop: "16px" }}>
                Ready to build on Base 🚀
              </p>
            ) : (
              <p style={{ marginTop: "16px" }}>
                Please switch to Base Sepolia
              </p>
            )}
          </>
        )}
      </div>
    </main>
  );
}
