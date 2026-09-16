import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Videos.module.scss';
import { Photos } from '../../../../../Photos';

export default function Video() {
    const [video, setVideo] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/video')
            .then((res) => res.json())
            .then((data) => setVideo(Array.isArray(data) ? data : []))
            .catch((err) => {
                console.error(err);
                setVideo([]);
            });
    }, []);

    return (
        <section className={styles.videos}>
            <div className={styles.header}>
                <div className={styles.inner}>
                    <div className={styles.textBlock}>
                        <span className={styles.subtitle}>Featured Videos</span>
                        <h2 className={styles.title}>Visual Insights for the Modern Viewer</h2>
                    </div>

                    <button className={styles.link}>
                        View All <img src={Photos.DiagonalArrow} alt="Arrow" />
                    </button>
                </div>
            </div>

            <div className={styles.container}>
                {video.map((video) => (
                    <article key={video.id} className={styles.card}>
                        <div className={styles.cover}>
                            <img src={Photos.VideoCovers[video.cover_key]} alt={video.title} />
                        </div>

                        <h3 className={styles.cardTitle}>{video.title}</h3>
                        <p className={styles.description}>{video.description}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
