import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';

const Hero = () => {
    const { name, role, summary } = resumeData.personalInfo;

    return (
        <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', paddingTop: '80px', overflow: 'hidden' }}>

            {/* Red Sun Background */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '60vh',
                    height: '60vh',
                    background: 'var(--primary)',
                    borderRadius: '50%',
                    opacity: 0.8,
                    zIndex: -1,
                    boxShadow: '0 0 100px rgba(188, 0, 45, 0.3)'
                }}
            ></motion.div>

            {/* Falling Petals (Simplified CSS Animation) */}
            <div className="petals-container" style={{ position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, pointerEvents: 'none', zIndex: -1 }}>
                {[...Array(10)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ y: -100, x: Math.random() * 100, opacity: 0 }}
                        animate={{
                            y: window.innerHeight + 100,
                            x: Math.random() * 200 - 100,
                            rotate: 360,
                            opacity: [0, 1, 0]
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 5,
                            ease: "linear"
                        }}
                        style={{
                            position: 'absolute',
                            left: `${Math.random() * 100}%`,
                            width: '15px',
                            height: '15px',
                            background: 'var(--accent)',
                            borderRadius: '100% 0 100% 0',
                            opacity: 0.6
                        }}
                    />
                ))}
            </div>

            <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', zIndex: 1 }}>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >

                    <h1 style={{ fontSize: '5rem', marginBottom: '1rem', lineHeight: 1.1, fontFamily: "'Noto Serif JP', serif", fontWeight: 700 }}>
                        {name}
                    </h1>
                    <div style={{ width: '100px', height: '2px', background: 'var(--text-light)', margin: '1.5rem auto' }}></div>
                    <h3 style={{ fontSize: '1.8rem', color: 'var(--text-gray)', marginBottom: '2rem', fontWeight: 300 }}>
                        {role}
                    </h3>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-gray)', marginBottom: '3rem', maxWidth: '600px', lineHeight: 2 }}>
                        {summary.split('.')[0]}.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                        <a href="#projects" className="btn">View Work</a>
                        <a href="#contact" className="btn btn-outline">Contact</a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
