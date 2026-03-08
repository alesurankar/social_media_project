"use client";

import { useRouter } from "next/navigation";


export default function LandingPage() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1>This is Landing Page</h1>
      <h1 className="text-red-500 text-5xl">Hello World</h1>
      <h2>This is default H2</h2>
      <h1>This is H1</h1>
      <h2>This is H2</h2>
      <h3>This is H2</h3>
      <h4>This is H2</h4>
      <h5>This is H2</h5>
      <h6 className="text-white">This is H2</h6>
      <p>This is p</p>
      <button
        className="px-14 py-6 bg-blue-500 text-white rounded"
        onClick={() => router.push("/feed")} 
      >Next
      </button> 
    </main>
  );
}