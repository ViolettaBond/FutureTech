import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './GlobalClimate.module.scss';
import { Photos } from '../../../../../Photos';

export default function GlobalClimate() {
    const [featured, setFeatured] = useState(null);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/articles?category=All`)
            .then((res) => res.json())
            .then((data) => {
                const list = Array.isArray(data) ? data : data.articles || [];

                const featuredArticle = list.find((a) => a.is_featured);
                setFeatured(featuredArticle || null);

                const bottomCards = list.filter((a) => a.image_key && !a.is_featured);
                setCards(bottomCards);
            })
            .catch((err) => {
                console.error(err);
                setFeatured(null);
                setCards([]);
            });
    }, []);

    return (
        <section className={styles.globalClimate}>
            <div className={styles.container}>
                {featured && (
                    <div className={styles.topGlobal}>
                        <img
                            className={styles.imageTop}
                            src={Photos.Covers[featured.image_key]}
                            alt={featured.title}
                        />

                        <div className={styles.rightGlobal}>
                            <h2 className={styles.title}>{featured.title}</h2>

                            <p className={styles.summary}>{featured.description}</p>

                            <div className={styles.publication}>
                                <ul className={styles.infoPubl}>
                                    Category
                                    <li className={styles.info}>{featured.category}</li>
                                </ul>
                                <ul className={styles.infoPubl}>
                                    Publication Date
                                    <li className={styles.info}>
                                        {new Date(featured.publish_date).toLocaleDateString(
                                            'en-US',
                                            {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric',
                                            },
                                        )}
                                    </li>
                                </ul>
                                <ul className={styles.infoPubl}>
                                    Author
                                    <li className={styles.info}>{featured.author_name}</li>
                                </ul>
                            </div>

                            <div className={styles.actions}>
                                <div className={styles.reactions}>
                                    <span className={styles.reaction}>♡ 14k</span>
                                    <span className={styles.reaction}>✈︎ 204</span>
                                </div>

                                <NavLink
                                    to={`/news/blog/${featured.post_id}`}
                                    className={styles.btnMore}>
                                    Read More
                                </NavLink>
                            </div>
                        </div>
                    </div>
                )}

                <div className={styles.bottomGlobal}>
                    {cards.map((article) => (
                        <div key={article.id} className={styles.inner}>
                            <img
                                className={styles.imageBottom}
                                src={Photos.Covers[article.image_key]}
                                alt={article.title}
                            />

                            <div className={styles.textBottom}>
                                <p className={styles.subtitle}>{article.title}</p>
                                <p className={styles.category}>{article.category}</p>
                            </div>

                            <div className={styles.statsBlock}>
                                <div className={styles.stats}>
                                    <span className={styles.statItem}>♡ 2.2k</span>
                                    <span className={styles.statItem}>✈︎ 60</span>
                                </div>

                                <NavLink
                                    to={`/news/blog/${article.post_id}`}
                                    className={styles.btnReadMore}>
                                    Read More <img src={Photos.DiagonalArrow} alt="" />
                                </NavLink>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
