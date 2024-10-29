import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';
import { containerVariants, itemVariants } from '../utils/animations';

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small teams getting started",
    features: [
      "Up to 5 team members",
      "Basic analytics",
      "24/7 support",
      "1 project",
      "Basic integrations"
    ]
  },
  {
    name: "Pro",
    price: "$99",
    description: "For growing businesses and teams",
    features: [
      "Up to 20 team members",
      "Advanced analytics",
      "Priority support",
      "10 projects",
      "Advanced integrations",
      "Custom reporting"
    ],
    popular: true
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Unlimited team members",
      "Enterprise analytics",
      "Dedicated support",
      "Unlimited projects",
      "Custom integrations",
      "Advanced security"
    ]
  }
];

export default function Pricing() {
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
              Simple, Transparent Pricing
            </motion.h2>
            <motion.p 
              variants={itemVariants}
              className="text-slate-400 max-w-2xl mx-auto"
            >
              Choose the perfect plan for your team's needs
            </motion.p>
          </div>

          <motion.div 
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border ${
                  plan.popular ? 'border-indigo-500' : 'border-slate-700/50'
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-indigo-500 text-white px-4 py-1 text-sm rounded-bl-lg rounded-tr-xl">
                    Popular
                  </div>
                )}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">{plan.name}</h3>
                  <div className="text-3xl font-bold text-white">
                    {plan.price}
                    {plan.price !== "Custom" && <span className="text-lg text-slate-400">/mo</span>}
                  </div>
                  <p className="text-slate-400">{plan.description}</p>
                  <ul className="space-y-3 pt-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-slate-300">
                        <Check className="h-5 w-5 text-indigo-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className={`w-full py-3 px-6 rounded-full text-white ${
                    plan.popular
                      ? 'bg-indigo-600 hover:bg-indigo-700'
                      : 'bg-slate-700 hover:bg-slate-600'
                  } transition-colors mt-6`}>
                    {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}