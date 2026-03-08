"use client";

import { useRouter } from "next/navigation";


export default function FeedPage() {
  const router = useRouter();

  return (
    <div>
      <h1>Feed Page</h1>
      <p>feed page content.</p>
      <button
        className="px-14 py-6 bg-blue-500 text-white rounded"
        onClick={() => router.push("/")} 
      >Back
      </button> 
    </div>
  );
}