"use client";

import { useState } from "react";

export default function Day18BridgeHistoryViewer() {
  const [loaded, setLoaded] = useState(false);
  const [bridgeHistory, setBridgeHistory] = useState<string[]>([]);

  const loadBridgeHistory = () => {
    // simplified mock data for builder challenge
    const mockHistory = [
      "Bridged 0.15 ETH from Ethereum → Base",
      "Bridged 100 USDC from Arbitrum → Base",
      "Bridged 50 DAI from Optimism → Base",
      "Bridged 0.03 ETH from Base → Ethereum",
    ];

    setBridgeHistory(mockHistory);
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
          width: "600px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Bridge History Viewer</h1>

        <button
          onClick={loadBridgeHistory}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Bridge History
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Recent Bridge Activity
        </h2>

        {!loaded ? (
          <p>No bridge history loaded yet</p>
        ) : (
          bridgeHistory.map((item, index) => (
            <p key={index}>{item}</p>
          ))
        )}
      </div>
    </main>
  );
}
