import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">

      <div className="grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Side */}
        <div>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
            We Build Websites
            <br />
            That Build
            <span className="text-violet-500"> Your Business</span>
          </h1>

          <p className="mt-6 text-gray-400 text-lg max-w-xl">
            Professional, fast and affordable websites for
            businesses, brands and entrepreneurs.
          </p>

          <div className="flex gap-4 mt-8">
            <button className="bg-violet-600 px-7 py-4 rounded-xl hover:bg-violet-700">
              Get Your Website
            </button>

            <button className="border border-white/20 px-7 py-4 rounded-xl">
              View Our Work
            </button>
          </div>

          <div className="grid grid-cols-3 gap-6 mt-12">

            <div>
              <h3 className="font-semibold">Modern Design</h3>
              <p className="text-sm text-gray-400">
                Clean & Professional
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Fast Delivery</h3>
              <p className="text-sm text-gray-400">
                On Time, Every Time
              </p>
            </div>

            <div>
              <h3 className="font-semibold">Full Support</h3>
              <p className="text-sm text-gray-400">
                We're Here To Help
              </p>
            </div>

          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <Image
            src="/hero.png"
            alt="Hero"
            width={900}
            height={700}
            priority
            className="w-full max-w-[700px] h-auto"
          />

        </div>

      </div>

    </section>
  );
}