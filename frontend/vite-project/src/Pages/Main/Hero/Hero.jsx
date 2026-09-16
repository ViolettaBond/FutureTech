import styles from './Hero.module.scss';
import { Photos } from '../../../../../Photos';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.body}>
                    <p className={styles.subtitle}>Your Journey to Tomorrow Begins Here</p>
                    <h1 className={styles.title}>
                        Explore the Frontiers of Artificial Intelligence
                    </h1>
                    <p className={styles.description}>
                        Welcome to the epicenter of AI innovation. FutureTech AI News is your
                        passport to a world where machines think, learn, and reshape the future.
                        Join us on this visionary expedition into the heart of AI.
                    </p>
                </div>

                <div className={styles.metrics}>
                    <div className={styles.metric}>
                        <span className={styles.metricLabel}>Resources available</span>
                        <strong className={styles.metricValue}>
                            300<span className={styles.metricSign}>+</span>
                        </strong>
                    </div>
                    <div className={styles.metric}>
                        <span className={styles.metricLabel}>Total Downloads</span>
                        <strong className={styles.metricValue}>
                            12k<span className={styles.metricSign}>+</span>
                        </strong>
                    </div>
                    <div className={styles.metric}>
                        <span className={styles.metricLabel}>Active Users</span>
                        <strong className={styles.metricValue}>
                            10k<span className={styles.metricSign}>+</span>
                        </strong>
                    </div>
                </div>

                <div className={styles.preview}>
                    <div className={styles.team}>
                        <img src={Photos.Avatars.john} alt="" />
                        <img src={Photos.Avatars.sarah} alt="" />
                        <img src={Photos.Avatars.astronomer} alt="" />
                        <img src={Photos.Avatars.john} alt="" />
                    </div>
                    <div className={styles.previewBody}>
                        <p className={styles.previewTitle}>Explore 1000+ resources</p>
                        <p className={styles.previewSubtitle}>
                            Over 1,000 articles on emerging tech trends and breakthroughs.
                        </p>
                    </div>
                    <a className={styles.previewBtn} href="/resources">
                        Explore Resources
                        <img src={Photos.DiagonalArrow} alt="" />
                    </a>
                </div>

                <div className={styles.advantages}>
                    <div className={styles.advantageCard}>
                        <img src={Photos.iconQuantum} alt="" />
                        <h3>Latest News Updates</h3>
                        <p className={styles.advantageSubtitle}>Stay Current</p>
                        <p className={styles.advantageDetails}>
                            Over 1,000 articles published monthly
                        </p>
                    </div>
                    <div className={styles.advantageCard}>
                        <img src={Photos.iconSpace} alt="" />
                        <h3>Expert Contributions</h3>
                        <p className={styles.advantageSubtitle}>Trusted Insights</p>
                        <p className={styles.advantageDetails}>
                            50+ renowned AI experts on our team
                        </p>
                    </div>
                    <div className={styles.advantageCard}>
                        <img src={Photos.iconQuantum} alt="" />
                        <h3>Global Readership</h3>
                        <p className={styles.advantageSubtitle}>Worldwide Impact</p>
                        <p className={styles.advantageDetails}>2 million monthly readers</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
