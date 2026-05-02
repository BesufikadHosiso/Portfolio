import { useScrollReveal } from '../../hooks/useScrollReveal';

export const ScrollReveal = ({ children, delay = 0, className = "" }) => {
    const { ref, isVisible } = useScrollReveal();

    return (
        <div
            ref={ref}
            className={`transition-all duration-700 ease-out ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};