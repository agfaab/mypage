import React from 'react';
import { ArrowRight, Coins, Lock, Timer, Twitter, Linkedin, Instagram } from 'lucide-react';

const LandingPage = () => {
 return (
 <div className="min-h-screen bg-gray-800 text-white flex flex-col">
 {/* Navigation */}
 <nav className="flex justify-between items-center p-6">
 <div className="flex items-center gap-2">
 <svg viewBox="0 0 100 100" className="w-10 h-10">
 <g fill="rgb(45, 212, 191)">
 <circle cx="35" cy="35" r="4"/>
 <circle cx="50" cy="35" r="4"/>
 <circle cx="65" cy="35" r="4"/>
 <circle cx="35" cy="50" r="6"/>
 <circle cx="50" cy="50" r="6"/>
 <circle cx="65" cy="50" r="6"/>
 <circle cx="35" cy="65" r="4"/>
 <circle cx="50" cy="65" r="4"/>
 <circle cx="65" cy="65" r="4"/>
 </g>
 </svg>
 <span className="text-2xl font-light text-white">Gravity</span>
 </div>
 <div className="flex gap-6">
 <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
 <a href="#features" className="hover:text-cyan-400 transition-colors">Features</a>
 <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
 </div>
 </nav>

 <main className="flex-grow max-w-4xl mx-auto px-4 py-20">
 <div className="space-y-16">
 {/* Hero Section */}
 <div className="text-center space-y-8">
 <h1 className="text-5xl font-light">
 Payments Made Simple with
 <span style={{ color: 'rgb(45, 212, 191)' }}> Gravity</span>
 </h1>
 <div className="space-y-4">
 <p className="text-xl text-gray-400">
 Powering businesses and individuals with fast, secure, and cost-effective stablecoin cross-border payments.
 </p>
 <p className="text-lg text-gray-400 font-light">
 Send invoices and receive payments anytime, anywhere.
 </p>
 </div>
 </div>

 {/* Enhanced Features Grid */}
 <div className="grid md:grid-cols-3 gap-8 py-12">
 <div className="relative p-8 bg-gradient-to-br from-gray-800/80 to-gray-800/40 rounded-2xl space-y-6 border border-gray-700 group hover:scale-105 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-cyan-400/20">
 <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
 <Coins style={{ color: 'rgb(45, 212, 191)' }} className="h-12 w-12 transform group-hover:rotate-12 transition-transform duration-300" />
 <div className="relative space-y-3">
 <h3 className="text-2xl font-medium tracking-wide" style={{ color: 'rgb(45, 212, 191)' }}>
 Global Reach
 </h3>
 <p className="text-gray-400 leading-relaxed">Send and receive payments worldwide instantly</p>
 </div>
 </div>

 <div className="relative p-8 bg-gradient-to-br from-gray-800/80 to-gray-800/40 rounded-2xl space-y-6 border border-gray-700 group hover:scale-105 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-cyan-400/20">
 <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
 <Lock style={{ color: 'rgb(45, 212, 191)' }} className="h-12 w-12 transform group-hover:rotate-12 transition-transform duration-300" />
 <div className="relative space-y-3">
 <h3 className="text-2xl font-medium tracking-wide" style={{ color: 'rgb(45, 212, 191)' }}>
 Bank-Grade Security
 </h3>
 <p className="text-gray-400 leading-relaxed">Enterprise-level protection for your transactions</p>
 </div>
 </div>

 <div className="relative p-8 bg-gradient-to-br from-gray-800/80 to-gray-800/40 rounded-2xl space-y-6 border border-gray-700 group hover:scale-105 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-cyan-400/20">
 <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
 <Timer style={{ color: 'rgb(45, 212, 191)' }} className="h-12 w-12 transform group-hover:rotate-12 transition-transform duration-300" />
 <div className="relative space-y-3">
 <h3 className="text-2xl font-medium tracking-wide" style={{ color: 'rgb(45, 212, 191)' }}>
 Lightning Fast
 </h3>
 <p className="text-gray-400 leading-relaxed">Settlement within minutes, not days</p>
 </div>
 </div>
 </div>

 {/* Email Signup */}
 <div className="max-w-lg mx-auto space-y-6">
 <div className="flex gap-2">
 <input
 type="email"
 placeholder="Enter your email"
 className="flex-1 px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-cyan-400 focus:outline-none"
 />
 <button style={{ backgroundColor: 'rgb(45, 212, 191)' }} className="px-6 py-3 rounded-lg flex items-center gap-2 transition-colors text-gray-900 font-medium hover:brightness-110">
 Request Access
 <ArrowRight className="h-4 w-4" />
 </button>
 </div>
 <p className="text-sm text-center text-gray-500">
 Join the waitlist for early access to our platform
 </p>
 </div>
 </div>
 </main>

 {/* Footer with Social Media */}
 <footer className="mt-auto py-8">
 <div className="flex justify-center gap-6 mb-6">
 <a href="#twitter" className="text-gray-400 hover:text-cyan-400 transition-colors">
 <Twitter className="h-6 w-6" />
 </a>
 <a href="#linkedin" className="text-gray-400 hover:text-cyan-400 transition-colors">
 <Linkedin className="h-6 w-6" />
 </a>
 <a href="#instagram" className="text-gray-400 hover:text-cyan-400 transition-colors">
 <Instagram className="h-6 w-6" />
 </a>
 </div>
 <p className="text-center text-gray-500 text-sm">
 © {new Date().getFullYear()} Gravity Finance Inc
 </p>
 </footer>
 </div>
 );
};

export default LandingPage;