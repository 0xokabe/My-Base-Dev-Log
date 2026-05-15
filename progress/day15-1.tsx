"use client";

import { useState } from "react";

export default function Day15WalletActivityStats() {
  const [loaded, setLoaded] = useState(false);
  const [stats, setStats] = useState({
    totalTx: "0",
    totalSent: "0",
    totalReceived: "0",
  });

  const loadStats = () => {
    // simplified mock data for builder challenge
    setStats({
      totalTx: "24",
      totalSent: "12",
      totalReceived: "12",
    });

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
        <h1>Wallet Activity Stats</h1>

        <button
          onClick={loadStats}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Activity Stats
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Activity Summary
        </h2>

        {!loaded ? (
          <p>No activity stats loaded yet</p>
        ) : (
          <>
            <p>Total Transactions: {stats.totalTx}</p>
            <p>Total Sent: {stats.totalSent}</p>
            <p>Total Received: {stats.totalReceived}</p>
          </>
        )}
      </div>
    </main>
  );
}
