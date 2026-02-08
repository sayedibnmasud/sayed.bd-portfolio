export const Logo = ({ className = "w-8 h-8", color = "currentColor" }) => {
    return (
        <svg
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Product Management Logo"
        >
            {/* New Sharp Non-Eye Abstract Chevron Logo */}
            <path
                d="M20 30L50 50L20 70"
                stroke={color}
                strokeWidth="12"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
            <path
                d="M50 30L80 50L50 70"
                stroke={color}
                strokeWidth="12"
                strokeLinecap="butt"
                strokeLinejoin="miter"
            />
        </svg>
    );
};
