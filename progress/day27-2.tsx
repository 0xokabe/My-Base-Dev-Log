"use client";

import { useState } from "react";

export default function Day27DailyProfitLog() {
  const [logs, setLogs] = useState<string[]>([]);
  const [newLog, setNewLog] = useState("");

  const saveLog = () => {
    if (!newLog) {
      alert("Please enter daily profit note.");
      return;
    }

    setLogs([...logs, newLog]);
    setNewLog("");
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
          width: "560px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Daily Profit Log</h1>

        <input
          placeholder="Add daily profit memo"
          value={newLog}
          onChange={(e) => setNewLog(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={saveLog}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Save Log
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Profit Logs
        </h2>

        {logs.length === 0 ? (
          <p>No profit logs yet</p>
        ) : (
          logs.map((log, index) => (
            <p key={index}>{log}</p>
          ))
        )}
      </div>
    </main>
  );
}
