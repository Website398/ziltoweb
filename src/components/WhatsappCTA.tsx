import Image from "next/image";

export default function WhatsappCTA() {
  return (
    <section className="max-w-7xl mx-auto px-6 pb-20">
      <div className="bg-gradient-to-r from-violet-700 via-purple-700 to-violet-900 rounded-3xl p-10 md:p-14 text-center">

        <h2 className="text-4xl md:text-5xl font-bold text-white">
          Let's Build Something Great Together
        </h2>

        <p className="text-violet-100 mt-4 max-w-2xl mx-auto">
          Have questions about your website? Contact us directly on WhatsApp and get a quick response.
        </p>

        <div className="mt-10 flex justify-center">
          <a
            href="https://wa.me/9122283921"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <div className="bg-white rounded-3xl p-8 shadow-2xl hover:scale-105 transition-all duration-300">

              <Image
                src="/whatsapp.jpg"
                alt="WhatsApp"
                width={100}
                height={100}
                className="mx-auto"
              />

              <h3 className="mt-5 text-2xl font-bold text-green-600">
                Chat on WhatsApp
              </h3>

              <p className="text-gray-500 mt-2">
                Click here to start a conversation
              </p>

            </div>
          </a>
        </div>

      </div>
    </section>
  );
}