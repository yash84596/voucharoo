import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Apple, ArrowUpRight } from 'lucide-react';
import { FaGoogle } from 'react-icons/fa';
import clsx from 'clsx';

// Base URL for your Express.js backend (ensure it matches your server.js port)
const API_BASE_URL = 'http://localhost:3000';

const SignupPage: React.FC = () => {
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    password: '',
    confirm: '',
    agree: false,
  });
  const [message, setMessage] = useState<string | null>(null);
  const [messageType, setMessageType] = useState<'success' | 'error' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSignup = async () => {
    setMessage(null); // Clear previous messages
    setMessageType(null);

    if (!form.agree) {
      setMessage('Please agree to the terms and conditions.');
      setMessageType('error');
      return;
    }

    if (form.password !== form.confirm) {
      setMessage('Passwords do not match.');
      setMessageType('error');
      return;
    }

    // Prepare data for backend (don't send 'confirm' or 'agree')
    const { fullName, email, password } = form;

    try {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, { // Note the /api/auth prefix
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setMessageType('success');
        // Optionally clear the form or redirect after successful signup
        setForm({
          fullName: '',
          email: '',
          password: '',
          confirm: '',
          agree: false,
        });
        console.log('Signup successful:', data.message);
      } else {
        setMessage(data.message || 'Signup failed.');
        setMessageType('error');
        console.error('Signup error:', data.message);
      }
    } catch (error) {
      setMessage('Network error. Please ensure the backend is running on ' + API_BASE_URL);
      setMessageType('error');
      console.error('Fetch error:', error);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSignup();
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
    <div className="min-h-screen flex flex-col items-center bg-gray-100 dark:bg-[#0f172a] text-gray-800 dark:text-gray-100 overflow-x-hidden font-inter">
      {/* ------------------------------ HERO ------------------------------ */}
      <section className="w-full bg-gradient-to-r from-indigo-500 via-purple-600 to-fuchsia-600 py-20 px-4">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text */}
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
              Trade Coupons & Save Money
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={1}
              className="mt-4 text-white/90 sm:text-lg"
            >
              Buy, sell or exchange unused coupons with our secure platform and enjoy amazing discounts!
            </motion.p>
            <motion.div
              variants={fadeUp}
              custom={2}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4"
            >
              <a
                href="#signup-section"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 font-semibold text-indigo-600 transition hover:scale-105"
              >
                Get Started
                <ArrowUpRight className="size-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </a>
              <a
                href="#"
                className="rounded-full border border-white/50 bg-white/10 px-6 py-2 font-semibold text-white/90 transition hover:bg-white/20"
              >
                Browse Coupons
              </a>
            </motion.div>
          </motion.div>

          {/* Coupon Card */}
          <motion.div
            initial={{ opacity: 0, rotate: -12, y: 30 }}
            whileInView={{ opacity: 1, rotate: 0, y: 0 }}
            transition={{ type: 'spring', stiffness: 100, damping: 12, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="h-52 w-72 bg-white rounded-xl p-6 shadow-xl mx-auto lg:mx-0">
              <h3 className="font-semibold text-purple-700">Starbucks</h3>
              <p className="text-xs font-medium text-gray-500">Buy 1 Get 1 Free</p>
              <div className="mt-6 select-all text-2xl font-mono tracking-widest text-gray-800">
                S B U X B 1 G 1
              </div>
              <p className="mt-4 text-xs text-gray-400">Expires: 11/05/2025</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------ SIGN UP ------------------------------ */}
      <section
        id="signup-section"
        className="relative z-10 w-full px-4 py-16"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid max-w-3xl mx-auto grid-cols-1 sm:grid-cols-2 rounded-xl overflow-hidden bg-white dark:bg-slate-800 shadow-lg"
        >
          {/* Left side */}
          <div className="bg-gradient-to-b from-indigo-500 to-purple-600 p-8 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-bold">Join CouponSwap!</h3>
            <p className="mt-2 text-sm">
              Sign up to start trading coupons and save money today.
            </p>
            <p className="mt-8 text-sm">
              Already have an account?{' '}
              <a href="/login" className="underline font-semibold">Login</a>
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-4">
            <h3 className="text-lg font-bold">Sign Up</h3>

            {/* Message display area */}
            {message && (
              <div
                className={clsx(
                  'rounded-md p-3 text-sm font-medium',
                  messageType === 'success' ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100' : 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100'
                )}
              >
                {message}
              </div>
            )}

            {[
              { id: 'fullName', label: 'Full Name', type: 'text', placeholder: 'John Doe' },
              { id: 'email', label: 'Email', type: 'email', placeholder: 'you@email.com' },
              { id: 'password', label: 'Password', type: 'password', placeholder: '••••••••' },
              { id: 'confirm', label: 'Confirm Password', type: 'password', placeholder: '••••••••' },
            ].map(({ id, label, type, placeholder }) => (
              <div key={id}>
                <label htmlFor={id} className="block text-sm font-medium mb-1">
                  {label}
                </label>
                <input
                  id={id}
                  name={id}
                  type={type}
                  value={(form as any)[id]}
                  placeholder={placeholder}
                  onChange={handleChange}
                  className={clsx(
                    'w-full rounded-md border px-4 py-2 text-sm outline-none',
                    'border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200',
                    'dark:border-slate-600 dark:bg-slate-700 dark:text-gray-100 dark:focus:ring-indigo-300'
                  )}
                  required
                />
              </div>
            ))}

            <div className="flex items-center text-xs">
              <input
                type="checkbox"
                id="agree"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mr-2 accent-indigo-600"
              />
              <label htmlFor="agree">
                I agree to the <a href="#" className="text-purple-600 underline">terms and conditions</a>
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 rounded-md font-semibold hover:from-indigo-600 hover:to-purple-700 transition"
            >
              Create Account
            </button>

            <p className="text-center text-xs text-gray-500 dark:text-gray-400">Or sign up with</p>
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

export default SignupPage;
