import styles from './Reviews.module.scss';
import { Photos } from '../../../../../Photos';

const REVIEWS = [
    {
        id: 1,
        name: 'Sarah Tompson',
        location: 'St. Petersburg, Russia',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque ullam maxime veniam cum eveniet!',
    },
    {
        id: 2,
        name: 'Sarah Tompson',
        location: 'St. Petersburg, Russia',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque ullam maxime veniam cum eveniet!',
    },
    {
        id: 3,
        name: 'Sarah Tompson',
        location: 'St. Petersburg, Russia',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque ullam maxime veniam cum eveniet!',
    },
    {
        id: 4,
        name: 'Sarah Tompson',
        location: 'St. Petersburg, Russia',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque ullam maxime veniam cum eveniet!',
    },
    {
        id: 5,
        name: 'Sarah Tompson',
        location: 'St. Petersburg, Russia',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque ullam maxime veniam cum eveniet!',
    },
    {
        id: 6,
        name: 'Sarah Tompson',
        location: 'St. Petersburg, Russia',
        rating: 5,
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque ullam maxime veniam cum eveniet!',
    },
];

export default function Reviews() {
    return (
        <section className={styles.reviews}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div>
                        <span className={styles.badge}>What Our Readers Say</span>
                        <h2 className={styles.title}>Real Words From Real Readers</h2>
                    </div>
                    <a className={styles.viewAllBtn} href="/testimonials">
                        View All Testimonials
                        <img src={Photos.DiagonalArrow} alt="" />
                    </a>
                </header>

                <div className={styles.grid}>
                    {REVIEWS.map((review) => (
                        <div className={styles.card} key={review.id}>
                            <div className={styles.author}>
                                <img src={Photos.Avatars.sarah} alt={review.name} />
                                <div>
                                    <p className={styles.name}>{review.name}</p>
                                    <p className={styles.location}>{review.location}</p>
                                </div>
                            </div>

                            <div className={styles.rating}>
                                {Array.from({ length: review.rating }).map((_, i) => (
                                    <span key={i}>★</span>
                                ))}
                            </div>

                            <p className={styles.text}>{review.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
