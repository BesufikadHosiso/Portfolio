import { useEffect } from 'react';
import { BiLinkExternal, BiLogoGithub, BiX } from 'react-icons/bi';

export const ProjectModal = ({ project, onClose }) => {
    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    // Helper to check if the media source is a video
    const isVideo = (src) => {
        return typeof src === 'string' && (src.toLowerCase().endsWith('.webm') || src.toLowerCase().endsWith('.mp4'));
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-1 sm:p-4 bg-dark/95 backdrop-blur-xl"
            onClick={onClose}
        >
            <div
                className="relative w-full max-w-lg sm:max-w-2xl md:max-w-3xl lg:max-w-4xl bg-dark rounded-3xl max-h-[95vh] shadow-2xl flex flex-col overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Stable Close Button */}
                <button
                    onClick={onClose}
                    className="absolute z-50 p-2 transition-all border rounded-full shadow-xl top-3 right-3 sm:top-5 sm:right-5 bg-dark/60 backdrop-blur-md border-white/10 text-text-primary hover:text-primary hover:scale-110 active:scale-95 focus:outline-none"
                    aria-label="Close modal"
                >
                    <BiX className="text-2xl sm:text-3xl" />
                </button>

                {/* Scrollable Content Container */}
                <div className="p-4 overflow-y-auto sm:p-8 md:p-10 custom-scrollbar">
                                <div className="w-full aspect-video min-h-[180px] sm:min-h-[240px] bg-dark-light rounded-xl mb-4 sm:mb-6 overflow-hidden flex items-center justify-center">
                                    {isVideo(project.image) ? (
                                        <video
                                            src={project.image}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="object-cover w-full h-full"
                                        />
                                    ) : (
                                        <img
                                            src={project.image}
                                            alt={project.title || 'Project image'}
                                            className="object-cover w-full h-full"
                                            style={{ minHeight: '100px', background: '#222' }}
                                            onError={e => { e.target.style.display = 'none'; }}
                                        />
                                    )}
                                    {/* Fallback if image fails */}
                                    <span className="absolute text-xs pointer-events-none select-none text-text-secondary sm:text-base opacity-70" style={{display:'none'}}>Image unavailable</span>
                                </div>

                <h2 className="mb-1 text-2xl font-bold leading-tight break-words sm:text-3xl md:text-4xl sm:mb-2 text-text-primary">{project.title}</h2>
                <p className="mb-4 text-xs font-medium tracking-wide text-primary sm:text-sm md:text-base">{project.role}</p>

                                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                                    {project.tech.map((tech, idx) => (
                                        <span key={idx} className="px-2.5 py-1 bg-dark-light text-text-secondary rounded-full text-xs sm:text-sm border border-white/10 font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                <p className="mb-4 text-xs leading-relaxed text-text-secondary sm:mb-6 sm:text-base">{project.description}</p>

                                {project.features && (
                                    <div className="mb-4 sm:mb-6">
                                        <h3 className="mb-2 text-base font-semibold sm:text-lg md:text-xl sm:mb-3 text-text-primary">Key Features</h3>
                                        <ul className="pl-4 space-y-1 text-xs list-disc list-inside sm:space-y-2 text-text-secondary sm:text-sm md:text-base">
                                            {project.features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div className="flex flex-col w-full gap-2 mt-2 sm:flex-row sm:gap-4 sm:mt-4">
                                    {project.liveLink && (
                                        <a
                                            href={project.liveLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center flex-1 gap-2 px-4 py-2 text-sm font-semibold transition transform rounded-lg shadow-lg sm:px-6 sm:py-3 bg-primary text-dark hover:bg-primary-light hover:scale-105 sm:text-base md:text-lg"
                                        >
                                            <BiLinkExternal className="text-lg sm:text-xl" /> Live Demo
                                        </a>
                                    )}
                                    {project.githubLink && (
                                        <a
                                            href={project.githubLink}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center flex-1 gap-2 px-4 py-2 text-sm font-semibold transition transform border-2 rounded-lg shadow-lg sm:px-6 sm:py-3 border-primary text-primary hover:bg-primary/10 hover:scale-105 sm:text-base md:text-lg"
                                        >
                                            <BiLogoGithub className="text-lg sm:text-xl" /> GitHub
                                        </a>
                                    )}
                                </div>
                </div>
            </div>
        </div>
    );
};