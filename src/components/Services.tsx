export default function Services() {
  const steps = [
    {
      number: "1",
      title: "Share Requirements",
      desc: "Tell us about your business and website needs.",
    },
    {
      number: "2",
      title: "Design & Build",
      desc: "We create a modern website with care.",
    },
    {
      number: "3",
      title: "Review & Approve",
      desc: "Check everything before final delivery.",
    },
    {
      number: "4",
      title: "Launch & Support",
      desc: "Website goes live with ongoing support.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Our Simple Process
        </h2>

        <p className="text-gray-400 mt-3">
          We make it easy for you.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
        {steps.map((step) => (
          <div
            key={step.number}
            className="bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-8 text-center"
          >
            <div className="w-16 h-16 rounded-full bg-violet-600 flex items-center justify-center text-2xl font-bold mx-auto">
              {step.number}
            </div>

            <h3 className="mt-6 text-xl font-semibold">
              {step.title}
            </h3>

            <p className="text-gray-400 mt-3">
              {step.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}