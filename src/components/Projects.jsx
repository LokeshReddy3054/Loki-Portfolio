import { motion } from 'framer-motion';
import { resumeData } from '../data/resume';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
    const { projects } = resumeData;

    return (
        <section id="projects" className="section" style={{ background: 'var(--bg-dark)' }}>
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Selected Works
                </motion.h2>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '3rem'
                }}>
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            style={{
                                background: 'var(--bg-card)',
                                border: '1px solid var(--glass-border)',
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative'
                            }}
                            whileHover={{ y: -5, boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}
                        >
                            <div style={{
                                height: '220px',
                                background: project.image ? `url(${project.image}) center/cover no-repeat` : 'linear-gradient(135deg, var(--bg-dark), var(--bg-card))',
                                position: 'relative',
                                filter: 'grayscale(20%)',
                                transition: 'all 0.4s ease',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}
                                className="project-img"
                            >
                                {!project.image && (
                                    <span style={{ fontSize: '3rem', opacity: 0.2, color: 'var(--text-light)', fontFamily: "'Noto Serif JP', serif" }}>
                                        {project.title[0]}
                                    </span>
                                )}
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    background: 'rgba(0,0,0,0.3)'
                                }}></div>
                            </div>

                            <div style={{ padding: '2rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                                <h3 style={{ marginBottom: '0.8rem', fontSize: '1.5rem', fontFamily: "'Noto Serif JP', serif" }}>{project.title}</h3>
                                <p style={{ color: 'var(--text-gray)', marginBottom: '1.5rem', flex: 1, fontSize: '0.95rem' }}>{project.description}</p>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                                    {project.tech.map((tech, i) => (
                                        <span
                                            key={i}
                                            style={{
                                                fontSize: '0.75rem',
                                                padding: '0.2rem 0.8rem',
                                                background: 'transparent',
                                                color: 'var(--text-light)',
                                                border: '1px solid var(--text-gray)',
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
                                            }}
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <style>{`
                .project-img:hover {
                    filter: grayscale(0%) !important;
                }
            `}</style>
        </section>
    );
};

export default Projects;
