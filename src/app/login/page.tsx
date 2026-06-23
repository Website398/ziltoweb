"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please fill all fields");
      return;
    }

    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, email, password);

      alert("Login successful 🚀");

      router.push("/dashboard");
    } catch (err: any) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <div className="w-80 p-6 rounded-xl bg-white/5 border border-white/10">

        <h1 className="text-2xl font-bold mb-4 text-center">
          Welcome Back
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-3 rounded bg-black border border-white/20 text-white"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 rounded bg-black border border-white/20 text-white"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition p-3 rounded font-semibold"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        <p className="text-sm text-center mt-4 text-gray-400">
          Don't have account?{" "}
          <span
            className="text-blue-400 cursor-pointer"
            onClick={() => router.push("/signup")}
          >
            Sign up
          </span>
        </p>

      </div>
    </div>
  );
}