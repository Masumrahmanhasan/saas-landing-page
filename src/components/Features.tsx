import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { BarChart3, Zap, Shield, Globe2, ArrowUpRight, Cpu } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

const features = [
  {
    icon: <BarChart3 className="h-6 w-6" />,
    title: "Real-time Analytics",
    description: "Track your metrics in real-time with our powerful dashboard."
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Lightning Fast",
    description: "Optimized performance ensures your data loads instantly."
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Enterprise Security",
    description: "Bank-grade encryption and security protocols."
  },
  {
    icon: <Globe2 className="h-6 w-6" />,
    title: "Global Scale",
    description: "Deploy worldwide with our distributed infrastructure."
  },
  {
    icon: <Cpu className="h-6 w-6" />,
    title: "AI-Powered",
    description: "Advanced insights powered by machine learning."
  },
  {
    icon: <ArrowUpRight className="h-6 w-6" />,
    title: "Predictive Analysis",
    description: "Forecast trends with predictive modeling."
  }
];

export default function Features() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section className="py-20 bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
          className="space-y-12"
        >
          <div className="text-center space-y-4">
            <motion.h2 
              variants={itemVariants}
              className="text-3xl sm:text-4xl font-bold text-white"
            >
              Powerful Features for Modern Teams
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-slate-400 max-w-2xl mx-auto"
            >
              Everything you need to analyze, understand, and grow your business
              with confidence.
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-indigo-500/50 transition-colors group"
              >
                <div className="text-indigo-400 bg-indigo-500/10 p-3 rounded-lg w-fit group-hover:bg-indigo-500/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-xl font-semibold text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-slate-400">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}