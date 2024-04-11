"use client"
import { CurrencyWrapper } from "./components/CurrencyWrapper"

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <CurrencyWrapper />
    </main>
  );
}
