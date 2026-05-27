"use client";

import { useState } from "react";

export default function Day27YieldFarmTracker() {
  const [loaded, setLoaded] = useState(false);
  const [farms, setFarms] = useState<
    {
      protocol: string;
      apr: string;
      deposited: string;
    }[]
  >([]);

  const loadFarms = () => {
    // simplified mock farming data
    setFarms([
      {
        protocol: "Aerodrome",
        apr: "14.2%",
        deposited: "$1,250",
      },
      {
        protocol: "Uniswap",
        apr: "9.8%",
        deposited: "$820",
      },
      {
        protocol: "Compound",
        apr: "6.4%",
        deposited: "$2,100",
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
        <h1>Yield Farm Tracker</h1>

        <button
          onClick={loadFarms}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Yield Farms
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Active Farming Positions
        </h2>

        {!loaded ? (
          <p>No farming data loaded yet</p>
        ) : (
          farms.map((farm, index) => (
            <div
              key={index}
              style={{
                marginTop: "16px",
                padding: "12px",
                border: "1px solid #222",
                borderRadius: "12px",
              }}
            >
              <p>Protocol: {farm.protocol}</p>
              <p>APR: {farm.apr}</p>
              <p>Deposited: {farm.deposited}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
