import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import { Photos } from '../../../../Photos';

export default function Header() {
    const [showBanner, setShowBanner] = useState(true);

    const navItems = [
        { to: '/', label: 'Home', end: true },
        { to: '/news', label: 'News' },
        { to: '/podcasts', label: 'Podcasts' },
        { to: '/resources', label: 'Resources' },
    ];

    return (
        <header className={styles.header}>
            {showBanner && (
                <div className={styles.banner}>
                    <div className={styles.bannerContent}>
                        <p className={styles.bannerText}>
                            Subscribe to our Newsletter For New latest Blogs and Resources
                        </p>

                        <img src={Photos.DiagonalArrow} alt="" />
                    </div>

                    <button className={styles.closeBtn} onClick={() => setShowBanner(false)}>
                        ✕
                    </button>
                </div>
            )}

            <div className={styles.navbar}>
                <div className={styles.container}>
                    <div className={styles.logo}>
                        <img src={Photos.Logo} alt="" />
                    </div>

                    <nav className={styles.nav}>
                        {navItems.map((item) => (
                            <NavLink
                                key={item.to}
                                to={item.to}
                                end={item.end}
                                className={({ isActive }) =>
                                    isActive ? `${styles.navLink} ${styles.active}` : styles.navLink
                                }>
                                {item.label}
                            </NavLink>
                        ))}
                    </nav>

                    <button className={styles.contactBtn}><a href="/contact">Contact Us</a></button>
                </div>
            </div>
        </header>
    );
}
