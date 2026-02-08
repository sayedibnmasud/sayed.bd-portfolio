import { motion } from 'framer-motion';
import { ArrowRight, Eye } from '@phosphor-icons/react';

export const Hero = ({ onOpenResume }) => {
    return (
        <section className="min-h-[90vh] flex flex-col justify-center px-6 pt-20 relative overflow-hidden bg-[#F9FAFB] dark:bg-gray-950">

            {/* Background Gradients */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-50 dark:bg-primary-900/20 rounded-full blur-3xl -z-10 opacity-60 translate-x-1/3 -translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">
                <div className="max-w-3xl">
                    {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-semibold tracking-wide mb-8">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
                        </span>
                        AVAILABLE FOR DACH/US MARKETS
                    </div> */}

                    <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white tracking-tight leading-[1.1] mb-6">
                        Senior Product Manager | <br className="hidden lg:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400 dark:from-primary-400 dark:to-primary-300">
                            SaaS & Multi-Tenant Platforms
                        </span>
                    </h1>

                    <p className="text-xl text-gray-500 dark:text-gray-400 leading-relaxed max-w-2xl mb-10">
                        Technical fluency meets revenue impact. Delivering scalable architecture and strategic growth for enterprise-grade solutions.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#deep-dive" className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 text-white rounded-lg font-medium transition-all hover:bg-primary-700 hover:shadow-lg hover:shadow-primary-200 dark:hover:shadow-primary-900 active:transform active:scale-95 whitespace-nowrap">
                            View Impact Portfolio
                            <ArrowRight weight="bold" className="w-4 h-4" />
                        </a>

                        <button
                            onClick={onOpenResume}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 rounded-lg font-medium transition-all hover:border-gray-300 dark:hover:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800 active:transform active:scale-95 whitespace-nowrap"
                        >
                            View My Resume
                            <Eye weight="bold" className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Hero Image */}
                <div className="hidden lg:block relative group">
                    {/* Organic Bloom Container */}
                    <motion.div
                        animate={{
                            borderRadius: [
                                "60% 40% 30% 70% / 60% 30% 70% 40%",
                                "30% 60% 70% 40% / 50% 60% 30% 60%",
                                "60% 40% 30% 70% / 60% 30% 70% 40%"
                            ],
                        }}
                        transition={{
                            duration: 10,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="relative z-10 w-[420px] h-[520px] overflow-hidden shadow-[0_20px_50px_rgba(79,70,229,0.2)] bg-gray-100 dark:bg-gray-800"
                    >
                        <motion.img
                            src="/sayed.jpg"
                            alt="Sayed Ibn Masud"
                            whileHover={{ filter: "grayscale(0%)" }}
                            initial={{ scale: 1, filter: "grayscale(100%)" }}
                            transition={{ duration: 0.8 }}
                            className="w-full h-full object-cover opacity-100"
                        />
                    </motion.div>

                    {/* Organic Pulse Glow */}
                    <motion.div
                        animate={{
                            scale: [1, 1.1, 1],
                            opacity: [0.1, 0.2, 0.1],
                            borderRadius: [
                                "30% 60% 70% 40% / 50% 60% 30% 60%",
                                "60% 40% 30% 70% / 60% 30% 70% 40%",
                                "30% 60% 70% 40% / 50% 60% 30% 60%"
                            ]
                        }}
                        transition={{
                            duration: 12,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute inset-x-[-20px] inset-y-[-20px] bg-primary-500 blur-3xl -z-10"
                    />
                </div>
            </div>
        </section>
    );
};
