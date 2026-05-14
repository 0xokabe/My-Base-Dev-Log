"use client";

import { useState } from "react";

declare global {
  interface Window {
    ethereum?: any;
  }
}

export default function Day14TokenTransferHistory() {
  const [loaded, setLoaded] = useState(false);
  const [transfers, setTransfers] = useState<string[]>([]);

  const loadTransfers = () => {
    // simplified mock data for builder challenge
    const mockTransfers = [
      "Sent 25 USDC to 0x123...abc",
      "Received 10 USDC from 0x456...def",
      "Sent 5 DAI to 0x789...ghi",
      "Received 15 USDT from 0x321...xyz",
    ];

    setTransfers(mockTransfers);
    setLoaded(true);
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
          width: "580px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Token Transfer History</h1>

        <button
          onClick={loadTransfers}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Token Transfers
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Recent Transfers
        </h2>

        {!loaded ? (
          <p>No transfer history loaded yet</p>
        ) : (
          transfers.map((item, index) => (
            <p key={index}>{item}</p>
          ))
        )}
      </div>
    </main>
  );
}
