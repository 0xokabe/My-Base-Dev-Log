"use client";
 
import { useState } from "react";

export default function Day31TransactionAnalyzer() {
  const [loaded, setLoaded] = useState(false);

  const [stats, setStats] = useState({
    total: 0,
    success: 0,
    failed: 0,
  });

  const analyzeTransactions = () => {
    // Mock transaction analysis
    setStats({
      total: 128,
      success: 124,
      failed: 4,
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
          background: "#111",
          border: "1px solid #222",
          textAlign: "center",
        }}
      >
        <h1>Transaction Analyzer</h1>

        <button
          onClick={analyzeTransactions}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Analyze Transactions
        </button>

        {loaded && (
          <>
            <h2 style={{ marginTop: "28px" }}>
              Analysis Result
            </h2>

            <p>Total Transactions: {stats.total}</p>
            <p>Successful: {stats.success}</p>
            <p>Failed: {stats.failed}</p>
          </>
        )}
      </div>
    </main>
  );
}
