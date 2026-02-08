export const Journey = () => {
    const experiences = [
        {
            year: "2025 — Present",
            role: "Business Operations Manager",
            company: "SELISE Group AG",
            desc: "Leading F&B SaaS platforms & E-commerce portfolios. Revenue ownership of USD 740K+ with projected 42% growth."
        },
        {
            year: "2023 — 2024",
            role: "Deputy Business Ops Manager",
            company: "SELISE Group AG",
            desc: "Managed 15 cross-functional product teams. Optimized resource allocation and profitability for Retail & Services."
        },
        {
            year: "2021 — 2022",
            role: "Business Analyst (PM)",
            company: "SELISE Group AG",
            desc: "Delivered 5+ web applications including job matching platforms and e-shops. Led cross-functional teams to turn plans into roadmaps."
        },
        {
            year: "2020 — 2021",
            role: "Product Acceptance Analyst",
            company: "SELISE Group AG",
            desc: "Owned product-level test strategies and requirement analysis to ensure release quality."
        },
        {
            year: "2019 — 2021",
            role: "Lab Officer",
            company: "North South University",
            desc: "Conducted lab sessions on OOP, Data Structures, and Algorithms."
        }
    ];

    return (
        <section id="experience" className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">

                <div className="mb-16">
                    <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider text-sm uppercase mb-4 block">The Journey</span>
                </div>

                <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3 md:ml-0 md:border-l-0 md:border-t md:grid md:grid-cols-5 md:gap-8">
                    {experiences.map((exp, index) => (
                        <div key={index} className="mb-10 ml-6 md:ml-0 md:mb-0 md:pt-8 relative group">
                            {/* Dot */}
                            <span className="absolute -left-[29.5px] top-1 md:top-[-5px] md:left-0 w-3 h-3 bg-primary-600 rounded-full border-4 border-white dark:border-gray-900 ring-1 ring-gray-200 dark:ring-gray-700 group-hover:ring-primary-300 dark:group-hover:ring-primary-600 transition-all"></span>

                            <span className="text-xs font-bold text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2 block">{exp.year}</span>
                            <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-1">{exp.role}</h3>
                            <div className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-3">{exp.company}</div>
                            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                                {exp.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
