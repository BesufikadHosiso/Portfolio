import { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ProjectModal } from '../ui/ProjectModal';
import { projects } from '../../constants/project';


export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    // Helper to check if the media source is a video
    const isVideo = (src) => {
        return typeof src === 'string' && (src.toLowerCase().endsWith('.webm') || src.toLowerCase().endsWith('.mp4'));
    };

    return (
        <section id="projects" className="px-6 py-32 lg:px-8 bg-dark scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal>
                    <h2 className="mb-16 text-4xl font-bold text-center md:text-5xl">
                        Selected <span className="text-primary">Works</span>
                    </h2>
                </ScrollReveal>

                <div className="grid gap-8 md:grid-cols-2">
                    {projects.map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 100}>
                            <div
                                className="overflow-hidden transition-all duration-700 border shadow-2xl cursor-pointer project-card bg-dark-light/20 rounded-3xl hover:transform hover:-translate-y-3 group border-white/10 hover:border-primary/50 backdrop-blur-sm"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="relative overflow-hidden h-72">
                                    {isVideo(project.image) ? (
                                        <video
                                            src={project.image}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                                        />
                                    )}

                                    <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 bg-dark/40 group-hover:opacity-100">
                                        <span className="px-6 py-2 font-bold transition-transform duration-500 scale-90 rounded-full shadow-lg bg-primary text-dark group-hover:scale-100">View Case Study</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-start justify-between mb-4">
                                        <div>
                                            <h3 className="mb-1 text-2xl font-bold">{project.title}</h3>
                                            <p className="text-xs font-medium tracking-widest uppercase text-primary">{project.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {project.tech.slice(0, 3).map((tech, idx) => (
                                            <span key={idx} className="text-[10px] px-3 py-1 bg-white/5 text-text-secondary rounded-full border border-white/5 uppercase tracking-tighter">
                        {tech}
                      </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    onClose={() => setSelectedProject(null)}
                />
            )}
        </section>
    );
};