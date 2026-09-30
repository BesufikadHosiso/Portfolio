import { SocialLinks } from '../common/SocialLinks';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="py-8 border-t border-primary/20 text-center text-text-muted">
            <div className="max-w-6xl mx-auto px-4">
                <SocialLinks className="justify-center mb-4" />
                <p>© {currentYear} Besufikad Hosiso. Built to last, not just to launch.</p>
            </div>
        </footer>
    );
};