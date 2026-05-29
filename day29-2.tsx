"use client";

import { useState } from "react";

export default function Day29GasUsageHistory() {
  const [loaded, setLoaded] = useState(false);
  const [history, setHistory] = useState<
    {
      date: string;
      gasUsed: string;
    }[]
  >([]);

  const loadHistory = () => {
    // simplified mock gas usage history
    setHistory([
      {
        date: "2026-05-25",
        gasUsed: "0.0042 ETH",
      },
      {
        date: "2026-05-26",
        gasUsed: "0.0031 ETH",
      },
      {
        date: "2026-05-27",
        gasUsed: "0.0054 ETH",
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
          width: "620px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Gas Usage History</h1>

        <button
          onClick={loadHistory}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load Gas History
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Recent Gas Usage
        </h2>

        {!loaded ? (
          <p>No gas history loaded yet</p>
        ) : (
          history.map((item, index) => (
            <div
              key={index}
              style={{
                marginTop: "16px",
                padding: "12px",
                border: "1px solid #222",
                borderRadius: "12px",
              }}
            >
              <p>Date: {item.date}</p>
              <p>Gas Used: {item.gasUsed}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
