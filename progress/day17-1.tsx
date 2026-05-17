"use client";

import { useState } from "react";

export default function Day17TokenPriceTracker() {
  const [loaded, setLoaded] = useState(false);
  const [prices, setPrices] = useState({
    ETH: "$0",
    USDC: "$0",
    DAI: "$0",
  });

  const loadPrices = () => {
    // simplified mock data for builder challenge
    setPrices({
      ETH: "$3,250",
      USDC: "$1.00",
      DAI: "$1.00",
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
        <h1>Token Price Tracker</h1>

        <button
          onClick={loadPrices}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Token Prices
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Current Prices
        </h2>

        {!loaded ? (
          <p>No token price data loaded yet</p>
        ) : (
          <>
            <p>ETH: {prices.ETH}</p>
            <p>USDC: {prices.USDC}</p>
            <p>DAI: {prices.DAI}</p>
          </>
        )}
      </div>
    </main>
  );
}
