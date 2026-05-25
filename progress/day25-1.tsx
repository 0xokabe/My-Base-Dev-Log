"use client";

import { useState } from "react";

export default function Day25StakingRewardsTracker() {
  const [loaded, setLoaded] = useState(false);
  const [rewards, setRewards] = useState({
    totalStaked: "0 ETH",
    rewardsEarned: "0 ETH",
    apr: "0%",
  });

  const loadRewards = () => {
    // simplified mock staking data
    setRewards({
      totalStaked: "2.5 ETH",
      rewardsEarned: "0.14 ETH",
      apr: "6.2%",
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
        <h1>Staking Rewards Tracker</h1>

        <button
          onClick={loadRewards}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Staking Data
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Rewards Overview
        </h2>

        {!loaded ? (
          <p>No staking data loaded yet</p>
        ) : (
          <>
            <p>Total Staked: {rewards.totalStaked}</p>
            <p>Rewards Earned: {rewards.rewardsEarned}</p>
            <p>APR: {rewards.apr}</p>
          </>
        )}
      </div>
    </main>
  );
}
