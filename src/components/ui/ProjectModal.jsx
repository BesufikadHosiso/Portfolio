import { useEffect } from 'react';
import { BiLinkExternal, BiLogoGithub } from 'react-icons/bi';

export const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-1 sm:p-4 bg-dark/95 backdrop-blur-xl"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-dark rounded-3xl p-2 sm:p-6 md:p-10 max-h-[95vh] overflow-y-auto shadow-2xl flex flex-col"
                onClick={(e) => e.stopPropagation()}
            >
                                <button
                                    onClick={onClose}
                                    className="absolute top-3 right-3 sm:top-4 sm:right-4 text-text-primary hover:text-primary text-3xl sm:text-4xl transition focus:outline-none"
                                    aria-label="Close modal"
                                >
                                    &times;
                                </button>

                                <div className="w-full aspect-video min-h-[180px] sm:min-h-[240px] bg-dark-light rounded-xl mb-4 sm:mb-6 overflow-hidden flex items-center justify-center">
                                    <img
                                        src={project.image}
                                        alt={project.title || 'Project image'}
                                        className="w-full h-full object-cover"
                                        style={{ minHeight: '100px', background: '#222' }}
                                        onError={e => { e.target.style.display = 'none'; }}
                                    />
                                    {/* Fallback if image fails */}
                                    <span className="absolute text-text-secondary text-xs sm:text-base opacity-70 select-none pointer-events-none" style={{display:'none'}}>Image unavailable</span>
                                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2 text-text-primary leading-tight break-words">{project.title}</h2>
                <p className="text-primary mb-4 text-xs sm:text-sm md:text-base font-medium tracking-wide">{project.role}</p>

                                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="px-2.5 py-1 bg-dark-light text-text-secondary rounded-full text-xs sm:text-sm border border-white/10 font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                <p className="text-text-secondary leading-relaxed mb-4 sm:mb-6 text-xs sm:text-base">{project.description}</p>

                                {project.features && (
                                    <div className="mb-4 sm:mb-6">
                                        <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2 sm:mb-3 text-text-primary">Key Features</h3>
                                        <ul className="list-disc list-inside space-y-1 sm:space-y-2 text-text-secondary text-xs sm:text-sm md:text-base pl-4">
                                            {project.features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mt-2 sm:mt-4 w-full">
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-primary text-dark font-semibold rounded-lg shadow-lg hover:bg-primary-light transition transform hover:scale-105 text-sm sm:text-base md:text-lg"
                                        >
                                            <BiLinkExternal className="text-lg sm:text-xl" /> Live Demo
                                        </a>
                                    )}
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 sm:px-6 py-2 sm:py-3 border-2 border-primary text-primary font-semibold rounded-lg shadow-lg hover:bg-primary/10 transition transform hover:scale-105 text-sm sm:text-base md:text-lg"
                                        >
                                            <BiLogoGithub className="text-lg sm:text-xl" /> GitHub
                                        </a>
                                    )}
                                </div>
            </div>
        </div>
    );
};