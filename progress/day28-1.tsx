"use client";

import { useState } from "react";

export default function Day28NFTCollectionViewer() {
  const [loaded, setLoaded] = useState(false);
  const [collections, setCollections] = useState<
    {
      name: string;
      items: number;
      floor: string;
    }[]
  >([]);

  const loadCollections = () => {
    // simplified mock NFT data
    setCollections([
      {
        name: "Base Apes",
        items: 12,
        floor: "0.42 ETH",
      },
      {
        name: "Onchain Cats",
        items: 5,
        floor: "0.18 ETH",
      },
      {
        name: "Pixel Builders",
        items: 8,
        floor: "0.27 ETH",
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
          width: "650px",
          padding: "32px",
          borderRadius: "16px",
          border: "1px solid #222",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>NFT Collection Viewer</h1>

        <button
          onClick={loadCollections}
          style={{
            marginTop: "20px",
            padding: "12px 20px",
          }}
        >
          Load NFT Collections
        </button>

        <h2 style={{ marginTop: "28px" }}>
          NFT Portfolio
        </h2>

        {!loaded ? (
          <p>No NFT collections loaded yet</p>
        ) : (
          collections.map((collection, index) => (
            <div
              key={index}
              style={{
                marginTop: "16px",
                padding: "12px",
                border: "1px solid #222",
                borderRadius: "12px",
              }}
            >
              <p>Collection: {collection.name}</p>
              <p>Items: {collection.items}</p>
              <p>Floor Price: {collection.floor}</p>
            </div>
          ))
        )}
      </div>
    </main>
  );
}
