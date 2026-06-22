import Image from "next/image";

export default function NextSteps() {
  const steps = [
    {
      image: "/whatsapp.jpg",
      title: "WhatsApp Contact",
      desc: "We will contact you on WhatsApp after your confirmation.",
    },
    {
      image: "/phonpee.png",
      title: "Make Payment",
      desc: "Pay securely using UPI, PhonePe, Google Pay or Paytm.",
    },
    {
      image: "/screenshot.png",
      title: "Send Screenshot",
      desc: "Share your payment screenshot on WhatsApp.",
    },
    {
      image: "/filo.png",
      title: "Receive Website",
      desc: "(via zip and github link) Get your website files and deployment support.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="bg-white rounded-3xl shadow-xl p-10">

        <h2 className="text-center text-4xl font-bold text-black">
          What Happens Next?
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Simple website delivery process
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

          {steps.map((step) => (
            <div
              key={step.title}
              className="border border-gray-200 rounded-3xl p-6 text-center hover:shadow-xl transition-all"
            >
              <Image
                src={step.image}
                alt={step.title}
                width={80}
                height={80}
                className="mx-auto"
              />

              <h3 className="text-xl font-bold text-black mt-5">
                {step.title}
              </h3>

              <p className="text-gray-600 mt-3 text-sm">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}