"use client"; // Add this directive to mark this file as a client component

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Header.module.css';
import './variables.css';

const Header = () => {
  const pathname = usePathname(); // Get the current pathname

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Link href="/">
          {/* <img src="/logo.png" alt="QMS Healthcare" className={styles.logoImage} /> */}
        </Link>
      </div>
      <nav className={styles.nav}>
        <Link href="/" className={`${styles.navLink} ${pathname === '/' ? styles.active : ''}`}>
          Home
        </Link>
        <Link href="/about" className={`${styles.navLink} ${pathname === '/about' ? styles.active : ''}`}>
          About
        </Link>
        <Link href="/services" className={`${styles.navLink} ${pathname === '/services' ? styles.active : ''}`}>
          Products & Services
        </Link>
        <Link href="/contact" className={`${styles.navLink} ${pathname === '/contact' ? styles.active : ''}`}>
          Contact
        </Link>
      </nav>
    </header>
  );
};

export default Header;
