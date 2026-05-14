"use client";

import { useState } from "react";

export default function Day14FavoriteWallets() {
  const [wallets, setWallets] = useState<string[]>([]);
  const [newWallet, setNewWallet] = useState("");

  const addWallet = () => {
    if (!newWallet) {
      alert("Please enter wallet address.");
      return;
    }

    setWallets([...wallets, newWallet]);
    setNewWallet("");
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
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Favorite Wallet Tracker</h1>

        <input
          placeholder="Add Favorite Wallet"
          value={newWallet}
          onChange={(e) => setNewWallet(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={addWallet}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Save Wallet
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Favorite Wallets
        </h2>

        {wallets.length === 0 ? (
          <p>No saved wallets yet</p>
        ) : (
          wallets.map((wallet, index) => (
            <p key={index}>{wallet}</p>
          ))
        )}
      </div>
    </main>
  );
}
