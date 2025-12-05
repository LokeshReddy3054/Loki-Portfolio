import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

const About = () => {
    const { summary } = resumeData.personalInfo;
    const { experience } = resumeData;

    return (
        <section id="about" className="section" style={{ background: 'var(--bg-dark)' }}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">About Me</h2>

                    <div style={{ maxWidth: '800px', margin: '0 auto 4rem', textAlign: 'center', fontSize: '1.1rem', color: 'var(--text-gray)' }}>
                        <p>{summary}</p>
                    </div>

                    <h3 style={{ textAlign: 'center', marginBottom: '2rem', fontSize: '2rem' }}>Experience</h3>

                    <div className="timeline" style={{ maxWidth: '800px', margin: '0 auto' }}>
                        {experience.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                viewport={{ once: true }}
                                style={{
                                    background: 'var(--bg-card)',
                                    padding: '2rem',
                                    borderRadius: '20px',
                                    marginBottom: '2rem',
                                    border: '1px solid var(--glass-border)',
                                    position: 'relative'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '1rem' }}>
                                    <div>
                                        <h4 style={{ fontSize: '1.5rem', color: 'var(--primary)' }}>{exp.role}</h4>
                                        <h5 style={{ fontSize: '1.2rem' }}>{exp.company}</h5>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-gray)' }}>
                                            <FaCalendarAlt /> {exp.period}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-gray)', justifyContent: 'flex-end' }}>
                                            <FaMapMarkerAlt /> {exp.location}
                                        </div>
                                    </div>
                                </div>

                                <p style={{ marginBottom: '1rem', color: 'var(--text-gray)' }}>{exp.description}</p>

                                <ul style={{ paddingLeft: '1.5rem' }}>
                                    {exp.achievements.map((item, i) => (
                                        <li key={i} style={{ marginBottom: '0.5rem', listStyleType: 'disc', color: 'var(--text-light)' }}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
