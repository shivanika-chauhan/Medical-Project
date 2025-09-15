import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Footer from "../components/footer/Footer";

const HealthGuide = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-blue-50 to-green-50 min-h-screen">
        {/* Hero Section */}
        <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-green-500 text-white shadow-md">
          <h1 className="text-4xl font-bold mb-3">Health Guide</h1>
          <p className="text-lg max-w-2xl mx-auto">
            Your trusted source for health tips, wellness guides, and expert medical advice.
          </p>
        </section>

        {/* Health Guide Cards */}
        <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform border-t-4 border-blue-500">
            <img src="/images/z.jpg" alt="Health Tips" className="rounded-xl mb-4" />
            <h2 className="text-xl font-bold text-blue-600 mb-2">Daily Health Tips</h2>
            <p className="text-gray-600">
              Get practical advice on staying fit, eating healthy, and boosting your immunity every day.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform border-t-4 border-green-500">
            <img src="/images/y.jpg" alt="Wellness" className="rounded-xl mb-4" />
            <h2 className="text-xl font-bold text-green-600 mb-2">Wellness & Lifestyle</h2>
            <p className="text-gray-600">
              Learn about stress management, mental health, and maintaining a balanced lifestyle.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow-lg rounded-2xl p-6 hover:scale-105 transition-transform border-t-4 border-blue-500">
            <img src="/images/x.jpg" alt="Medications" className="rounded-xl mb-4" />
            <h2 className="text-xl font-bold text-blue-600 mb-2">Medicine & Care</h2>
            <p className="text-gray-600">
              Understand your medicines better with dosage guidance and safety information.
            </p>
          </div>
        </section>

        {/* NEW Detailed Sections */}
        <section className="max-w-6xl mx-auto px-6 py-12 space-y-12">
          {/* Daily Health Tips Details */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Daily Health Tips in Detail</h3>
            <p className="text-gray-700 leading-relaxed">
              Start your day with a glass of warm water to hydrate your body, followed by light stretching or yoga.
              Eating a balanced breakfast with protein, healthy fats, and whole grains helps keep your energy levels
              steady. Include seasonal fruits and vegetables in your diet, and limit processed foods.  
              Regular exercise, deep breathing, and at least 7-8 hours of sleep can make a significant impact
              on your physical and mental well-being.
            </p>
          </div>

          {/* Wellness & Lifestyle Details */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
            <h3 className="text-2xl font-bold text-green-600 mb-4">Wellness & Lifestyle in Detail</h3>
            <p className="text-gray-700 leading-relaxed">
              True wellness is a balance between your body and mind. Focus on mental health by practicing meditation
              or mindfulness daily. Physical activity such as walking or cycling can help reduce stress levels.
              Create a daily routine, prioritize self-care, and ensure you’re spending time with loved ones.
              Healthy habits like drinking enough water, maintaining a good posture, and sleeping well contribute
              to a better lifestyle.
            </p>
          </div>

          {/* Medicine & Care Details */}
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Medicine & Care in Detail</h3>
            <p className="text-gray-700 leading-relaxed">
              Understanding your medications is essential for safe use. Always follow your doctor’s prescriptions
              carefully and never self-medicate. Keep your medicines stored in a cool, dry place and check expiry dates
              regularly. If you have chronic conditions, maintain a record of your medication schedule. 
              Learn about possible side effects and interactions to stay informed and healthy.
            </p>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="bg-gradient-to-r from-green-500 to-blue-600 text-white py-12 shadow-inner">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="mb-6">
                Have questions or need guidance? Reach out to our health experts.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <FaPhoneAlt className="text-2xl" />
                <span>+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-3 mb-4">
                <FaEnvelope className="text-2xl" />
                <span>support@carewave.com</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-2xl" />
                <span>123 Health Street, Delhi, India</span>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white text-gray-800 p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Send us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <textarea
                  placeholder="Your Message"
                  rows="4"
                  className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-green-500 text-white font-semibold py-3 rounded-lg hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* Back to Home */}
        <div className="text-center py-6">
          <Link to="/" className="text-blue-600 font-semibold hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HealthGuide;
