import { EnvelopeIcon, DocumentTextIcon } from '@heroicons/react/24/outline';
import { LinkedInLogoIcon } from '@radix-ui/react-icons';

export const FloatingSocials = ({ onOpenResume }) => {
    return (
        <div className="hidden md:flex fixed bottom-8 right-8 z-40 flex-col gap-4">
            {/* Resume Button */}
            <div className="relative group flex items-center justify-end">
                <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900/90 dark:bg-gray-800/90 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-white/10">
                    View Resume
                </span>
                <button
                    onClick={onOpenResume}
                    className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 hover:shadow-primary-100 dark:hover:shadow-primary-900 transition-all duration-300"
                >
                    <DocumentTextIcon className="w-5 h-5" />
                </button>
            </div>

            {/* Email Link */}
            <div className="relative group flex items-center justify-end">
                <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900/90 dark:bg-gray-800/90 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-white/10">
                    Email Me
                </span>
                <a
                    href="mailto:sayedibnmasud@gmail.com"
                    className="w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 hover:shadow-primary-100 dark:hover:shadow-primary-900 transition-all duration-300"
                >
                    <EnvelopeIcon className="w-5 h-5" />
                </a>
            </div>

            {/* LinkedIn Link */}
            <div className="relative group flex items-center justify-end">
                <span className="absolute right-full mr-3 px-3 py-1.5 bg-gray-900/90 dark:bg-gray-800/90 backdrop-blur-md text-white text-[10px] font-bold tracking-widest uppercase rounded-lg opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-xl border border-white/10">
                    LinkedIn
                </span>
                <a
                    href="https://linkedin.com/in/sayedibnmasud"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-[#0077b5] rounded-full shadow-lg flex items-center justify-center text-white hover:bg-[#006396] hover:scale-110 hover:shadow-blue-200 transition-all duration-300"
                >
                    <LinkedInLogoIcon className="w-5 h-5" />
                </a>
            </div>
        </div>
    );
};
