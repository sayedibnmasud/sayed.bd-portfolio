import { useState, useEffect } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { Logo } from './Logo';

export const Header = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            setIsVisible(false);

            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsVisible(true);
            }, 150); // Show after 150ms of no scrolling
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 px-6 py-6 transition-all duration-300 ${!isVisible ? 'md:translate-y-0 -translate-y-full' : 'translate-y-0'}`}>
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a href="/" className="flex items-center gap-2 group">
                    <Logo className="w-8 h-8 text-primary-600 dark:text-primary-400 group-hover:scale-110 transition-transform duration-300" />
                    <span className="font-bold text-gray-900 dark:text-white tracking-wider text-sm uppercase">Sayed Ibn Masud</span>
                </a>

                <div className="flex items-center gap-4">
                    <div className="md:hidden">
                        <ThemeToggle />
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <a href="./#about" className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 uppercase tracking-widest transition-colors">About</a>
                        <a href="./#experience" className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 uppercase tracking-widest transition-colors">Journey</a>
                        <a href="./#expertise" className="text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 uppercase tracking-widest transition-colors">Expertise</a>

                        <ThemeToggle />

                        <button
                            onClick={() => window.location.href = 'mailto:sayedibnmasud@gmail.com'}
                            className="px-5 py-2.5 bg-primary-600 text-white rounded-md text-xs font-bold uppercase tracking-wider hover:bg-primary-700 transition-colors shadow-lg shadow-primary-200 dark:shadow-none">
                            Get In Touch
                        </button>
                    </nav>
                </div>
            </div>

            {/* Premium Apple Glass effect */}
            <div className="absolute inset-0 bg-white/60 dark:bg-black/60 backdrop-blur-2xl backdrop-saturate-150 -z-10 border-b border-white/20 dark:border-white/10"></div>
        </header>
    );
};
