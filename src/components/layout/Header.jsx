import { useState } from 'react';

export const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navItems = ['Home', 'About', 'Projects', 'Contact'];

    const scrollToSection = (id) => {
        const element = document.getElementById(id.toLowerCase());
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <header className="fixed top-0 left-0 w-full z-40 bg-dark/80 backdrop-blur-md border-b border-primary/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
                <div
                    className="text-2xl font-bold tracking-tight cursor-pointer"
                    onClick={() => scrollToSection('home')}
                >
                    <span className="text-primary">B</span>esufikad
                </div>

                <nav className="hidden md:flex gap-8 items-center">
                    {navItems.map((item) => (
                        <button
                            key={item}
                            onClick={() => scrollToSection(item.toLowerCase())}
                            className="hover:text-primary transition font-medium"
                        >
                            {item}
                        </button>
                    ))}

                </nav>

                <div className="md:hidden flex items-center gap-2">
                    <button
                        className="text-2xl"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        ☰
                    </button>
                </div>
            </div>

            {mobileMenuOpen && (
                <div className="md:hidden bg-dark border-b border-primary/20 py-4">
                    <div className="flex flex-col items-center gap-4">
                        {navItems.map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="hover:text-primary transition text-lg"
                            >
                                {item}
                            </button>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};