import { useEffect } from 'react';

export const CustomCursor = () => {
    useEffect(() => {
        const cursor = document.querySelector('.custom-cursor');
        if (!cursor) return;

        const onMouseMove = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        const onMouseEnterInteractive = (e) => {
            if (e.target.closest('a, button, .project-card, .social-link')) {
                cursor.classList.add('w-10', 'h-10', 'bg-primary/50', 'backdrop-blur-sm');
                cursor.classList.remove('w-5', 'h-5');
            } else {
                cursor.classList.remove('w-10', 'h-10', 'bg-primary/50', 'backdrop-blur-sm');
                cursor.classList.add('w-5', 'h-5');
            }
        };

        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('mouseover', onMouseEnterInteractive);

        return () => {
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('mouseover', onMouseEnterInteractive);
        };
    }, []);

    return (
        <div className="custom-cursor hidden md:block w-5 h-5 bg-primary rounded-full fixed pointer-events-none z-9999 transition-all duration-200 ease-out -translate-x-1/2 -translate-y-1/2 mix-blend-difference" />
    );
};