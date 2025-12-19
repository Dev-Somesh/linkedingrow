// import React from 'react'; // Removed unused import
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FileText, CheckCircle, ArrowRight, Star, TrendingUp, AlertCircle, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center bg-white overflow-hidden pt-16">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl opacity-60 translate-x-1/3 -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-purple-50/50 rounded-full blur-3xl opacity-60 -translate-x-1/3 translate-y-1/4" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* Left Column: Text Content */}
          <div className="text-center lg:text-left">
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-sm font-medium"
              >
                <Star className="w-4 h-4 fill-blue-700" />
                <span>Rated #1 Resume Optimizer</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-100 text-green-700 text-sm font-medium"
              >
                <CheckCircle className="w-4 h-4" />
                <span>Free Forever - No Credit Card</span>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6 leading-tight"
            >
              Pass the ATS. <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Land the Interview.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto lg:mx-0"
            >
              Stop getting rejected by robots. Our AI analyzes your resume against job descriptions to triple your interview chances instantly.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Link to="/dashboard">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-blue-600 hover:bg-blue-700 text-white shadow-lg hover:shadow-xl transition-all">
                  Analyze My Resume <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <a href="#how-it-works">
                <Button variant="outline" size="lg" className="h-14 px-8 text-lg rounded-full border-gray-200 text-gray-700 hover:bg-gray-50 hover:text-gray-900">
                  How it Works
                </Button>
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-4 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>ATS Optimization</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>AI Content Suggestions</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Keyword Matching</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Infographic Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative lg:h-[600px] flex items-center justify-center"
          >
            {/* Abstract Background Blog */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-purple-100 rounded-[3rem] rotate-3 transform scale-90" />

            {/* Main Resume Card */}
            <Card className="relative w-full max-w-md bg-white shadow-2xl border-0 rounded-2xl overflow-hidden transform transition-all hover:scale-[1.02]">
              <div className="h-2 bg-gradient-to-r from-blue-500 to-purple-500" />
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <FileText className="w-5 h-5 text-gray-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Resume Analysis</h3>
                      <p className="text-xs text-gray-500">processed just now</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold">
                    COMPLETED
                  </span>
                </div>

                {/* Score Section */}
                <div className="flex items-center justify-between mb-8 p-4 bg-gray-50 rounded-xl">
                  <div className="text-center">
                    <p className="text-xs text-gray-500 uppercase font-semibold">ATS Score</p>
                    <div className="text-4xl font-bold text-gray-900">95<span className="text-lg text-gray-400">/100</span></div>
                  </div>
                  <div className="h-12 w-px bg-gray-200" />
                  <div className="text-center">
                    <p className="text-xs text-gray-500 uppercase font-semibold">Impact</p>
                    <div className="text-4xl font-bold text-green-600 flex items-center gap-1">
                      High <TrendingUp className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                {/* Checklist */}
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Professional Summary Optimized</p>
                      <p className="text-xs text-gray-500">Keywords matched with job description</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-3 h-3 text-green-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Formatting Issues Fixed</p>
                      <p className="text-xs text-gray-500">Margins, fonts, and spacing corrected</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="mt-1 w-5 h-5 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                      <AlertCircle className="w-3 h-3 text-blue-600" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Action Verbs Enhanced</p>
                      <p className="text-xs text-gray-500">2 weak verbs replaced with strong alternatives</p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-100">
                  <Button className="w-full bg-gray-900 text-white hover:bg-gray-800">
                    View Full Report
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Floating Badges */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-10 right-10 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2"
            >
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm font-bold text-gray-700">Recruiter Approved</span>
            </motion.div>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute bottom-20 left-0 bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-2"
            >
              <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-purple-600" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Optimization</p>
                <p className="text-sm font-bold text-gray-900">+45% Boost</p>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Hero;