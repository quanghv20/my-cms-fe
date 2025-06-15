import React, { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    size?: "sm" | "md";
    variant?:
    | "primary"
    | "outline"
    | "blue"
    | "green"
    | "cyan"
    | "teal"
    | "lime"
    | "red"
    | "pink"
    | "purple";
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    disabled?: boolean;
    className?: string;
    type?: "submit" | "reset" | "button";
    onClick?: (e?: any) => void;
}

const JSLifeButton: React.FC<ButtonProps> = ({
    children,
    size = "md",
    variant = "primary",
    startIcon,
    endIcon,
    className = "",
    disabled = false,
    type = "button",
    onClick,
}) => {
    const sizeClasses = {
        sm: "px-4 py-1.5 text-sm",
        md: "px-5 py-3 text-sm",
    };

    const variantClasses: Record<string, string> = {
        primary:
            "bg-brand-500 text-white shadow-theme-xs hover:bg-brand-600 disabled:bg-brand-300",
        outline:
            "bg-white text-gray-700 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 dark:bg-gray-800 dark:text-gray-400 dark:ring-gray-700 dark:hover:bg-white/[0.03] dark:hover:text-gray-300",
        blue:
            "text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800",
        green:
            "text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800",
        cyan:
            "text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800",
        teal:
            "text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800",
        lime:
            "text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800",
        red:
            "text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800",
        pink:
            "text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800",
        purple:
            "text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800",
    };

    const baseClass = `inline-flex items-center justify-center font-medium gap-2 rounded-lg transition text-center`;

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseClass} ${sizeClasses[size]} ${variantClasses[variant] || ""} ${disabled ? "cursor-not-allowed opacity-50" : ""
                } ${className}`}
        >
            {startIcon && <span className="flex items-center">{startIcon}</span>}
            {children}
            {endIcon && <span className="flex items-center">{endIcon}</span>}
        </button>
    );
};

export default JSLifeButton;
