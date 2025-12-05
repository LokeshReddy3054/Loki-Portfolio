import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Skills', href: '#skills' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 100,
            transition: 'all 0.3s ease',
            background: scrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
            backdropFilter: scrolled ? 'blur(10px)' : 'none',
            borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
            padding: scrolled ? '1rem 0' : '1.5rem 0'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <a href="#" style={{
                    fontSize: '1.5rem',
                    fontWeight: 700,
                    fontFamily: "'Noto Serif JP', serif",
                    letterSpacing: '2px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                }}>
                    <span style={{ color: 'var(--primary)' }}>●</span> LOKESH
                </a>

                {/* Desktop Menu */}
                <ul style={{ display: 'none', gap: '2.5rem', alignItems: 'center' }} className="desktop-menu">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                style={{
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    textTransform: 'uppercase',
                                    letterSpacing: '1px',
                                    position: 'relative',
                                    opacity: 0.8
                                }}
                                className="nav-link"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)} style={{ fontSize: '1.5rem', cursor: 'pointer', color: 'var(--text-light)' }}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        style={{
                            background: 'var(--bg-dark)',
                            borderBottom: '1px solid var(--glass-border)',
                            overflow: 'hidden'
                        }}
                    >
                        <ul style={{ display: 'flex', flexDirection: 'column', padding: '2rem' }}>
                            {navLinks.map((link) => (
                                <li key={link.name} style={{ marginBottom: '1.5rem', textAlign: 'center' }}>
                                    <a
                                        href={link.href}
                                        onClick={() => setIsOpen(false)}
                                        style={{ fontSize: '1.2rem', fontFamily: "'Noto Serif JP', serif" }}
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (min-width: 768px) {
                    .desktop-menu { display: flex !important; }
                    .mobile-menu-btn { display: none !important; }
                }
                .nav-link::after {
                    content: '';
                    position: absolute;
                    bottom: -5px;
                    left: 0;
                    width: 0;
                    height: 1px;
                    background: var(--primary);
                    transition: width 0.3s ease;
                }
                .nav-link:hover::after {
                    width: 100%;
                }
                .nav-link:hover {
                    opacity: 1 !important;
                    color: var(--primary);
                }
            `}</style>
        </nav>
    );
};

export default Navbar;
