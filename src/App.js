import React, { useState, useRef, useCallback } from 'react';
import { ArrowRight, Coins, Lock, Timer, QrCode, Twitter, Linkedin, Instagram, Menu, X, Loader2 } from 'lucide-react';

const SOCIAL_LINKS = [
  { Icon: Twitter, label: 'Twitter', url: '#' },
  { Icon: Linkedin, label: 'LinkedIn', url: '#' },
  { Icon: Instagram, label: 'Instagram', url: '#' }
];

const FEATURES = [
  {
    icon: Coins,
    title: "Global Reach",
    description: "Send and receive payments worldwide instantly"
  },
  {
    icon: Lock,
    title: "Bank-Grade Security",
    description: "Enterprise-level protection for your transactions"
  },
  {
    icon: Timer,
    title: "Lightning Fast",
    description: "Settlement within minutes, not days"
  },
  {
    icon: QrCode,
    title: "Invoices & QR Payments",
    description: "Generate invoices with QR codes for quick, secure transactions"
  }
];

const FeatureCard = React.memo(({ icon: Icon, title, description }) => (
  <div 
    className="relative p-6 sm:p-8 bg-gradient-to-br from-gray-800/80 to-gray-800/40 rounded-2xl space-y-4 sm:space-y-6 border border-gray-700 group hover:scale-105 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-cyan-400/20"
    role="article"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300" />
    <Icon 
      className="h-8 w-8 sm:h-12 sm:w-12 transform group-hover:rotate-12 transition-transform duration-300 text-teal-400" 
      aria-hidden="true"
    />
    <div className="relative space-y-2 sm:space-y-3">
      <h2 className="text-xl sm:text-2xl font-medium tracking-wide text-teal-400">
        {title}
      </h2>
      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">{description}</p>
    </div>
  </div>
));

FeatureCard.displayName = 'FeatureCard';

const LandingPage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });
  const menuRef = useRef(null);

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    if (!validateEmail(email)) {
      setSubmitStatus({ type: 'error', message: 'Please enter a valid email address.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: '', message: '' });

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus({ 
        type: 'success', 
        message: 'Thanks for joining our waitlist! Stay tuned for updates.' 
      });
      setEmail('');
    } catch (error) {
      setSubmitStatus({ 
        type: 'error', 
        message: 'An error occurred. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClickOutside = useCallback((event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  }, []);

  React.useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isMenuOpen, handleClickOutside]);

  return (
    <>
      <head>
        <title>Gravity - Simple Payment Solutions</title>
        <meta name="description" content="Powering businesses and individuals with fast, secure, and cost-effective stablecoin cross-border payments." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1f2937" />
      </head>
      
      <div className="min-h-screen bg-gray-900 text-white flex flex-col" lang="en">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-gray-900 focus:text-white"
        >
          Skip to main content
        </a>

        <nav 
          className="sticky top-0 z-50 backdrop-blur-md bg-gray-900/90 border-b border-gray-700"
          role="navigation"
          aria-label="Main navigation"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              <div className="flex items-center gap-2">
                <svg 
                  viewBox="0 0 100 100" 
                  className="w-8 h-8 sm:w-10 sm:h-10"
                  role="img"
                  aria-labelledby="logo-title"
                >
                  <title id="logo-title">Gravity Logo</title>
                  <desc>Nine dots arranged in a grid pattern</desc>
                  <g fill="currentColor" className="text-teal-400">
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
                <span className="text-xl sm:text-2xl font-light text-white">Gravity</span>
              </div>
            </div>
          </div>
        </nav>

        <main id="main-content" className="flex-grow">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
            <section aria-labelledby="hero-heading" className="text-center space-y-6 sm:space-y-8 mb-16">
              <h1 id="hero-heading" className="text-3xl sm:text-4xl md:text-5xl font-light leading-tight">
                Payments Made Simple with
                <span className="text-teal-400"> Gravity</span>
              </h1>
              <div className="space-y-3 sm:space-y-4 max-w-2xl mx-auto">
                <p className="text-base sm:text-lg md:text-xl text-gray-300">
                  Seamlessly send and receive payments across borders with Gravity's next-generation stablecoin payment platform.
                </p>
              </div>
            </section>

            <section 
              aria-labelledby="features-heading"
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-16"
            >
              <h2 id="features-heading" className="sr-only">Features</h2>
              {FEATURES.map((feature, index) => (
                <FeatureCard key={index} {...feature} />
              ))}
            </section>

            <section aria-labelledby="signup-heading" className="max-w-lg mx-auto space-y-4">
              <h2 id="signup-heading" className="sr-only">Email Signup</h2>
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
                <div className="flex-1">
                  <label htmlFor="email" className="sr-only">Email address</label>
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-teal-400 focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900 focus:outline-none text-sm sm:text-base"
                  />
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 sm:px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all bg-teal-400 text-gray-900 font-medium hover:brightness-110 text-sm sm:text-base whitespace-nowrap focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Request Access
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </>
                  )}
                </button>
              </form>
              {submitStatus.message && (
                <div 
                  className={`text-sm text-center p-3 rounded-lg ${
                    submitStatus.type === 'error' ? 'bg-red-500/20 text-red-200' : 'bg-green-500/20 text-green-200'
                  }`}
                  role="alert"
                >
                  {submitStatus.message}
                </div>
              )}
              <p className="text-xs sm:text-sm text-center text-gray-400">
                Join the waitlist for early access to our platform
              </p>
              <p className="text-sm sm:text-base text-center text-teal-400 font-medium mt-8">
                Launching Soon – Q1 2025
              </p>
            </section>
          </div>
        </main>

        <footer className="mt-auto py-6 sm:py-8 border-t border-gray-700" role="contentinfo">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-center gap-6 mb-4 sm:mb-6">
              {SOCIAL_LINKS.map(({ Icon, label, url }) => (
                <a 
                  key={label}
                  href={url}
                  className="text-gray-400 hover:text-teal-400 transition-colors p-2 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-900 rounded-md"
                  aria-label={label}
                  rel="noopener noreferrer"
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
                </a>
              ))}
            </div>
            <p className="text-center text-gray-400 text-xs sm:text-sm">
              © {new Date().getFullYear()} Gravity Finance Inc
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;