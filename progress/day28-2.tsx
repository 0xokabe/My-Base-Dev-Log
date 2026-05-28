"use client";

import { useState } from "react";

export default function Day28WatchlistManager() {
  const [watchlist, setWatchlist] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");

  const addWatchlistItem = () => {
    if (!newItem) {
      alert("Please enter watchlist item.");
      return;
    }

    setWatchlist([...watchlist, newItem]);
    setNewItem("");
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
        <h1>Token Watchlist Manager</h1>

        <input
          placeholder="Add token or NFT project"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={addWatchlistItem}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Add to Watchlist
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Current Watchlist
        </h2>

        {watchlist.length === 0 ? (
          <p>No watchlist items yet</p>
        ) : (
          watchlist.map((item, index) => (
            <p key={index}>{item}</p>
          ))
        )}
      </div>
    </main>
  );
}
