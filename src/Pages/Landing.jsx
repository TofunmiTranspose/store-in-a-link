import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="min-h-screen bg-orange-50 text-slate-800 font-sans">
      {/* Hero Section */}
      <section className="px-6 py-24 text-center max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold mb-6 leading-tight text-orange-500"
        >
          Create Your Own Store in Just One Link
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-lg text-slate-600 mb-8"
        >
          Build and share your store link across WhatsApp, Instagram, or DMs —
          no coding required.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex justify-center gap-4"
        >
          <Link
            to="/login"
            className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-all duration-200 shadow-md"
          >
            Get Started Free
          </Link>
          <a
            href="#features"
            className="px-6 py-3 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-100 transition"
          >
            See Features
          </a>
        </motion.div>
      </section>

      {/* Store Preview */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold mb-2"
          >
            This is what your store will look like 👇
          </motion.h2>
          <p className="text-slate-500 mb-6">Beautiful. Simple. Effective.</p>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="border rounded-xl overflow-hidden shadow-lg mx-auto max-w-md bg-white"
          >
            <div className="p-4 border-b">
              <h3 className="text-lg font-bold text-orange-500">
                @rebeccas_fabrics
              </h3>
              <p className="text-sm text-gray-500">
                Authentic Ankara • Quick Delivery
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 p-4">
              <div className="bg-orange-100 aspect-square rounded-lg animate-pulse"></div>
              <div className="bg-orange-100 aspect-square rounded-lg animate-pulse"></div>
              <div className="bg-orange-100 aspect-square rounded-lg animate-pulse"></div>
              <div className="bg-orange-100 aspect-square rounded-lg animate-pulse"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section
        id="features"
        className="py-20 px-6 bg-orange-50 max-w-6xl mx-auto"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Why Store-in-a-Link?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            [
              "🚀 Fast Setup",
              "Create your store in under 5 minutes. No tech skills needed.",
            ],
            [
              "📱 Mobile First",
              "Optimized for WhatsApp, Instagram, and mobile DMs.",
            ],
            [
              "💳 Easy Payments",
              "Accept Paystack or direct bank transfer orders with ease.",
            ],
          ].map(([title, desc], i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-white p-6 rounded-lg shadow-md transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-orange-500">
                {title}
              </h3>
              <p className="text-gray-600">{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-sm text-gray-500">
        &copy; transposeDev {new Date().getFullYear()}. Made with 💖 in Nigeria.
      </footer>
    </div>
  );
}
