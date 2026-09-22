import styles from './Hero.module.scss';
import { Photos } from '../../../../../Photos';

export default function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.heroMain}>
                <div className={styles.heroContent}>
                    <div className={styles.contentText}>
                        <p className={styles.eyebrow}>Your Journey to Tomorrow Begins Here</p>

                        <h1 className={styles.title}>
                            Explore the Frontiers of Artificial Intelligence
                        </h1>

                        <p className={styles.description}>
                            Welcome to the epicenter of AI innovation. FutureTech AI News is your
                            passport to a world where machines think, learn, and reshape the future.
                            Join us on this visionary expedition into the heart of AI.
                        </p>
                    </div>

                    <div className={styles.contentStatistic}>
                        <div className={styles.stat}>
                            <strong>
                                <span>300</span>+
                            </strong>
                            <span>Resources available</span>
                        </div>

                        <div className={styles.stat}>
                            <strong>
                                <span>12k</span>+
                            </strong>
                            <span>Total Downloads</span>
                        </div>

                        <div className={styles.stat}>
                            <strong>
                                <span>10k</span>+
                            </strong>
                            <span>Active Users</span>
                        </div>
                    </div>
                </div>

                <div className={styles.heroResources}>
                    <div className={styles.avatars}>
                        <img src={Photos.Avatar.avatar1} alt="" />
                        <img src={Photos.Avatar.avatar2} alt="" />
                        <img src={Photos.Avatar.avatar3} alt="" />
                        <img src={Photos.Avatar.avatar4} alt="" />
                    </div>

                    <div className={styles.resoursesText}>
                        <h2 className={styles.resourcesTitle}>Explore 1000+ resources</h2>

                        <p className={styles.resourcesDescription}>
                            Over 1,000 articles on emerging tech trends and breakthroughs.
                        </p>
                    </div>

                    <a href="#" className={styles.resourcesButton}>
                        Explore Resources
                        <img src={Photos.DiagonalArrow} alt="" />
                    </a>
                </div>
            </div>

            <div className={styles.features}>
                <article className={styles.feature}>
                    <img src={Photos.updates} alt="" />

                    <div className={styles.featureContent}>
                        <div className={styles.featureText}>
                            <h3>Latest News Updates</h3>
                            <p>Stay Current</p>
                        </div>

                        <a href="#" className={styles.featureButton}>
                            <img src={Photos.diagonalArrowBlack} alt="" />
                        </a>
                    </div>

                    <p>Over 1,000 articles published monthly</p>
                </article>

                <article className={styles.feature}>
                    <img src={Photos.contributors} alt="" />

                    <div className={styles.featureContent}>
                        <div className={styles.featureText}>
                            <h3>Expert Contributors</h3>
                            <p>Trusted Insights</p>
                        </div>

                        <a href="#" className={styles.featureButton}>
                            <img src={Photos.diagonalArrowBlack} alt="" />
                        </a>
                    </div>

                    <p>50+ renowned AI experts on our team</p>
                </article>

                <article className={styles.feature}>
                    <img src={Photos.readership} alt="" />

                    <div className={styles.featureContent}>
                        <div className={styles.featureText}>
                            <h3>Global Readership</h3>
                            <p>Worldwide Impact</p>
                        </div>

                        <a href="#" className={styles.featureButton}>
                            <img src={Photos.diagonalArrowBlack} alt="" />
                        </a>
                    </div>

                    <p>2 million monthly readers</p>
                </article>
            </div>
        </section>
    );
}
