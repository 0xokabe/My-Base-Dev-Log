// Day 7 — Base Wallet Balance Fetcher (Part 1)

"use client";

import { useEffect, useState } from "react";

export default function WalletBalancePage() {
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState("");
  const [connected, setConnected] = useState(false);

  const connectWallet = async () => {
    if (typeof window !== "undefined" && (window as any).ethereum) {
      try {
        const accounts = await (window as any).ethereum.request({
          method: "eth_requestAccounts",
        });

        const address = accounts[0];

        setWalletAddress(address);
        setConnected(true);

        fetchBalance(address);
      } catch (error) {
        console.error("Connection failed:", error);
      }
    }
  };

  const fetchBalance = async (address: string) => {
    try {
      const balanceHex = await (window as any).ethereum.request({
        method: "eth_getBalance",
        params: [address, "latest"],
      });

      const balanceWei = parseInt(balanceHex, 16);
      const balanceEth = balanceWei / 1e18;

      setBalance(balanceEth.toFixed(4));
    } catch (error) {
      console.error("Balance fetch failed:", error);
    }
  };
