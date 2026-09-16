import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import { Photos } from '../../../../Photos';

const FEATURES = [
    {
        title: 'Resource Access',
        text: 'Visitors can access a wide range of resources, including ebooks, whitepapers, reports.',
    },
    {
        title: 'Community Forum',
        text: 'Join our active community forum to discuss industry trends, share insights, and collaborate with peers.',
    },
    {
        title: 'Tech Events',
        text: 'Stay updated on upcoming tech events, webinars, and conferences to enhance your knowledge.',
    },
];

const COLUMNS = [
    {
        title: 'Home',
        links: [
            { label: 'Features', to: '/features' },
            { label: 'Blogs', to: '/blogs' },
            { label: 'Resources', to: '/resources', badge: 'New' },
            { label: 'Testimonials', to: '/testimonials' },
            { label: 'Contact Us', to: '/contact' },
            { label: 'Newsletter', to: '/newsletter' },
        ],
    },
    {
        title: 'News',
        links: [
            { label: 'Trending Stories', to: '/news/trending' },
            { label: 'Featured Videos', to: '/news/videos' },
            { label: 'Technology', to: '/news/technology' },
            { label: 'Health', to: '/news/health' },
            { label: 'Politics', to: '/news/politics' },
            { label: 'Environment', to: '/news/environment' },
        ],
    },
    {
        title: 'Blogs',
        links: [
            { label: 'Quantum Computing', to: '/blogs/quantum' },
            { label: 'AI Ethics', to: '/blogs/ai-ethics' },
            { label: 'Space Exploration', to: '/blogs/space' },
            { label: 'Biotechnology', to: '/blogs/biotech', badge: 'New' },
            { label: 'Renewable Energy', to: '/blogs/energy' },
            { label: 'Biohacking', to: '/blogs/biohacking' },
        ],
    },
    {
        title: 'Podcasts',
        links: [
            { label: 'AI Revolution', to: '/podcasts/ai-revolution' },
            { label: 'AI Revolution', to: '/podcasts/ai-revolution-2', badge: 'New' },
            { label: 'TechTalk AI', to: '/podcasts/techtalk' },
            { label: 'AI Conversations', to: '/podcasts/conversations' },
        ],
    },
];

const RESOURCES = [
    { label: 'Whitepapers', to: '/resources/whitepapers' },
    { label: 'Ebooks', to: '/resources/ebooks' },
    { label: 'Reports', to: '/resources/reports' },
    { label: 'Research Papers', to: '/resources/papers' },
];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.hero}>
                <div className={styles.heroInner}>
                    <div className={styles.logoBlock}>
                        <img src={Photos.LogoBig} alt="Logo" />

                        <div className={styles.heroText}>
                            <span className={styles.heroSubtitle}>
                                Learn, Connect, and Innovate
                            </span>

                            <h2 className={styles.heroTitle}>
                                Be Part of the Future Tech Revolution
                            </h2>

                            <p className={styles.heroDescription}>
                                Immerse yourself in the world of future technology. Explore our
                                comprehensive resources, connect with fellow tech enthusiasts, and
                                drive innovation in the industry. Join a dynamic community of
                                forward-thinkers.
                            </p>
                        </div>
                    </div>

                    <div className={styles.features}>
                        <div className={styles.featuresInner}>
                            {FEATURES.map((f) => (
                                <NavLink key={f.title} to={f.to} className={styles.featureCard}>
                                    <div className={styles.featureTop}>
                                        <h3 className={styles.featureTitle}>{f.title}</h3>
                                        <span className={styles.featureArrow}>
                                            <img src={Photos.diagonalArrowBlack} alt="" />
                                        </span>
                                    </div>

                                    <p className={styles.featureText}>{f.text}</p>
                                </NavLink>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.columns}>
                    {COLUMNS.map((col) => (
                        <div key={col.title} className={styles.column}>
                            <h4 className={styles.colTitle}>{col.title}</h4>
                            <ul className={styles.list}>
                                {col.links.map((link, i) => (
                                    <li key={i} className={styles.item}>
                                        <NavLink to={link.to} className={styles.link}>
                                            {link.label}
                                        </NavLink>
                                        {link.badge && (
                                            <span className={styles.badge}>{link.badge}</span>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}

                    <div className={styles.column}>
                        <h4 className={styles.colTitle}>Resources</h4>
                        <ul className={styles.list}>
                            {RESOURCES.map((r) => (
                                <li key={r.label} className={styles.item}>
                                    <NavLink to={r.to} className={styles.resourceBtn}>
                                        {r.label}
                                        <img src={Photos.DiagonalArrow} alt="" />
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <div className={styles.legal}>
                        <p to="/terms" className={styles.legalLink}>
                            Terms & Conditions
                        </p>

                        <div className={styles.division}></div>

                        <p to="/privacy" className={styles.legalLink}>
                            Privacy Policy
                        </p>
                    </div>

                    <div className={styles.socials}>
                        <a href="#" aria-label="X">
                            <img src={Photos.Social.Twitter} alt="X" />
                        </a>
                        <a href="#" aria-label="Google">
                            <img src={Photos.Social.Google} alt="Google" />
                        </a>
                        <a href="#" aria-label="LinkedIn">
                            <img src={Photos.Social.LinkedIn} alt="LinkedIn" />
                        </a>
                    </div>

                    <p className={styles.copy}>© 2024 Future Tech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
