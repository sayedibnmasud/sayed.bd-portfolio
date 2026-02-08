import { Mail, Linkedin, Github } from 'lucide-react';

export const Footer = () => {
    return (
        <footer id="contact" className="py-20 px-6 bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">

                <div className="text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Let's build something <span className="text-primary-600 dark:text-primary-400">impactful.</span></h2>
                    <p className="text-gray-500 dark:text-gray-400">Available for leadership roles in DACH and US-based tech teams.</p>
                </div>

                <div className="flex flex-col md:flex-row items-center gap-6">
                    <a href="mailto:sayedibnmasud@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200 dark:shadow-primary-900/30">
                        Reach out via Email
                        <Mail strokeWidth={1.5} className="w-4 h-4" />
                    </a>

                    <div className="flex items-center gap-6 text-gray-400">
                        <a href="https://linkedin.com/in/sayedibnmasud" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2 text-sm font-medium">
                            <Linkedin strokeWidth={1.5} className="w-5 h-5" />
                            LinkedIn
                        </a>
                        <a href="https://github.com/sayedibnmasud" target="_blank" rel="noopener noreferrer" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors flex items-center gap-2 text-sm font-medium">
                            <Github strokeWidth={1.5} className="w-5 h-5" />
                            Github
                        </a>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-gray-100 dark:border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
                <p>© {new Date().getFullYear()} Sayed Ibn Masud. All rights reserved.</p>
                <div className="flex items-center gap-2">
                    <span>Vibe coded with</span>
                    <div className="flex items-center gap-1.5 font-semibold text-gray-900 dark:text-white">
                        <img src="/antigravity.svg" alt="Antigravity Logo" className="w-5 h-5" />
                        <span>Antigravity</span>
                    </div>
                </div>
            </div>
        </footer>
    );
};
