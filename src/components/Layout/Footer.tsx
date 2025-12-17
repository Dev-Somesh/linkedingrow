import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Mail, Linkedin, Github, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center text-xl font-bold group">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="mr-3"
              >
                <Brain className="w-6 h-6 text-blue-400 group-hover:text-blue-300 transition-colors" />
              </motion.div>
              <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                LinkedIn
              </span>
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent ml-1">
                Evolved
              </span>
              <Sparkles className="w-4 h-4 ml-2 text-purple-400 animate-pulse" />
            </Link>
            <p className="mt-4 text-gray-400 max-w-md">
              Transform your professional presence with quantum-powered AI insights and neural network optimization.
            </p>
            <div className="mt-6 flex space-x-6">
              <a 
                href="mailto:ITdeveloper06@gmail.com" 
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
              <a 
                href="https://linkedin.com/in/ersomeshbhardwaj" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                <span className="sr-only">LinkedIn</span>
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href="https://github.com/Dev-Somesh" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-500 hover:text-gray-300 transition-colors"
              >
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Product</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/dashboard" className="text-base text-gray-400 hover:text-white transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-base text-gray-400 hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/demo" className="text-base text-gray-400 hover:text-white transition-colors">
                  Demo
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-500 tracking-wider uppercase">Company</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link to="/about" className="text-base text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white transition-colors">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white transition-colors">
                  Terms
                </a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-500 text-center">
            &copy; {new Date().getFullYear()} LinkedIn Evolved. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};