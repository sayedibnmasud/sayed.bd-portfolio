export const Summary = () => {
    const stats = [
        { label: "Direct Revenue", value: "USD 740K+", desc: "Annual Portfolio Revenue" },
        { label: "Growth Rate", value: "42% YoY", desc: "Year over year growth driven by client acquisition and delivery excellency" },
        { label: "QA Reliability", value: "99.9%", desc: "Uptime and success rate for core API suites" },
        { label: "Market Reach", value: "DACH/US", desc: "Strategic product localization & expansion" },
    ];

    return (
        <section id="about" className="py-24 bg-white dark:bg-gray-900 relative transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">

                <div className="max-w-4xl mx-auto text-center mb-24">
                    <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider text-sm uppercase mb-4 block">Summary</span>
                    <h2 className="text-3xl md:text-4xl font-medium text-gray-900 dark:text-white leading-relaxed">
                        Strategic Product Leader with a deep technical foundation in QA and architecture. Proven track record in managing complex multi-tenant platforms, optimizing delivery pipelines, and driving <span className="text-primary-600 dark:text-primary-400 italic">significant revenue growth</span> through data-informed product roadmaps.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="p-8 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary-100 dark:hover:border-primary-900 hover:shadow-lg hover:shadow-primary-50 dark:hover:shadow-primary-900/20 transition-all duration-300 group">
                            <div className="text-xs font-semibold text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                                {stat.label}
                            </div>
                            <div className="text-4xl font-bold text-gray-900 dark:text-white mb-4 group-hover:scale-105 transition-transform origin-left">
                                {stat.value}
                            </div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                {stat.desc}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};
