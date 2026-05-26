"use client";

import { useState } from "react";

export default function Day26LiquidityPoolViewer() {
  const [loaded, setLoaded] = useState(false);
  const [pools, setPools] = useState<
    {
      pair: string;
      apr: string;
      liquidity: string;
    }[]
  >([]);

  const loadPools = () => {
    // simplified mock LP data
    setPools([
      {
        pair: "ETH / USDC",
        apr: "8.4%",
        liquidity: "$12.4M",
      },
      {
        pair: "DAI / USDC",
        apr: "5.2%",
        liquidity: "$8.1M",
      },
      {
        pair: "ETH / DAI",
        apr: "7.1%",
        liquidity: "$5.6M",
      },
    ]);

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
          width: "640px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Liquidity Pool Viewer</h1>

        <button
          onClick={loadPools}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Liquidity Pools
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Top Pools
        </h2>

        {!loaded ? (
          <p>No liquidity pools loaded yet</p>
        ) : (
          pools.map((pool, index) => (
            <div
              key={index}
              style={{
                marginTop: "16px",
                padding: "12px",
                border: "1px solid #222",
                borderRadius: "12px",
              }}
            >
              <p>Pair: {pool.pair}</p>
              <p>APR: {pool.apr}</p>
              <p>Liquidity: {pool.liquidity}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
