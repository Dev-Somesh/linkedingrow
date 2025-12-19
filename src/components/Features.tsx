// import React from 'react';
import { motion } from 'framer-motion';
import {
  Upload,
  Search,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  AlertCircle
} from 'lucide-react';

// --- Trusted By Component ---
const companies = [
  "Google", "Microsoft", "Amazon", "Meta", "Netflix", "Tesla", "Uber", "Airbnb"
];

const TrustedBy = () => (
  <div className="py-12 border-b border-gray-100 bg-gray-50/50">
    <div className="max-w-7xl mx-auto px-6 text-center">
      <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-8">
        Trusted by candidates hired at
      </p>
      <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
        {/* Simple text logos for demo purposes - in prod these would be SVGs */}
        {companies.map(company => (
          <span key={company} className="text-xl font-bold text-gray-400 hover:text-gray-900 cursor-default">
            {company}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// --- Content Components ---
// 1. Interactive Score Card Graphic
const ScoreCardGraphic = () => (
  <div className="relative w-full h-32 bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-between overflow-hidden">
    <div className="flex items-center gap-4">
      <div className="relative w-16 h-16">
        <svg className="w-full h-full transform -rotate-90">
          <circle cx="32" cy="32" r="28" stroke="#f3f4f6" strokeWidth="6" fill="transparent" />
          <motion.circle
            initial={{ strokeDashoffset: 175 }}
            whileInView={{ strokeDashoffset: 35 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            cx="32" cy="32" r="28"
            stroke="#3b82f6" strokeWidth="6"
            fill="transparent"
            strokeDasharray="175"
            strokeLinecap="round"
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-blue-600">85%</span>
      </div>
      <div>
        <div className="h-2 w-24 bg-gray-100 rounded-full mb-2" />
        <div className="h-2 w-16 bg-gray-100 rounded-full" />
      </div>
    </div>
    {/* Floating Badge */}
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: 0.5, type: "spring" }}
      className="absolute top-2 right-2 bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full flex items-center gap-1"
    >
      <CheckCircle className="w-3 h-3" /> PASSED
    </motion.div>
  </div>
);

// 2. Keyword Match Graphic
const KeywordsGraphic = () => (
  <div className="w-full bg-white rounded-xl shadow-sm border border-gray-100 p-4 space-y-2">
    {['React Native', 'TypeScript', 'System Design'].map((kw, i) => (
      <motion.div
        key={kw}
        initial={{ x: -20, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ delay: i * 0.2 }}
        className="flex items-center justify-between p-2 bg-gray-50 rounded-lg text-sm"
      >
        <span className="font-medium text-gray-700">{kw}</span>
        {i === 2 ? (
          <AlertCircle className="w-4 h-4 text-red-500" />
        ) : (
          <CheckCircle className="w-4 h-4 text-green-500" />
        )}
      </motion.div>
    ))}
  </div>
);

const Features = () => {
  return (
    <div className="bg-white pb-24">
      <TrustedBy />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-blue-600 font-semibold mb-4 tracking-wide uppercase text-sm">Powerful Analytics</h2>
          <h3 className="text-4xl font-bold text-gray-900 mb-6">Not just a checker. A career accelerator.</h3>
          <p className="text-lg text-gray-600">We analyze 50+ data points to ensure your resume doesn't just pass the bots, but impresses the humans too.</p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,auto)]">

          {/* Large Card: ATS Scoring */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:col-span-2 bg-gray-50 rounded-3xl p-8 border border-gray-100 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 text-blue-600">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Real-time ATS Scoring</h4>
              <p className="text-gray-600 max-w-sm">Get precise feedback on how well your resume matches the job description before you apply.</p>
            </div>
            <div className="absolute right-0 bottom-0 w-1/2 p-6 translate-x-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <ScoreCardGraphic />
            </div>
          </motion.div>

          {/* Tall Card: Keyword Analysis */}
          <motion.div
            whileHover={{ y: -5 }}
            className="md:row-span-2 bg-gray-900 rounded-3xl p-8 border border-gray-800 relative overflow-hidden text-white"
          >
            <div className="relative z-10">
              <div className="w-12 h-12 bg-gray-800 rounded-2xl flex items-center justify-center mb-6 text-green-400">
                <Search className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-2">Keyword Intelligence</h4>
              <p className="text-gray-400 mb-8">Identify missing hard skills and certifications instantly.</p>
              <KeywordsGraphic />
            </div>
            {/* Abstract BG */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          </motion.div>

          {/* Medium Card: Privacy */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-blue-50 rounded-3xl p-8 border border-blue-100"
          >
            <Shield className="w-8 h-8 text-blue-600 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">Local-First Privacy</h4>
            <p className="text-sm text-gray-600">Your resume data is analyzed in-session. We never sell your personal info.</p>
          </motion.div>

          {/* Medium Card: Instant Fixes */}
          <motion.div
            whileHover={{ y: -5 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-lg shadow-gray-100"
          >
            <Zap className="w-8 h-8 text-yellow-500 mb-4" />
            <h4 className="text-lg font-bold text-gray-900 mb-2">One-Click Fixes</h4>
            <p className="text-sm text-gray-600">Auto-suggest impactful bullet points to replace weak verbs.</p>
          </motion.div>

        </div>

        {/* Visual Timeline / Workflow */}
        <div id="how-it-works" className="mt-32 scroll-mt-24">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-semibold mb-4 tracking-wide uppercase text-sm">The Process</h2>
            <h3 className="text-3xl font-bold text-gray-900">How It Works</h3>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-200 -z-10 -translate-y-1/2" />

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: "1. Upload & Scan",
                  icon: Upload,
                  desc: "Upload your PDF. Our engine extracts text and structure instantly.",
                  color: "bg-blue-100 text-blue-600"
                },
                {
                  title: "2. Gap Analysis",
                  icon: Search,
                  desc: "We check against 50+ ATS rules and identify missing keywords.",
                  color: "bg-indigo-100 text-indigo-600"
                },
                {
                  title: "3. AI Rewrite",
                  icon: Zap,
                  desc: "Our AI rewrites your bullets to be impact-driven and forceful.",
                  color: "bg-purple-100 text-purple-600"
                },
                {
                  title: "4. Get Hired",
                  icon: CheckCircle,
                  desc: "Download your perfected resume and triple your interview callbacks.",
                  color: "bg-green-100 text-green-600"
                }
              ].map((step, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.2 }}
                  className="relative group cursor-default"
                >
                  <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-shadow h-full flex flex-col items-center text-center">
                    <div className={`w-14 h-14 rounded-full ${step.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Features;