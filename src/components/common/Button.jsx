export const Button = ({ children, icon: Icon, variant = 'primary', onClick, className = '', ...props }) => {
    const baseClasses = "px-8 py-3 font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark focus:ring-primary";
    const variants = {
        primary: "bg-primary text-dark hover:bg-primary-hover focus:ring-primary shadow-primary/50 hover:shadow-primary/75",
        outline: "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-dark focus:ring-primary"
    };
    return (
        <button
            className={`${baseClasses} ${variants[variant]} ${className} flex items-center justify-center gap-2`}
            onClick={onClick}
            {...props}
        >
            {Icon && <Icon className="text-lg" />}
            {children}
        </button>
    );
};