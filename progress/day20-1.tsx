"use client";

import { useState } from "react";

export default function Day20PortfolioAllocation() {
  const [loaded, setLoaded] = useState(false);
  const [allocation, setAllocation] = useState({
    ETH: "0%",
    Stablecoins: "0%",
    NFTs: "0%",
  });

  const loadAllocation = () => {
    // simplified mock data for builder challenge
    setAllocation({
      ETH: "55%",
      Stablecoins: "35%",
      NFTs: "10%",
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
          width: "600px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Portfolio Allocation Viewer</h1>

        <button
          onClick={loadAllocation}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Portfolio Allocation
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Asset Allocation
        </h2>

        {!loaded ? (
          <p>No allocation data loaded yet</p>
        ) : (
          <>
            <p>ETH: {allocation.ETH}</p>
            <p>Stablecoins: {allocation.Stablecoins}</p>
            <p>NFTs: {allocation.NFTs}</p>
          </>
        )}
      </div>
    </main>
  );
}
