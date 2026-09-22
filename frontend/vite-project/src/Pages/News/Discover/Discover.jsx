import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Discover.module.scss';
import { Photos } from '../../../../../Photos';

const CATEGORIES = ['All', 'Technology', 'Politics', 'Health', 'Environment', 'Sports'];
const ALLOWED_IN_ALL = ['Technology', 'Politics', 'Health', 'Environment', 'Sports'];

export default function Discover() {
    const [articles, setArticles] = useState([]);
    const [category, setCategory] = useState('All');

    useEffect(() => {
        fetch(`http://localhost:5000/articles?category=${category}`)
            .then((res) => res.json())
            .then((data) => {
                const list = Array.isArray(data) ? data : data.articles || [];

                const filtered =
                    category === 'All'
                        ? list.filter((a) => ALLOWED_IN_ALL.includes(a.category))
                        : list;

                setArticles(filtered);
            })
            .catch((err) => {
                console.error(err);
                setArticles([]);
            });
    }, [category]);

    return (
        <section className={styles.discover}>
            <div className={styles.content}>
                <div className={styles.inner}>
                    <div className={styles.textBlock}>
                        <span className={styles.subtitle}>Welcome to Our News Hub</span>
                        <h2 className={styles.title}>Discover the World of Headlines</h2>
                    </div>

                    <NavLink to="/news" className={styles.link}>
                        View All News <img src={Photos.DiagonalArrow} alt="Arrow" />
                    </NavLink>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.filters}>
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            className={category === cat ? styles.active : ''}
                            onClick={() => setCategory(cat)}>
                            {cat}
                        </button>
                    ))}
                </div>

                <div className={styles.articles}>
                    {articles.map((article) => (
                        <article key={article.id} className={styles.card}>
                            <div className={styles.author}>
                                <img
                                    src={Photos.Avatars[article.author_key]}
                                    alt={article.author_name}
                                />
                                <div className={styles.textCard}>
                                    <div className={styles.authorName}>{article.author_name}</div>
                                    <div className={styles.category}>{article.category}</div>
                                </div>
                            </div>

                            <div className={styles.body}>
                                <div className={styles.date}>
                                    {new Date(article.publish_date).toLocaleDateString('en-US', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}
                                </div>

                                <div className={styles.contentBlock}>
                                    <h3 className={styles.cardTitle}>{article.title}</h3>
                                    <p className={styles.description}>{article.description}</p>
                                </div>

                                <div className={styles.reactions}>
                                    <span className={styles.reaction}>
                                        <img src={Photos.like} alt="likes" /> 34.5k
                                    </span>
                                    <span className={styles.reaction}>
                                        <img src={Photos.comment} alt="comments" /> 50
                                    </span>
                                    <span className={styles.reaction}>
                                        <img src={Photos.share} alt="shares" /> 20
                                    </span>
                                </div>
                            </div>

                            <div className={styles.actions}>
                                <div className={styles.actions}>
                                    <NavLink
                                        to={`/news/blog/${article.post_id}`}
                                        className={styles.readMore}>
                                        Read More <img src={Photos.DiagonalArrow} alt="Arrow" />
                                    </NavLink>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
