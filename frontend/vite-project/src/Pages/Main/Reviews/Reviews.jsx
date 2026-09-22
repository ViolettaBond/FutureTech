import styles from './Reviews.module.scss';
import { Photos } from '../../../../../Photos';

const REVIEWS = [
    {
        id: 1,
        name: 'Sarah Thompson',
        location: 'San Francisco, USA',
        avatar: Photos.Reviews.sara,
        rating: 5,
        text: 'The ebooks on AI in education have been a game-changer for my research. They provide in-depth insights and case studies that are invaluable for staying updated.',
    },
    {
        id: 2,
        name: 'Raj Patel',
        location: 'Mumbai, India',
        avatar: Photos.Reviews.raj,
        rating: 5,
        text: 'The whitepapers on renewable energy strategies have greatly influenced my work. They offer detailed data and analysis, helping me make informed decisions.',
    },
    {
        id: 3,
        name: 'Emily Adams',
        location: 'London, UK',
        avatar: Photos.Reviews.emily,
        rating: 5,
        text: 'The AI in healthcare reports have been an essential resource for our hospital. They highlight the latest innovations and best practices, improving patient care.',
    },
    {
        id: 4,
        name: 'Alan Jackson',
        location: 'Houston, USA',
        avatar: Photos.Reviews.alan,
        rating: 5,
        text: 'The reports on space mining prospects have fueled my passion for space exploration. They provide a comprehensive view of what lies beyond Earth.',
    },
    {
        id: 5,
        name: 'Jessica Miller',
        location: 'Boston, USA',
        avatar: Photos.Reviews.jessica,
        rating: 5,
        text: "The research papers on genomic breakthroughs have been a goldmine of information. They've shaped the direction of my research in genomics.",
    },
    {
        id: 6,
        name: 'Diego Lopez',
        location: 'Barcelona, Spain',
        avatar: Photos.Reviews.diego,
        rating: 5,
        text: 'The ebooks on renewable energy strategies have given me the insights I needed to pivot our startup toward sustainability.',
    },
];

export default function Reviews() {
    return (
        <section className={styles.reviews}>
            <header className={styles.header}>
                <div className={styles.innerHeader}>
                    <div className={styles.headerText}>
                        <span className={styles.badge}>What Our Readers Say</span>

                        <h2 className={styles.title}>Real Words from Real Readers</h2>
                    </div>

                    <a className={styles.viewAllBtn} href="/testimonials">
                        View All Testimonials
                        <img src={Photos.DiagonalArrow} alt="" />
                    </a>
                </div>
            </header>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {REVIEWS.map((review) => (
                        <article className={styles.card} key={review.id}>
                            <div className={styles.author}>
                                <img src={review.avatar} alt={review.name} />

                                <div className={styles.authorInfo}>
                                    <p className={styles.name}>{review.name}</p>

                                    <p className={styles.location}>{review.location}</p>
                                </div>
                            </div>

                            <div className={styles.rating}>
                                {Array.from({
                                    length: review.rating,
                                }).map((_, index) => (
                                    <span key={index}>★</span>
                                ))}
                            </div>

                            <p className={styles.text}>{review.text}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
