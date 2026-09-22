import styles from './Resources.module.scss';
import { Photos } from '../../../../../Photos';

const RESOURCES = [
    {
        id: 1,
        title: 'Ebooks',
        image: Photos.varietyImage,
        subtitle: 'Variety of Topics',
        description:
            'Topics include AI in education (25%), renewable energy (20%), healthcare (15%), space exploration (25%), and biotechnology (15%).',
        episodes: 'Over 100 ebooks',
        episodeLength: 'PDF format for access.',
        averageData:
            'Ebooks are authored by renowned experts with an average of 15 years of experience',
    },
    {
        id: 2,
        title: 'Whitepapers',
        image: Photos.topicsImage,
        subtitle: 'Variety of Topics',
        description:
            'Whitepapers cover quantum computing (20%), AI ethics (15%), space mining concepts (20%), AI in healthcare (15%), and renewable energy strategies (30%).',
        episodes: 'Over 50 whitepapers',
        episodeLength: 'PDF format for access.',
        averageData:
            'Whitepapers are authored by subject matter experts with an average of 20 years of experience',
    },
];

export default function Resources() {
    return (
        <section className={styles.resources}>
            <header className={styles.header}>
                <div className={styles.innerHeader}>
                    <div className={styles.textHeader}>
                        <span className={styles.badge}>Your Gateway to In-Depth Information</span>
                        <h2 className={styles.title}>
                            Unlock Valuable Knowledge with FutureTech's Resources
                        </h2>
                    </div>

                    <a className={styles.viewAllBtn} href="/resources">
                        View All Resources
                        <img src={Photos.DiagonalArrow} alt="" />
                    </a>
                </div>
            </header>

            <div className={styles.container}>
                <div className={styles.futureRow}>
                    <div className={styles.grid}>
                        <div className={styles.card}>
                            <img src={Photos.iconQuantum} alt="" />
                            <h3>Ebooks</h3>
                            <p>
                                Dive into comprehensive reports and analyses with our collection of
                                whitepapers.
                            </p>
                            <a className={styles.downloadBtn} href="/resources">
                                Download Whitepapers Now
                                <img src={Photos.DiagonalArrow} alt="" />
                            </a>
                        </div>

                        <div className={styles.card}>
                            <img src={Photos.iconSpace} alt="" />
                            <h3>Whitepapers</h3>
                            <p>Check some cool white papers we've got for you today</p>
                            <a className={styles.downloadBtn} href="/resources">
                                Download Whitepapers Now
                                <img src={Photos.DiagonalArrow} alt="" />
                            </a>
                        </div>
                    </div>

                    <div className={styles.list}>
                        {RESOURCES.map((resource) => (
                            <div className={styles.card} key={resource.id}>
                                <div className={styles.content}>
                                    <div className={styles.headingList}>
                                        <h4 className={styles.subtitle}>{resource.subtitle}</h4>

                                        <p className={styles.description}>{resource.description}</p>
                                    </div>

                                    <div className={styles.imageWrap}>
                                        <img src={resource.image} alt={resource.title} />
                                    </div>

                                    <div className={styles.meta}>
                                        <div className={styles.metaItem}>
                                            <span>Total Ebooks</span>
                                            <strong>{resource.episodes}</strong>
                                        </div>

                                        <div className={styles.metaItemFlex}>
                                            <div className={styles.mifColumn}>
                                                <span>Download Formats</span>
                                                <strong>{resource.episodeLength}</strong>
                                            </div>

                                            <div className={styles.actionBtn}>
                                                <span>
                                                    Preview
                                                    <img src={Photos.views} alt="" />
                                                </span>
                                            </div>
                                        </div>

                                        <div className={styles.metaItemAverage}>
                                            <span>Average Author Expertise</span>
                                            <strong>{resource.averageData}</strong>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
