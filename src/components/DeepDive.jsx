import { motion } from 'framer-motion';
import { Archive, Server, ShieldCheck, Globe, Layers, Workflow, Users, Layout, Code2, MessageSquare, Calendar, Github } from 'lucide-react';

export const DeepDive = () => {
    return (
        <section id="deep-dive" className="py-24 bg-gray-50 dark:bg-gray-950 overflow-hidden transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">

                {/* Technical Deep Dive */}
                <div className="grid lg:grid-cols-2 gap-16 mb-32 items-center">
                    <div>
                        <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider text-sm uppercase mb-4 block">Product Strategy & Architecture</span>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Bridging engineering complexity with business goals.</h2>
                        <p className="text-gray-500 dark:text-gray-400 mb-10 text-lg">
                            I leverage my technical background to build credible roadmaps, de-risk complex deployments, and lead cross-functional teams effectively.
                        </p>

                        <div className="space-y-8">
                            {[
                                { title: "Technical Feasibility Analysis", desc: "Assessing architectural trade-offs early to prevent debt and ensure scalability.", icon: Layers },
                                { title: "API-First Product Design", desc: "Defining clear contracts for high-throughput integrations and partner ecosystems.", icon: Globe },
                                { title: "Security & Compliance Leadership", desc: "translating SOC2/GDPR requirements into actionable product features.", icon: ShieldCheck }
                            ].map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white dark:bg-gray-800 shadow-sm flex items-center justify-center text-primary-600 dark:text-primary-400">
                                        <item.icon strokeWidth={1.5} className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Collaborative Team Diagram */}
                    <div className="relative min-h-[450px] sm:min-h-[550px] w-full bg-white dark:bg-gray-900 rounded-3xl shadow-xl border border-gray-100 dark:border-gray-800 p-6 sm:p-12 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 bg-grid-slate-100 dark:bg-grid-slate-900/[0.05] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:[mask-image:linear-gradient(0deg,black,rgba(0,0,0,0.6))]"></div>

                        <div className="relative z-10 w-full max-w-xl">

                            {/* Circular arrangement container */}
                            <div className="relative w-full aspect-square max-w-[400px] mx-auto">

                                {/* PM at Center */}
                                <motion.div
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-5 sm:px-6 py-3 sm:py-4 rounded-2xl shadow-xl ring-2 ring-primary-100 dark:ring-primary-900/50 z-20 flex flex-col items-center text-center w-32 sm:w-40"
                                >
                                    <span className="font-bold text-xs sm:text-sm leading-tight">Product Manager</span>
                                </motion.div>

                                {/* Team Members in Circle */}
                                {[
                                    { title: "Design", icon: Layout, color: "text-pink-500", bg: "bg-pink-50 dark:bg-pink-900/20", border: "border-pink-100 dark:border-pink-800", position: "top-0 left-1/2 -translate-x-1/2" },
                                    { title: "Engineering", icon: Code2, color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20", border: "border-blue-100 dark:border-blue-800", position: "top-[15%] right-[5%]" },
                                    { title: "QA", icon: ShieldCheck, color: "text-green-500", bg: "bg-green-50 dark:bg-green-900/20", border: "border-green-100 dark:border-green-800", position: "bottom-[15%] right-[5%]" },
                                    { title: "DevOps", icon: Server, color: "text-orange-500", bg: "bg-orange-50 dark:bg-orange-900/20", border: "border-orange-100 dark:border-orange-800", position: "bottom-0 left-1/2 -translate-x-1/2" },
                                    { title: "Client", icon: Users, color: "text-purple-500", bg: "bg-purple-50 dark:bg-purple-900/20", border: "border-purple-100 dark:border-purple-800", position: "bottom-[15%] left-[5%]" },
                                    { title: "Stakeholders", icon: Calendar, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-900/20", border: "border-indigo-100 dark:border-indigo-800", position: "top-[15%] left-[5%]" }
                                ].map((role, idx) => (
                                    <motion.div
                                        key={idx}
                                        whileHover={{ scale: 1.05 }}
                                        className={`absolute ${role.position} ${role.bg} border ${role.border} rounded-xl sm:rounded-2xl flex flex-col items-center justify-center shadow-md p-2 sm:p-3 w-16 sm:w-20 h-16 sm:h-20`}
                                    >
                                        <role.icon strokeWidth={1.5} className={`w-5 sm:w-6 h-5 sm:h-6 ${role.color} mb-1 flex-shrink-0`} />
                                        <span className="text-[8px] sm:text-[9px] font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wide text-center leading-tight">{role.title}</span>
                                    </motion.div>
                                ))}

                                {/* Connecting circle */}
                                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                                    <circle cx="50%" cy="50%" r="45%" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" className="text-primary-300 dark:text-primary-700" />
                                </svg>
                            </div>

                            <div className="mt-8 sm:mt-12 flex items-center justify-center gap-2 text-xs sm:text-sm text-gray-400 font-medium">
                                <MessageSquare strokeWidth={1.5} className="w-4 h-4 flex-shrink-0" />
                                <span className="text-center">Cross-Functional Collaboration</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Strategic QA Section */}
                <div className="bg-primary-900 rounded-3xl p-12 lg:p-16 text-white relative overflow-hidden">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-16">
                        <div>
                            <h3 className="text-3xl font-bold mb-6">Strategic QA & Delivery</h3>
                            <p className="text-primary-200 text-lg leading-relaxed mb-8">
                                I view Quality Assurance as a business risk management tool. By owning the strategic QA vision, I ensure faster delivery cycles and higher customer trust.
                            </p>
                            <div className="w-16 h-1 bg-primary-500 rounded-full"></div>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-8">
                            <div>
                                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                                    <ShieldCheck strokeWidth={1.5} className="w-5 h-5 text-primary-400" /> Risk Mitigation
                                </h4>
                                <p className="text-primary-200 text-sm leading-relaxed">Implementing shift-left testing methodologies to identify architectural flaws before code leaves writers.</p>
                            </div>
                            <div>
                                <h4 className="text-xl font-bold mb-3 flex items-center gap-2">
                                    <Workflow strokeWidth={1.5} className="w-5 h-5 text-primary-400" /> Automated Suites
                                </h4>
                                <p className="text-primary-200 text-sm leading-relaxed">Designing end-to-end regression tests that cover 350+ of critical user paths in multi-tenant environments.</p>
                            </div>
                        </div>
                    </div>

                    {/* Decorative Background */}
                    <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-primary-800 rounded-full blur-3xl opacity-50"></div>
                </div>

            </div>
        </section>
    );
};
