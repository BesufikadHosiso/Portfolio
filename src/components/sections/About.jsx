import { ScrollReveal } from '../ui/ScrollReveal';
import { SocialLinks } from '../common/SocialLinks';
import { BiCheckCircle } from 'react-icons/bi';
import profileImg from '../../assets/besudev.jpg';

export const About = () => {
    return (
        <section id="about" className="py-32 px-6 lg:px-8 scroll-mt-20">
            <div className="max-w-6xl mx-auto">
                                <ScrollReveal>
                                    <h2 className="text-4xl md:text-5xl font-bold mb-20 text-center text-balance">
                                        About <span className="text-primary">Me</span>
                                    </h2>
                                </ScrollReveal>

                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <ScrollReveal delay={100}>
                        <div className="relative">
                            <div className="aspect-4/5 rounded-3xl overflow-hidden border border-white/10 p-2 bg-dark-light shadow-2xl">
                                <img
                                    src={profileImg}
                                    alt="Besufikad Hosiso"
                                    className="w-full h-full object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700 shadow-lg"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-3xl -z-10"></div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={200} className="space-y-12 max-w-xl">
                        <div>
                            <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight mb-8 text-balance">
                                I take messy problems and hand you clean, working solutions.
                            </h3>

                            <div className="space-y-6 text-slate-300 leading-relaxed text-lg">
                                <p>
                                    Writing code is the easy part. The real work is understanding what a business actually needs — then building a solution that feels <b className="text-slate-100 font-semibold">effortless to use</b>. I've taken messy, unclear requests from founders and turned them into clean, working web experiences. Not because I know every framework, but because I listen first, think carefully, and solve the problem that's actually in front of me.
                                </p>
                                <p>
                                    You don't need a developer who just follows orders. You need someone who <b className="text-slate-100 font-semibold">cares about your results</b> as much as you do. That's me. One year in, many real‑world problems solved — and I'm just getting started. Let's talk about what you need.
                                </p>
                            </div>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4">
                                                        {['React / Next.js', 'Tailwind CSS v4', 'Framer Motion', 'Node.js', 'TypeScript', 'UI/UX Design'].map((skill) => (
                                                            <div key={skill} className="flex items-center gap-2 text-text-secondary">
                                                                <BiCheckCircle className="text-primary text-lg" /> {skill}
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