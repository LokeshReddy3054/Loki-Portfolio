import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
    const { name, linkedin } = portfolioData.personalInfo;

    return (
        <footer style={{ background: 'var(--bg-dark)', padding: '3rem 0', borderTop: '1px solid var(--glass-border)' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>{name}</h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                    <a href="https://github.com" target="_blank" rel="noreferrer" className="social-link" style={{ fontSize: '1.5rem', color: 'var(--text-gray)' }}>
                        <FaGithub />
                    </a>
                    <a href={linkedin} target="_blank" rel="noreferrer" className="social-link" style={{ fontSize: '1.5rem', color: 'var(--text-gray)' }}>
                        <FaLinkedin />
                    </a>
                    <a href="#" className="social-link" style={{ fontSize: '1.5rem', color: 'var(--text-gray)' }}>
                        <FaTwitter />
                    </a>
                </div>

                <p style={{ color: 'var(--text-gray)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} {name}. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
