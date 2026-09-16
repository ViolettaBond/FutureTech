import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>Today's Headlines: Stay</h1>

                <div className={styles.textHero}>
                    <p className={styles.title}>Informed</p>

                    <p className={styles.description}>
                        Explore the latest news from around the world. We bring you up-to-the-minute
                        updates on the most significant events, trends, and stories. Discover the
                        world through our news coverage.
                    </p>
                </div>
            </div>
        </section>
    );
}
