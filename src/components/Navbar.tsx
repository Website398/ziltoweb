export default function Navbar() {
  return (
    <header className="border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-20 flex items-center justify-between">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center font-bold">
              Z
            </div>

            <h1 className="font-bold text-2xl">
              ZILTO <span className="text-violet-500">WEB</span>
            </h1>
          </div>

          <nav className="hidden lg:flex gap-8 text-gray-300">
            <a href="#">Home</a>
            <a href="#">Features</a>
            <a href="#">Our Work</a>
            <a href="#">Process</a>
            <a href="#">FAQ</a>
            <a href="#">Contact</a>
          </nav>

          <button className="bg-violet-600 px-5 py-3 rounded-xl hover:bg-violet-700 transition">
            Get Started
          </button>

        </div>
      </div>
    </header>
  );
}