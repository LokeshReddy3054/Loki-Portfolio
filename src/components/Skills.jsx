import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const Skills = () => {
    const { skills } = portfolioData;

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="skills" className="section" style={{ background: 'var(--bg-card)' }}>
            <div className="container">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={containerVariants}
                >
                    <h2 className="section-title">My Skills</h2>

                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                        gap: '2rem'
                    }}>
                        {skills.map((category, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                style={{
                                    background: 'var(--bg-dark)',
                                    padding: '2rem',
                                    borderRadius: '20px',
                                    border: '1px solid var(--glass-border)',
                                    transition: 'transform 0.3s ease',
                                    cursor: 'default'
                                }}
                                whileHover={{ y: -10 }}
                            >
                                <div style={{
                                    fontSize: '2.5rem',
                                    color: 'var(--primary)',
                                    marginBottom: '1rem',
                                    display: 'flex',
                                    justifyContent: 'center'
                                }}>
                                    <category.icon />
                                </div>
                                <h3 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>{category.category}</h3>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', justifyContent: 'center' }}>
                                    {category.items.map((item, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                background: 'rgba(139, 92, 246, 0.1)',
                                                color: 'var(--primary)',
                                                padding: '0.5rem 1rem',
                                                borderRadius: '20px',
                                                fontSize: '0.9rem',
                                                fontWeight: 500
                                            }}
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;
