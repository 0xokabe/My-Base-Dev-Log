"use client";

import { useState } from "react";

export default function Day21NetworkActivityMonitor() {
  const [loaded, setLoaded] = useState(false);
  const [activity, setActivity] = useState({
    transactions: "0",
    activeWallets: "0",
    gasUsed: "0",
  });

  const loadActivity = () => {
    // simplified mock data for builder challenge
    setActivity({
      transactions: "152,430",
      activeWallets: "48,210",
      gasUsed: "932 ETH",
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
          width: "620px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Base Network Activity Monitor</h1>

        <button
          onClick={loadActivity}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Network Activity
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Network Overview
        </h2>

        {!loaded ? (
          <p>No network activity loaded yet</p>
        ) : (
          <>
            <p>Total Transactions: {activity.transactions}</p>
            <p>Active Wallets: {activity.activeWallets}</p>
            <p>Gas Used: {activity.gasUsed}</p>
          </>
        )}
      </div>
    </main>
  );
}
