"use client";

import { useState } from "react";

export default function Day23WalletLeaderboard() {
  const [loaded, setLoaded] = useState(false);
  const [leaders, setLeaders] = useState<
    { wallet: string; score: number }[]
  >([]);

  const loadLeaderboard = () => {
    // simplified mock leaderboard data
    setLeaders([
      { wallet: "0x123...abc", score: 98 },
      { wallet: "0x456...def", score: 91 },
      { wallet: "0x789...ghi", score: 87 },
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
          width: "620px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Wallet Activity Leaderboard</h1>

        <button
          onClick={loadLeaderboard}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Leaderboard
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Top Wallets
        </h2>

        {!loaded ? (
          <p>No leaderboard data loaded yet</p>
        ) : (
          leaders.map((item, index) => (
            <p key={index}>
              #{index + 1} {item.wallet} — Score: {item.score}
            </p>
          ))
        )}
      </div>
    </main>
  );
}
