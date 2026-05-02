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
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-none tracking-tighter text-primary">
                       I Build Custom, High-Speed Sites That Increase Revenue And Streamline.
                    </h1>
                </ScrollReveal>

                <ScrollReveal delay={200}>
                    <p className="text-lg md:text-xl lg:text-2xl mb-10 text-text-secondary max-w-3xl mx-auto leading-relaxed">
                        Hi, I'm Besufikad Hosiso, a frontend developer who turns messy, complex ideas into smooth, user‑friendly web experiences using clean code and modern design — so your customers stay longer, buy more, and your business grows without the headache.
                    </p>
                </ScrollReveal>

                <ScrollReveal delay={300}>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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