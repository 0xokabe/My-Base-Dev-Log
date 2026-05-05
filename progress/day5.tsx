// Day 5 — Base Network Status UI

"use client";

import { useState, useEffect } from "react";

export default function NetworkStatusPage() {
  const [chainId, setChainId] = useState<number | null>(null);

  useEffect(() => {
    const checkNetwork = async () => {
      if (typeof window !== "undefined" && (window as any).ethereum) {
        try {
          const currentChainId = await (window as any).ethereum.request({
            method: "eth_chainId",
          });

          setChainId(parseInt(currentChainId, 16));
        } catch (error) {
          console.error("Failed to detect network:", error);
        }
      }
    };

    checkNetwork();
  }, []);

  const isBase = chainId === 8453;

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
          width: "500px",
          padding: "32px",
          border: "1px solid #222",
          borderRadius: "16px",
          background: "#111",
          textAlign: "center",
        }}
      >
        <h1>Base Network Checker</h1>

        {chainId ? (
          <>
            <p>Current Chain ID: {chainId}</p>

            <p style={{ marginTop: "20px" }}>
              {isBase
                ? "Base Mainnet Connected ✅"
                : "Wrong Network ❌ Please switch to Base Mainnet"}
            </p>
          </>
        ) : (
          <p>Checking network...</p>
        )}
      </div>
    </main>
  );
}
