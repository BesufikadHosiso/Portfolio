import { useState } from 'react';
import { ScrollReveal } from '../ui/ScrollReveal';
import { Button } from '../common/Button';
import { BiSend, BiCheckCircle } from 'react-icons/bi';

export const Contact = () => {
    const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'submitted'
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Your name is required';
        if (!formData.email.trim()) {
            newErrors.email = 'Email address is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!formData.message.trim()) newErrors.message = 'A message is required';
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear error as user types
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        setStatus('submitting');
        try {
            const response = await fetch("https://formsubmit.co/ajax/besufikad@example.com", {
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('submitted');
            } else {
                setStatus('idle');
                alert("Something went wrong. Please try again later.");
            }
        } catch (err) {
            setStatus('idle');
            alert("Failed to send message. Check your connection.");
        }
    };

    return (
        <section id="contact" className="py-32 px-6 lg:px-8 bg-dark-light/10 scroll-mt-20">
            <div className="max-w-4xl mx-auto">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
                        Contact <span className="text-primary">Me</span>
                    </h2>
                    <p className="text-center text-text-secondary mb-16 max-w-lg mx-auto">Your Competitors are winning because their strategy is better. Tell me your goals below and I'll build the technical edge you need to leave them behind. Shall we begin?</p>
                </ScrollReveal>

                <ScrollReveal delay={100}>
                    <div className="bg-dark/50 backdrop-blur-xl p-8 md:p-16 rounded-4xl border border-white/10 shadow-2xl min-h-[400px] flex flex-col justify-center">
                        {status === 'submitted' ? (
                            <div className="text-center space-y-6 py-12 animate-in fade-in zoom-in duration-500">
                                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <BiCheckCircle className="text-5xl text-primary" />
                                </div>
                                <h3 className="text-3xl font-bold text-white">Your message is sent!</h3>
                                <p className="text-text-secondary text-lg max-w-md mx-auto">I will return it soon in your mail. Thank you for reaching out!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} noValidate className="space-y-8">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-sm font-semibold text-text-secondary ml-1">Your Name</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className={`w-full px-6 py-4 bg-white/5 border ${errors.name ? 'border-red-500/50' : 'border-white/10'} rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all duration-500 placeholder:text-white/20`}
                                            placeholder="John Doe"
                                        />
                                        {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
                                    </div>

                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-text-secondary ml-1">Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className={`w-full px-6 py-4 bg-white/5 border ${errors.email ? 'border-red-500/50' : 'border-white/10'} rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all duration-500 placeholder:text-white/20`}
                                            placeholder="john@example.com"
                                        />
                                        {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-semibold text-text-secondary ml-1">Your Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows="5"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={`w-full px-6 py-4 bg-white/5 border ${errors.message ? 'border-red-500/50' : 'border-white/10'} rounded-2xl focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-primary transition-all duration-500 placeholder:text-white/20`}
                                        placeholder="Tell me what you need..."
                                    ></textarea>
                                    {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
                                </div>

                                <Button type="submit" icon={BiSend} className="w-full" disabled={status === 'submitting'}>
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        )}
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};