# Day 6 — Auto Switch to Base Network

## Goal

Today I planned the automatic network switching feature.

The purpose is to help users quickly switch to Base Mainnet when they are connected to the wrong network.

This improves UX and reduces failed transactions.

---

## Feature Overview

When the wallet is connected and the current network is not Base Mainnet:

- Show warning message
- Display "Switch to Base" button
- Request automatic network switch

If the user approves:

Base Mainnet Connected ✅

---

## Target Network Info

### Base Mainnet

- Chain Name: Base Mainnet
- Chain ID: 8453
- RPC URL:
https://mainnet.base.org
- Currency Symbol:
ETH
- Block Explorer:
https://basescan.org

---

## Example Logic

```tsx
await window.ethereum.request({
  method: "wallet_switchEthereumChain",
  params: [{ chainId: "0x2105" }],
});
