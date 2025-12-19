import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../../store/authStore';
import { Button } from '@/components/ui/button';
import { LogOut, User, Menu, X, Brain, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Navbar: React.FC = () => {
  const { user, logout } = useAuthStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-black/90 backdrop-blur-xl border-b border-gray-800/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-xl font-bold group">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="mr-3"
              >
                <Brain className="w-7 h-7 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </motion.div>
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent group-hover:from-blue-100 group-hover:to-purple-100 transition-all duration-300">
                LinkedIn
              </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-1 group-hover:from-purple-400 group-hover:to-pink-400 transition-all duration-300">
                Evolved
              </span>
              <Sparkles className="w-4 h-4 ml-2 text-purple-400 animate-pulse" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link to="/" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              Home
            </Link>
            <Link to="/faq" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              FAQ
            </Link>
            <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors">
              About
            </Link>

            {user ? (
              <div className="flex items-center gap-4 ml-4">
                <Link to="/dashboard">
                  <Button variant="outline" size="sm" className="gap-2 bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:text-white">
                    <User className="w-4 h-4" />
                    Dashboard
                  </Button>
                </Link>
                <Button
                  variant="outline"
                  size="sm"
                  className="gap-2 bg-gray-800/50 border-gray-600 text-gray-300 hover:bg-gray-700/50 hover:text-white"
                  onClick={logout}
                >
                  <LogOut className="w-4 h-4" />
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/dashboard" className="ml-4">
                <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 border-0">Get Started</Button>
              </Link>
            )}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-300 hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/faq"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <Link
              to="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-800/50"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              {user ? (
                <div className="flex-shrink-0">
                  <div className="h-10 w-10 rounded-full bg-gray-800 flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-300" />
                  </div>
                </div>
              ) : null}
              <div className="ml-3">
                {user ? (
                  <>
                    <div className="text-base font-medium text-white">{user.name}</div>
                    <div className="text-sm font-medium text-gray-400">{user.email}</div>
                  </>
                ) : (
                  <Link
                    to="/dashboard"
                    className="block text-base font-medium text-blue-400 hover:text-blue-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get Started
                  </Link>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};