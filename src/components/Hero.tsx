import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

export default function Hero() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="pt-32 pb-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="grid lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Column - Text Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div 
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-indigo-500/10 rounded-full text-indigo-400 border border-indigo-500/20"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Introducing Analytics 2.0</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-indigo-200 to-indigo-400"
            >
              Transform Data into 
              <br />
              <span className="text-indigo-400">Actionable Insights</span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-lg text-slate-300 max-w-xl"
            >
              Powerful analytics dashboard that helps you track, analyze, and optimize your business performance in real-time. Make data-driven decisions with confidence.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-colors flex items-center group">
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-slate-800 text-white px-8 py-3 rounded-full border border-slate-700 hover:bg-slate-700 transition-colors">
                Watch Demo
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-3 gap-6 pt-8">
              <div className="space-y-2">
                <div className="text-2xl font-bold text-indigo-400">99.9%</div>
                <div className="text-sm text-slate-400">Uptime SLA</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-indigo-400">2.5M+</div>
                <div className="text-sm text-slate-400">Data Points</div>
              </div>
              <div className="space-y-2">
                <div className="text-2xl font-bold text-indigo-400">500+</div>
                <div className="text-sm text-slate-400">Enterprise Users</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Dashboard Preview */}
          <motion.div
            variants={itemVariants}
            className="relative"
          >
            {/* Gradient Orbs */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-indigo-500 rounded-full filter blur-[128px] opacity-20"></div>
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-purple-500 rounded-full filter blur-[128px] opacity-20"></div>

            {/* Dashboard Container */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl border border-slate-700"
            >
              {/* Top Bar */}
              <div className="flex items-center justify-between p-4 border-b border-slate-700">
                <div className="flex items-center space-x-2">
                  <BarChart3 className="h-5 w-5 text-indigo-400" />
                  <span className="text-sm font-medium">Analytics Dashboard</span>
                </div>
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-6">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000"
                  alt="Analytics Dashboard"
                  className="rounded-xl w-full shadow-lg"
                />
              </div>

              {/* Floating Cards */}
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="absolute -left-16 top-20 bg-slate-800/90 backdrop-blur-sm p-4 rounded-lg border border-slate-700 shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-indigo-500/20 rounded-lg">
                    <Zap className="h-6 w-6 text-indigo-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Performance</div>
                    <div className="text-xs text-slate-400">+28.4% vs last week</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -right-16 bottom-20 bg-slate-800/90 backdrop-blur-sm p-4 rounded-lg border border-slate-700 shadow-xl"
              >
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-purple-500/20 rounded-lg">
                    <Shield className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm font-medium">Security Score</div>
                    <div className="text-xs text-slate-400">98/100 - Excellent</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}