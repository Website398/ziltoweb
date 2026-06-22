"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { ref, push } from "firebase/database";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  const [fullName, setFullName] = useState("");
  const [businessName, setBusinessName] = useState("");

  const [review, setReview] = useState(false);
  const [design, setDesign] = useState(false);
  const [payment, setPayment] = useState(false);
  const [delivery, setDelivery] = useState(false);

  const handleSubmit = async () => {
    if (!fullName.trim()) {
      alert("Please enter your Full Name");
      return;
    }

    if (!businessName.trim()) {
      alert("Please enter your Business Name");
      return;
    }

    if (!review || !design || !payment || !delivery) {
      alert("Please accept all Terms & Conditions");
      return;
    }

    try {
      setLoading(true);

      const now = new Date();

      await push(ref(db, "confirmations"), {
        fullName,
        businessName,

        termsAccepted: {
          review,
          design,
          payment,
          delivery,
        },

        submittedDate: now.toLocaleDateString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),

        submittedTime: now.toLocaleTimeString("en-IN", {
          timeZone: "Asia/Kolkata",
        }),

        timestamp: now.getTime(),
      });

      alert(
        "✅ Thank You! Your website delivery confirmation has been submitted successfully."
      );

      setFullName("");
      setBusinessName("");

      setReview(false);
      setDesign(false);
      setPayment(false);
      setDelivery(false);
    } catch (error) {
      console.error(error);
      alert("❌ Failed to submit confirmation");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-violet-600 to-purple-700 p-8 text-center">
          <h2 className="text-4xl font-bold text-white">
            Website Delivery Confirmation
          </h2>

          <p className="text-violet-100 mt-3">
            Please review and confirm your website before final delivery.
          </p>
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">

          <div className="grid lg:grid-cols-2 gap-10">

            {/* Left Side */}
            <div>

              <h3 className="text-2xl font-bold text-black mb-6">
                Client Information
              </h3>

              <div className="space-y-5">

                <div>
                  <label className="block text-black font-medium mb-2">
                    Full Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl p-4 text-black focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>

                <div>
                  <label className="block text-black font-medium mb-2">
                    Business Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter your business name"
                    value={businessName}
                    onChange={(e) => setBusinessName(e.target.value)}
                    className="w-full border border-gray-300 rounded-xl p-4 text-black focus:outline-none focus:ring-2 focus:ring-violet-500"
                  />
                </div>

                <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5">
                  <h4 className="font-bold text-violet-700">
                    Confirmation Notice
                  </h4>

                  <p className="text-sm text-gray-600 mt-2">
                    By submitting this form, you confirm that the website
                    has been reviewed and approved by you. The information
                    will be securely stored in our system.
                  </p>
                </div>

              </div>

            </div>

            {/* Right Side */}
            <div>

              <div className="bg-violet-50 border border-violet-200 rounded-2xl p-5 mb-6">
                <h3 className="text-xl font-bold text-violet-700">
                  Terms & Conditions
                </h3>

                <p className="text-gray-600 mt-2 text-sm">
                  Please read and accept all conditions before confirming
                  your website delivery.
                </p>
              </div>

              <div className="space-y-5 text-black">

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={review}
                    onChange={(e) => setReview(e.target.checked)}
                    className="mt-1"
                  />
                  <span>
                    I have reviewed all pages, content, images and
                    website functionality.
                  </span>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={design}
                    onChange={(e) => setDesign(e.target.checked)}
                    className="mt-1"
                  />
                  <span>
                    I am satisfied with the website design, layout,
                    responsiveness and requested features.
                  </span>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={payment}
                    onChange={(e) => setPayment(e.target.checked)}
                    className="mt-1"
                  />
                  <span>
                    I understand and agree to the payment and delivery
                    policy.
                  </span>
                </label>

                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={delivery}
                    onChange={(e) => setDelivery(e.target.checked)}
                    className="mt-1"
                  />
                  <span>
                    I approve the final website delivery and authorize
                    project completion.
                  </span>
                </label>

              </div>

              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full mt-8 bg-violet-600 hover:bg-violet-700 disabled:opacity-50 text-white py-4 rounded-xl font-semibold transition-all"
              >
                {loading ? "Submitting..." : "Submit Confirmation"}
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}