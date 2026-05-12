"use client";

import { useState } from "react";

export default function Day12FavoriteTokens() {
  const [favoriteTokens, setFavoriteTokens] = useState<string[]>([]);
  const [newToken, setNewToken] = useState("");

  const addToken = () => {
    if (!newToken) {
      alert("Please enter token symbol.");
      return;
    }

    setFavoriteTokens([...favoriteTokens, newToken]);
    setNewToken("");
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
        <h1>Favorite Token Watchlist</h1>

        <input
          placeholder="Add Token Symbol (ex: ETH)"
          value={newToken}
          onChange={(e) => setNewToken(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <button
          onClick={addToken}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Add Token
        </button>

        <h2 style={{ marginTop: "28px" }}>
          Watchlist
        </h2>

        {favoriteTokens.length === 0 ? (
          <p>No favorite tokens yet</p>
        ) : (
          favoriteTokens.map((token, index) => (
            <p key={index}>{token}</p>
          ))
        )}
      </div>
    </main>
  );
}
