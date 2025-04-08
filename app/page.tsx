"use client"; // Add this at the top

import dynamic from "next/dynamic";

// Dynamically import Homepage with SSR disabled
const Homepage = dynamic(() => import("@/app/components/home/Home"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="">
      <Homepage />
    </div>
  );
}
