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
        <nav className={`nav-container ${scrolled ? 'nav-scrolled' : 'nav-transparent'}`}>
            <div className="container flex-between">
                <a href="#" className="nav-logo">
                    <span style={{ color: 'var(--primary)' }}>●</span> LOKESH
                </a>

                {/* Desktop Menu */}
                <ul className="desktop-menu">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a href={link.href} className="nav-link">
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <div className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
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
        </nav>
    );
};

export default Navbar;
