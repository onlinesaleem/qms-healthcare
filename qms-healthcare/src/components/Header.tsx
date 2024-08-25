// src/components/Header.tsx (if you have this)
import Link from 'next/link';
import styles from './Header.module.css';
const Header = () => {
  return (
    <header className={styles.header}>
    <nav className={styles.nav}>
      <Link href="/" className={styles.navLink}>Home</Link>
      <Link href="/about" className={styles.navLink}>About</Link>
      <Link href="/services" className={styles.navLink}>Services</Link>
      <Link href="/contact" className={styles.navLink}>Contact</Link>
    </nav>
  </header>
  );
};

export default Header;
