import { useEffect, useState } from 'react';
import styles from './BlogSection.module.scss';
import { Photos } from '../../../../../Photos';

const TABS = [
    { id: 'All', label: 'All' },
    { id: 'Quantum Computing', label: 'Quantum Computing' },
    { id: 'AI Ethics', label: 'AI Ethics' },
    { id: 'Space Exploration', label: 'Space Exploration' },
    { id: 'Biotechnology', label: 'Biotechnology' },
    { id: 'Renewable Energy', label: 'Renewable Energy' },
];

const AVATARS = {
    john: Photos.Avatar.avatar4,
    sarah: Photos.Avatar.avatar3,
    astronomer: Photos.Avatar.avatar1,
};

export default function BlogSection() {
    const [activeTab, setActiveTab] = useState('All');
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(false);

    const CATEGORIES = [
        'Quantum Computing',
        'AI Ethics',
        'Space Exploration',
        'Biotechnology',
        'Renewable Energy',
    ];

    useEffect(() => {
        const fetchArticles = async () => {
            setLoading(true);
            try {
                const res = await fetch('http://localhost:5000/articles');
                const data = await res.json();

                const filtered =
                    activeTab === 'All'
                        ? data.filter((a) => CATEGORIES.includes(a.category))
                        : data.filter((a) => a.category === activeTab);

                setArticles(filtered);
            } catch (err) {
                console.error(err);
                setArticles([]);
            } finally {
                setLoading(false);
            }
        };

        fetchArticles();
    }, [activeTab]);

    return (
        <section className={styles.blogSection}>
            <header className={styles.header}>
                <div className={styles.innerHeader}>
                    <div className={styles.headerLeft}>
                        <span className={styles.eyebrows}>A Knowledge Treasure Trove</span>
                        <h2 className={styles.title}>Explore FutureTech's In-Depth Blog Posts</h2>
                    </div>

                    <a className={styles.viewAllBtn} href="/blog">
                        View All Blogs
                        <img src={Photos.DiagonalArrow} alt="" />
                    </a>
                </div>
            </header>

            <div className={styles.container}>
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

                <div className={styles.list}>
                    {!loading &&
                        articles.map((article) => {
                            const avatar = AVATARS[article.author_key];

                            return (
                                <article className={styles.card} key={article.id}>
                                    <div className={styles.innerCard}>
                                        <div className={styles.author}>
                                            <div className={styles.avatar}>
                                                {avatar ? (
                                                    <img src={avatar} alt={article.author_name} />
                                                ) : (
                                                    <span>{article.author_name?.[0] ?? 'A'}</span>
                                                )}
                                            </div>
                                            <div className={styles.authorInfo}>
                                                <strong>{article.author_name}</strong>
                                                <span>{article.category}</span>
                                            </div>
                                        </div>

                                        <div className={styles.content}>
                                            <span className={styles.date}>
                                                {new Date(article.publish_date).toLocaleDateString(
                                                    'en-US',
                                                    {
                                                        year: 'numeric',
                                                        month: 'long',
                                                        day: 'numeric',
                                                    },
                                                )}
                                            </span>
                                            <h3 className={styles.cardTitle}>{article.title}</h3>
                                            <p className={styles.cardText}>{article.description}</p>

                                            <div className={styles.stats}>
                                                <span className={styles.stat}>
                                                    <img src={Photos.like} alt="" />
                                                    24.5k
                                                </span>
                                                <span className={styles.stat}>
                                                    <img src={Photos.comment} alt="" />
                                                    50
                                                </span>
                                                <span className={styles.stat}>
                                                    <img src={Photos.share} alt="" />
                                                    20
                                                </span>
                                            </div>
                                        </div>

                                        <a className={styles.viewBtn} href={`/blog/${article.id}`}>
                                            View Blog
                                            <img src={Photos.DiagonalArrow} alt="" />
                                        </a>
                                    </div>
                                </article>
                            );
                        })}
                </div>
            </div>
        </section>
    );
}
