"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "../components/Modal";
import AuthForm from "../components/AuthForm";

export default function LandingPage() {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  const [currentUser, setCurrentUser] = useState<any>(null);

  const checkAuth = () => {
    const token = localStorage.getItem("token");
    if (token) {
      router.push("/feed");
    } 
    else {
      setCheckingAuth(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, [router]);

  if (checkingAuth) return <div className="flex items-center justify-center h-screen">Loading...</div>;

  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to SocialApp</h1>
      
      <button
        className="mt-6 px-6 py-2 bg-blue-500 text-white rounded"
        onClick={() => setShowModal(true)}
      >
        Login
      </button>

      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <AuthForm
            onSuccess={() => console.log("Logged in!")}
            setUser={(user) => setCurrentUser(user)}
          />
        </Modal>
      )}
      {currentUser && <p className="mt-4">Hello, {currentUser.username}</p>}
    </main>
  );
}