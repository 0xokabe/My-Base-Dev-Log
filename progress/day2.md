# Day 2 — Wallet Connect Flow Design

## Goal

Today I planned the wallet connection flow for the Base Mini Dapps project.

The objective is to make a simple and clean wallet connection starter that works on Base Mainnet.

---

## Features to Add

### 1. Connect Wallet Button

Users can connect their wallet using MetaMask or other injected wallets.

### 2. Show Wallet Address

After connection, display the connected wallet address on screen.

Example:

0x1234...abcd

### 3. Network Detection

Check whether the user is connected to Base Mainnet.

- Base Mainnet → Success
- Wrong Network → Show warning

### 4. Disconnect Button

Allow users to safely disconnect their wallet session.

---

## Expected Stack

- Next.js
- wagmi
- viem
- Base Chain

---

## Next Step

Tomorrow I will start implementing the actual `page.tsx` wallet connect UI.

Consistent building > perfect building.
