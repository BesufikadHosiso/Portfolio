import { ScrollReveal } from '../ui/ScrollReveal';
import { SocialLinks } from '../common/SocialLinks';
import { BiCheckCircle } from 'react-icons/bi';
import profileImg from '../../assets/besudev.jpg';

export const About = () => {
    return (
        <section id="about" className="px-6 py-32 lg:px-8 scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                <ScrollReveal>
                    <h2 className="mb-20 text-4xl font-bold text-center md:text-5xl text-balance">
                        About <span className="text-primary">Me</span>
                    </h2>
                </ScrollReveal>

                <div className="grid items-start gap-16 md:grid-cols-2">
                    <ScrollReveal delay={100}>
                        <div className="relative">
                            <div className="p-2 overflow-hidden border shadow-2xl aspect-4/5 rounded-3xl border-white/10 bg-dark-light">
                                <img
                                    src={profileImg}
                                    alt="Besufikad Hosiso"
                                    className="object-cover w-full h-full transition-all duration-700 shadow-lg rounded-2xl grayscale hover:grayscale-0"
                                />
                            </div>
                            <div className="absolute w-32 h-32 rounded-full -bottom-6 -right-6 bg-primary/20 blur-3xl -z-10"></div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200} className="max-w-xl space-y-12">
                        <div>
                            <h3 className="mb-8 text-3xl font-bold leading-tight tracking-tight text-white md:text-4xl text-balance">
                                I take messy problems and hand you clean, working solutions.
                            </h3>

                            <div className="space-y-6 text-lg leading-relaxed text-slate-300">
                                <p>
                                    Writing code is the easy part. The real work is understanding what a business actually needs — then building a solution that feels <b className="font-semibold text-slate-100">effortless to use</b>. I've taken messy, unclear requests from founders and turned them into clean, working web experiences. Not because I know every framework, but because I listen first, think carefully, and solve the problem that's actually in front of me.
                                </p>
                                <p>
                                    You don't need a developer who just follows orders. You need someone who <b className="font-semibold text-slate-100">cares about your results</b> as much as you do. That's me. One year in, many real‑world problems solved — and I'm just getting started. Let's talk about what you need.
                                </p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                            {['JavaScript (done)', 'React (Learning...)', 'Tailwind CSS v4 (done)', 'Next.js (soon...)', 'TypeScript (soon...)', 'UI/UX Design (Almost done)'].map((skill) => (
                                <div key={skill} className="flex items-center gap-2 text-text-secondary">
                                    <BiCheckCircle className="text-lg text-primary" /> {skill}
                                </div>
                            ))}
                        </div>

                        <SocialLinks className="pt-6" />
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};