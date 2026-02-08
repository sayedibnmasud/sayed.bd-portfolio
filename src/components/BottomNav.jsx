import { User, Stack, Briefcase, Envelope, FileText } from '@phosphor-icons/react';

export const BottomNav = ({ onOpenResume }) => {
    const navItems = [
        { icon: User, label: 'About', href: './#about' },
        { icon: Briefcase, label: 'Journey', href: './#experience' },
        { icon: Stack, label: 'Expertise', href: './#expertise' },
        { icon: FileText, label: 'Resume', href: '#' },
        { icon: Envelope, label: 'Contact', href: './#contact' },
    ];

    const handleClick = (e, item) => {
        if (item.label === 'Resume') {
            e.preventDefault();
            onOpenResume();
        }
    };

    return (
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/60 dark:bg-black/60 backdrop-blur-2xl backdrop-saturate-150 border-t border-white/20 dark:border-white/10 pb-safe">
            <div className="grid grid-cols-5 h-16">
                {navItems.map((item, idx) => (
                    <a
                        key={idx}
                        href={item.href}
                        onClick={(e) => handleClick(e, item)}
                        className="flex flex-col items-center justify-center gap-1 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 active:text-primary-600 dark:active:text-primary-400 transition-colors"
                    >
                        <item.icon className="w-5 h-5" />
                        <span className="text-[10px] font-medium tracking-wide">{item.label}</span>
                    </a>
                ))}
            </div>
        </nav>
    );
};
