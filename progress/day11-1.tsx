"use client";

import { useState } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Day11GasFeeEstimator() {
  const [connected, setConnected] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [gasFee, setGasFee] = useState("");
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

  const estimateGasFee = async () => {
    try {
      setStatus("Estimating gas fee...");

      const gasPrice = await window.ethereum.request({
        method: "eth_gasPrice",
      });

      const gasInGwei = parseInt(gasPrice, 16) / 1e9;

      setGasFee(gasInGwei.toFixed(4));
      setStatus("Gas fee estimated ✅");
    } catch (error) {
      console.error(error);
      setStatus("Failed to estimate gas fee ❌");
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
        <h1>Base Gas Fee Estimator</h1>

        {!connected ? (
          <button onClick={connectWallet}>
            Connect Wallet
          </button>
        ) : (
          <>
            <p>Wallet Connected ✅</p>
            <p>{walletAddress}</p>

            <button
              onClick={estimateGasFee}
              style={{
                marginTop: "20px",
                padding: "12px 20px",
              }}
            >
              Estimate Gas Fee
            </button>

            <p style={{ marginTop: "20px" }}>{status}</p>

            {gasFee && (
              <>
                <h2 style={{ marginTop: "24px" }}>
                  Current Gas Price
                </h2>
                <p>{gasFee} Gwei</p>
              </>
            )}
          </>
        )}
      </div>
    </main>
  );
}
