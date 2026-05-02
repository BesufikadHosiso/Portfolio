import { useState, useEffect } from 'react';

const roles = ["Frontend Developer", "Content Creator", "Full Stack Developer", "UI/UX Enthusiast", "Problem Solver"];

export const TypingAnimation = () => {
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [typingSpeed, setTypingSpeed] = useState(150);

    useEffect(() => {
        const handleTyping = () => {
            const currentRole = roles[currentRoleIndex];
            if (isDeleting) {
                setDisplayText(currentRole.substring(0, displayText.length - 1));
                setTypingSpeed(50);
                if (displayText.length === 0) {
                    setIsDeleting(false);
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
                    setTypingSpeed(150);
                }
            } else {
                setDisplayText(currentRole.substring(0, displayText.length + 1));
                if (displayText.length === currentRole.length) {
                    setIsDeleting(true);
                    setTypingSpeed(2000);
                } else {
                    setTypingSpeed(100);
                }
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [displayText, isDeleting, currentRoleIndex]);

    return (
        <span className="text-primary border-r-2 border-primary pr-2 inline-block">
      {displayText}
            <span className="animate-pulse">|</span>
    </span>
    );
};