"use client";

import { useRouter } from "next/navigation";


const Notifications = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="p-10">This is Notifications Page</h1>
    </div>
  );
}

export default Notifications;