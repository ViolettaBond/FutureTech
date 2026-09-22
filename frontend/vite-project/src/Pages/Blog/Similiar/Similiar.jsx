import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Similiar.module.scss';
import { Photos } from '../../../../../Photos';

export default function Similiar() {
    const [featured, setFeatured] = useState(null);
    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/articles?category=All`)
            .then((res) => res.json())
            .then((data) => {
                const list = Array.isArray(data) ? data : data.articles || [];

                const isFeatured = (a) =>
                    a.is_featured === true ||
                    a.is_featured === 'true' ||
                    a.is_featured === 1 ||
                    a.is_featured === '1';

                const featuredArticle = list.find(isFeatured) || null;
                setFeatured(featuredArticle);

                const usedKeys = new Set();
                const usedTitles = new Set();

                // Защищаемся от featured, если он вдруг попадёт в bottom
                if (featuredArticle) {
                    if (featuredArticle.image_key) usedKeys.add(featuredArticle.image_key);
                    if (featuredArticle.title) usedTitles.add(featuredArticle.title);
                }

                const bottomCards = list
                    .filter((a) => a.image_key && !isFeatured(a))
                    .filter((a) => {
                        if (usedKeys.has(a.image_key)) return false;
                        if (usedTitles.has(a.title)) return false;
                        usedKeys.add(a.image_key);
                        usedTitles.add(a.title);
                        return true;
                    })
                    .slice(0, 3);

                setCards(bottomCards);
            })
            .catch((err) => {
                console.error(err);
                setFeatured(null);
                setCards([]);
            });
    }, []);

    return (
        <section className={styles.similiar}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Similar News</h2>

                    <NavLink className={styles.link}>
                        View All News <img src={Photos.DiagonalArrow} alt="" />
                    </NavLink>
                </div>

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
                                    <span className={styles.statItem}>
                                        <img src={Photos.like} alt="" /> 2.2k
                                    </span>
                                    <span className={styles.statItem}>
                                        <img src={Photos.share} alt="" /> 60
                                    </span>
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
