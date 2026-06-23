"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function Dashboard() {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push("/login");
    }
  }, [user, loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-white text-black">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-black flex items-center justify-center">
      <div className="text-center p-10">

        <h1 className="text-4xl font-bold mb-3">
          🚀 Dashboard
        </h1>

        <p className="text-gray-600 text-lg">
          Coming Soon...
        </p>

        <div className="mt-6 p-4 border rounded-lg shadow-sm">
          <p className="text-sm text-gray-500">Logged in user:</p>
          <p className="font-medium">{user?.email}</p>
        </div>

      </div>
    </div>
  );
}