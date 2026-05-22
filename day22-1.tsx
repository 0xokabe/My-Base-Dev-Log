"use client";

import { useState } from "react";

export default function Day22TokenWatchAlerts() {
  const [alerts, setAlerts] = useState<string[]>([]);
  const [newAlert, setNewAlert] = useState("");

  const saveAlert = () => {
    if (!newAlert) {
      alert("Please enter alert condition.");
      return;
    }

    setAlerts([...alerts, newAlert]);
    setNewAlert("");
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
        <h1>Token Watch Alerts</h1>

        <input
          placeholder="Add token alert (ex: ETH above $3500)"
          value={newAlert}
          onChange={(e) => setNewAlert(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={saveAlert}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Save Alert
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Active Alerts
        </h2>

        {alerts.length === 0 ? (
          <p>No alerts configured yet</p>
        ) : (
          alerts.map((alert, index) => (
            <p key={index}>{alert}</p>
          ))
        )}
      </div>
    </main>
  );
}
