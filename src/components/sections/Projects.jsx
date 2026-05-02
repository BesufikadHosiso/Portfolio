import { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { ProjectModal } from '../ui/ProjectModal';
import { projects } from '../../constants/project';

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-32 px-6 lg:px-8 bg-dark scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
                        Selected <span className="text-primary">Works</span>
                    </h2>
                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ScrollReveal key={project.id} delay={index * 100}>
                            <div
                                className="project-card bg-dark-light/20 rounded-3xl overflow-hidden hover:transform hover:-translate-y-3 transition-all duration-700 cursor-pointer group border border-white/10 hover:border-primary/50 shadow-2xl backdrop-blur-sm"
                                onClick={() => setSelectedProject(project)}
                            >
                                <div className="h-72 overflow-hidden relative">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-dark/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                                        <span className="px-6 py-2 bg-primary text-dark rounded-full font-bold scale-90 group-hover:scale-100 transition-transform duration-500 shadow-lg">View Case Study</span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="text-2xl font-bold mb-1">{project.title}</h3>
                                            <p className="text-primary font-medium text-xs tracking-widest uppercase">{project.role}</p>
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