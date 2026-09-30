import { ScrollReveal } from '../ui/ScrollReveal';
import { Button } from '../common/Button';
import { BiCodeAlt, BiEnvelope, BiChevronDown } from 'react-icons/bi';

export const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="min-h-dvh flex items-center justify-center px-4 relative overflow-hidden scroll-mt-20">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse"></div>
            <div className="max-w-6xl mx-auto text-center bg-dark-light/20 backdrop-blur-lg border border-white/10 rounded-2xl p-8">
                <ScrollReveal>
                    <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 bg-dark-light/30 backdrop-blur-md rounded-full border border-white/10">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        <span className="text-text-secondary text-xs md:text-sm font-medium tracking-widest uppercase">Available for new projects</span>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={150}>
                    <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold mb-6 leading-tight tracking-tighter text-primary">
                       I Build Custom, Full-Stack Products That Increase Revenue And Scale With Your Business.
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <p className="text-lg md:text-xl lg:text-2xl mb-10 text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        Hi, I'm Besufikad Hosiso, a full stack developer who turns messy, complex ideas into complete, working products — from the database to the interface — using clean code and modern design, so your customers stay longer, buy more, and your business runs on something solid, not held together with duct tape.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                    <div className="flex flex-row flex-wrap gap-4 justify-center mb-12">
                        <Button icon={BiCodeAlt} onClick={() => scrollToSection('projects')}>
                            View Selected Works
                        </Button>
                        <Button icon={BiEnvelope} variant="outline" onClick={() => scrollToSection('contact')}>
                            Let's Talk
                        </Button>
                    </div>
                </ScrollReveal>

                <ScrollReveal delay={400}>
                    <div className="flex justify-center">
                        <button
                            onClick={() => scrollToSection('about')}
                            className="animate-bounce text-primary hover:text-primary-light transition-colors"
                        >
                            <BiChevronDown className="text-3xl" />
                        </button>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};