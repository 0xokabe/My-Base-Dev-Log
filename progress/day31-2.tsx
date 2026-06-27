"use client";

import { useState } from "react";

export default function Day31FavoriteDapps() {
  const [dapps, setDapps] = useState<string[]>([]);
  const [newDapp, setNewDapp] = useState("");

  const addDapp = () => {
    if (!newDapp) {
      alert("Enter a dApp name.");
      return;
    }

    setDapps([...dapps, newDapp]);
    setNewDapp("");
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
          background: "#111",
          border: "1px solid #222",
          textAlign: "center",
        }}
      >
        <h1>Favorite dApps</h1>

        <input
          placeholder="Add favorite dApp"
          value={newDapp}
          onChange={(e) => setNewDapp(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={addDapp}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Add dApp
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Favorite List
        </h2>

        {dapps.length === 0 ? (
          <p>No favorite dApps yet</p>
        ) : (
          dapps.map((dapp, index) => (
            <p key={index}>{dapp}</p>
          ))
        )}
      </div>
    </main>
  );
}
