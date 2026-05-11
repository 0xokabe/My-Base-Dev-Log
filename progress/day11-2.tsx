"use client";

import { useState } from "react";

export default function Day11TransactionHistory() {
  const [history, setHistory] = useState<string[]>([]);
  const [loaded, setLoaded] = useState(false);

  const loadHistory = () => {
    // simplified mock data for builder challenge
    const mockHistory = [
      "Sent 0.01 ETH to 0x123...abc",
      "Received 0.05 ETH from 0x456...def",
      "Switched to Base Sepolia",
      "Checked token balance",
    ];

    setHistory(mockHistory);
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
        <h1>Transaction History Viewer</h1>

        <button
          onClick={loadHistory}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Recent Activity
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Recent Activity
        </h2>

        {!loaded ? (
          <p>No activity loaded yet</p>
        ) : (
          history.map((item, index) => (
            <p key={index}>{item}</p>
          ))
        )}
      </div>
    </main>
  );
}
