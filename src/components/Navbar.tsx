"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";

export default function Navbar() {
  const router = useRouter();
  const { user } = useAuth();

  const handleAuth = () => {
    if (user) {
      signOut(auth);
      router.push("/");
    } else {
      router.push("/signup");
    }
  };

  return (
    <header className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          {/* Logo */}
          <h1 className="font-bold text-2xl">
            ZILTO <span className="text-violet-500">WEB</span>
          </h1>

          {/* Menu */}
          <nav className="hidden lg:flex gap-6 text-gray-300">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Contact</a>
          </nav>

          {/* Button */}
          <button
            onClick={handleAuth}
            className="bg-violet-600 px-5 py-3 rounded-xl hover:bg-violet-700"
          >
            {user ? "Logout" : "Get Started"}
          </button>

        </div>
      </div>
    </header>
  );
}