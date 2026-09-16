import { useState } from 'react';
import styles from './BlogSection.module.scss';
import { Photos } from '../../../../../Photos';

const TABS = [
    { id: 'all', label: 'All' },
    { id: 'quantum', label: 'Quantum Computing' },
    { id: 'ethics', label: 'AI Ethics' },
    { id: 'space', label: 'Space Exploration' },
    { id: 'bio', label: 'Biotechnology' },
    { id: 'energy', label: 'Renewable Energy' },
];

export default function BlogSection() {
    const [activeTab, setActiveTab] = useState('all');

    return (
        <section className={styles.blogSection}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div>
                        <span className={styles.badge}>A Knowledge Treasure Trove</span>
                        <h2 className={styles.title}>Explore FutureTech's In-Depth Blog Posts</h2>
                    </div>
                    <a className={styles.viewAllBtn} href="/blog">
                        View All Blogs
                        <img src={Photos.DiagonalArrow} alt="" />
                    </a>
                </header>

                <div className={styles.tabs}>
                    {TABS.map((tab) => (
                        <button
                            key={tab.id}
                            className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
                            onClick={() => setActiveTab(tab.id)}>
                            {tab.label}
                        </button>
                    ))}
                </div>

                <p className={styles.placeholder}>
                    Выбранная категория: <strong>{activeTab}</strong>
                </p>
            </div>
        </section>
    );
}
