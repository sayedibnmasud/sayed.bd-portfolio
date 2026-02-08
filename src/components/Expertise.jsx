import { Quotes, CheckCircle } from '@phosphor-icons/react';

export const Expertise = () => {
    const skills = [
        {
            category: "Process Management",
            items: ["Agile / Scrum", "Jira Administration", "Roadmap & Prioritization", "Stakeholder Management"]
        },
        {
            category: "Quality Assurance",
            items: ["Exploratory Testing", "Manual QA", "API Testing (Postman / Bruno)", "Performance Testing (JMeter)"]
        },
        {
            category: "Technical",
            items: ["APIs", "Databases (SQL, MongoDB)", "Version Control (Git)", "Cloud (GCP, Cloudways)"]
        }
    ];

    return (
        <section id="expertise" className="py-24 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-6">

                <div className="flex items-center gap-3 mb-16 max-w-2xl mx-auto">
                    <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
                    <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider text-sm uppercase">Expertise</span>
                    <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {skills.map((skillGroup, idx) => (
                        <div key={idx} className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 hover:border-indigo-100 dark:hover:border-indigo-900 transition-colors">
                            <h4 className="font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b border-gray-100 dark:border-gray-800 text-lg flex items-center gap-2">
                                <span className="w-1.5 h-6 bg-indigo-500 rounded-full"></span>
                                {skillGroup.category}
                            </h4>
                            <ul className="space-y-4">
                                {skillGroup.items.map((item, i) => (
                                    <li key={i} className="text-sm text-gray-600 dark:text-gray-400 font-medium flex items-start gap-3">
                                        <CheckCircle weight="bold" className="w-4 h-4 text-indigo-500 mt-0.5 shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
