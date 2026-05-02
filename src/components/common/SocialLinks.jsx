import { socials } from '../../constants/socials';
import * as BiIcons from 'react-icons/bi';

export const SocialLinks = ({ className = '' }) => {
    return (
        <div className={`flex gap-4 ${className}`}>
            {socials.map((social) => {
                const Icon = BiIcons[social.icon];
                return (
                    <a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link text-2xl hover:text-primary transition"
                        aria-label={social.name}
                    >
                        {Icon ? <Icon /> : null}
                    </a>
                );
            })}
        </div>
    );
};