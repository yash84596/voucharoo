import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Apple, ArrowUpRight } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';
import clsx from 'clsx';

const LoginPage: React.FC = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.table(form); // Replace with actual auth logic
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.6 },
    }),
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-[#0f172a] text-gray-800 dark:text-gray-100 overflow-x-hidden">
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-600 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.4 }}
            className="text-center lg:text-left max-w-xl"
          >
            <motion.h1
              variants={fadeUp}
              custom={0}
              className="text-4xl font-extrabold text-white lg:text-5xl"
            >
              Welcome Back to Voucharoo
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-4 text-white/90 sm:text-lg"
            >
              Login to manage your coupons, track savings, and unlock new deals!
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="/signup"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 font-semibold text-indigo-600 transition hover:scale-105"
              >
                Sign Up
                <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a
                href="/"
                className="rounded-full border border-white/50 bg-white/10 px-6 py-2 font-semibold text-white/90 transition hover:bg-white/20"
              >
                Home
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Card */}
          <motion.div
            initial={{ opacity: 0, rotate: -12, y: 30 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 12, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="h-52 w-72 bg-white rounded-xl p-6 shadow-xl mx-auto lg:mx-0">
              <h3 className="font-semibold text-indigo-700">Coupon Vault</h3>
              <p className="text-xs font-medium text-gray-500">Login Securely</p>
              <div className="mt-6 text-center text-2xl font-mono tracking-widest text-gray-800">
                C P S L G N 24
              </div>
              <p className="mt-4 text-xs text-gray-400">Authorized Access Only</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------ LOGIN FORM ------------------------------ */}
      <section className="relative z-10 w-full px-4 py-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto rounded-xl bg-white dark:bg-slate-800 shadow-lg overflow-hidden grid sm:grid-cols-2"
        >
          {/* Left Panel */}
          <div className="bg-gradient-to-b from-purple-600 to-fuchsia-600 p-8 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold">Welcome Back!</h3>
            <p className="mt-2 text-sm">Access your account and keep swapping!</p>
            <p className="mt-8 text-sm">
              Don’t have an account?{' '}
              <a href="/signup" className="underline font-semibold">Sign Up</a>
            </p>
          </div>

          {/* Right Panel - Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-4">
            <h3 className="text-lg font-bold">Login</h3>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@email.com"
                value={form.email}
                onChange={handleChange}
                className={clsx(
                  'w-full rounded-md border px-4 py-2 text-sm outline-none',
                  'border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200',
                  'dark:border-slate-600 dark:bg-slate-700 dark:focus:ring-indigo-300'
                )}
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange}
                className={clsx(
                  'w-full rounded-md border px-4 py-2 text-sm outline-none',
                  'border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200',
                  'dark:border-slate-600 dark:bg-slate-700 dark:focus:ring-indigo-300'
                )}
                required
              />
            </div>

            <div className="text-xs text-right">
              <a href="#" className="text-purple-600 underline">Forgot password?</a>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:from-indigo-600 hover:to-purple-700 transition"
            >
              Login
            </button>

            <p className="text-center text-xs text-gray-500 dark:text-gray-400">Or sign in with</p>
            <div className="flex justify-center gap-3">
              {[Facebook, FaGoogle, Apple].map((Icon, idx) => (
                <button
                  key={idx}
                  type="button"
                  className="group rounded-full p-2 ring-1 ring-gray-200 transition hover:scale-110 hover:ring-indigo-400 dark:ring-slate-600"
                >
                  <Icon className="size-4 group-hover:stroke-indigo-500" />
                </button>
              ))}
            </div>
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default LoginPage;
