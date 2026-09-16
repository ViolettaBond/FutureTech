import styles from './About.module.scss';
import { Photos } from '../../../../../Photos';

const CARDS = [
    {
        id: 1,
        title: 'Resource Access',
        text: 'Visitors can access a wide range of resources, including ebooks, whitepapers, reports.',
    },
    {
        id: 2,
        title: 'Community Forum',
        text: 'Join our active community forum to discuss latest tech trends and innovations.',
    },
    {
        id: 3,
        title: 'Weekly Events',
        text: 'Participate in weekly events and webinars with leading industry experts.',
    },
];

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <img className={styles.icon} src={Photos.LogoBig} alt="" />
                    <div>
                        <span className={styles.badge}>Learn, Connect, and Innovate</span>
                        <h2 className={styles.title}>Be Part of the Future Tech Revolution</h2>
                    </div>
                    <p className={styles.description}>
                        Immerse yourself in the world of future technology. Explore our
                        comprehensive resources, connect with fellow tech enthusiasts, and drive
                        innovation in the industry. Join a dynamic community of forward-thinkers.
                    </p>
                </header>

                <div className={styles.grid}>
                    {CARDS.map((card) => (
                        <a className={styles.card} href="/about" key={card.id}>
                            <h3>{card.title}</h3>
                            <p>{card.text}</p>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
