"use client"; 

import { useState } from "react";

export default function Day29AirdropTracker() {
  const [loaded, setLoaded] = useState(false);
  const [airdrops, setAirdrops] = useState<
    {
      project: string;
      status: string;
      reward: string;
    }[]
  >([]);

  const loadAirdrops = () => {
    // simplified mock airdrop data
    setAirdrops([
      {
        project: "BaseQuest",
        status: "Eligible ✅",
        reward: "120 Tokens",
      },
      {
        project: "Onchain Hub",
        status: "Pending ⏳",
        reward: "Unknown",
      },
      {
        project: "BridgeFi",
        status: "Claimed 🎉",
        reward: "75 Tokens",
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
          width: "650px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Airdrop Tracker</h1>

        <button
          onClick={loadAirdrops}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Airdrop Status
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Airdrop Overview
        </h2>

        {!loaded ? (
          <p>No airdrop data loaded yet</p>
        ) : (
          airdrops.map((drop, index) => (
            <div
              key={index}
              style={{
                marginTop: "16px",
                padding: "12px",
                border: "1px solid #222",
                borderRadius: "12px",
              }}
            >
              <p>Project: {drop.project}</p>
              <p>Status: {drop.status}</p>
              <p>Reward: {drop.reward}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
