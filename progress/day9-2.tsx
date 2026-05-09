"use client";

import { useState } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Day9TransactionStatus() {
  const [txHash, setTxHash] = useState("");
  const [status, setStatus] = useState("");

  const checkTransaction = async () => {
    if (!window.ethereum || !txHash) return;

    try {
      const receipt = await window.ethereum.request({
        method: "eth_getTransactionReceipt",
        params: [txHash],
      });

      if (receipt) {
        setStatus("Transaction Confirmed ✅");
      } else {
        setStatus("Pending Transaction ⏳");
      }
    } catch (error) {
      console.error(error);
      setStatus("Failed to check transaction ❌");
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
        <h1>Transaction Status Checker</h1>

        <input
          placeholder="Paste Transaction Hash"
          value={txHash}
          onChange={(e) => setTxHash(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={checkTransaction}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Check Status
        </button>

        <p style={{ marginTop: "20px" }}>
          {status}
        </p>
      </div>
    </main>
  );
}
