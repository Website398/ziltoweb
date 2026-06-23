export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16">

      {/* Trusted Section */}
      <div className="bg-white rounded-3xl p-8">

        <h2 className="text-center text-gray-800 font-semibold text-lg">
          Trusted by Small Businesses, Startups & Professionals
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mt-8 text-center">

          <div>
            <div className="text-4xl">🏥</div>
            <p className="mt-2 text-gray-700 font-medium">Doctors</p>
          </div>

          <div>
            <div className="text-4xl">🩺</div>
            <p className="mt-2 text-gray-700 font-medium">Clinics</p>
          </div>

          <div>
            <div className="text-4xl">🏪</div>
            <p className="mt-2 text-gray-700 font-medium">Stores</p>
          </div>

          <div>
            <div className="text-4xl">🎓</div>
            <p className="mt-2 text-gray-700 font-medium">Coaches</p>
          </div>

          <div>
            <div className="text-4xl">💼</div>
            <p className="mt-2 text-gray-700 font-medium">Agencies</p>
          </div>

          <div>
            <div className="text-4xl">🚀</div>
            <p className="mt-2 text-gray-700 font-medium">Startups</p>
          </div>

        </div>

      </div>

      {/* Why Choose Us */}
      <div className="mt-20">

        <h2 className="text-center text-4xl font-bold">
          Why Choose Us?
        </h2>

        <p className="text-center text-gray-400 mt-3">
          We don&apos;t provide service
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          <div className="bg-white rounded-3xl p-8 text-center">
            <div className="text-5xl">💻</div>

            <h3 className="mt-4 text-black font-bold text-xl">
              Modern & Responsive
            </h3>

            <p className="text-gray-600 mt-3">
              Websites that look great on all devices.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center">
            <div className="text-5xl">⚡</div>

            <h3 className="mt-4 text-black font-bold text-xl">
              Fast Turnaround
            </h3>

            <p className="text-gray-600 mt-3">
              Get your website delivered on time.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center">
            <div className="text-5xl">🛡️</div>

            <h3 className="mt-4 text-black font-bold text-xl">
              Secure & Reliable
            </h3>

            <p className="text-gray-600 mt-3">
              We follow best practices for security.
            </p>
          </div>

          <div className="bg-white rounded-3xl p-8 text-center">
            <div className="text-5xl">🎧</div>

            <h3 className="mt-4 text-black font-bold text-xl">
              Dedicated Support
            </h3>

            <p className="text-gray-600 mt-3">
              We&apos;re with you even after delivery
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}