import styles from './Hero.module.scss';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.title}>Unlock a World of </h1>

                <div className={styles.text}>
                    <p className={styles.title}>Knowledge</p>

                    <p className={styles.description}>
                        Dive deep into the AI universe with our collection of insightful podcasts.
                        Explore the latest trends, breakthroughs, and discussions on artificial
                        intelligence. Whether you're an enthusiast or a professional, our AI
                        podcasts offer a gateway to knowledge and innovation.
                    </p>
                </div>
            </div>
        </section>
    );
}
