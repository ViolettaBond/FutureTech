import styles from './PodcastList.module.scss';
import { Photos } from '../../../../../Photos';

const PODCASTS = [
    {
        id: 1,
        icon: Photos.iconQuantum,
        title: 'AI Revolution',
        rating: 5,
        host: 'Dr. Sarah Mitchell',
        image: Photos.Podcast.aiRevolutionVideo,
        subtitle: 'Delves into the transformative impact of AI',
        description:
            'Join Dr. Sarah Mitchell as she delves into the transformative impact of AI on industries, featuring expert interviews and real-world case studies. Explore the possibilities of AI in healthcare, finance, and more.',
        episodes: 50,
        episodeLength: '30 min',
        releaseFrequency: 'Weekly',
    },
    {
        id: 2,
        icon: Photos.iconSpace,
        title: 'AI Conversations',
        rating: 5,
        host: 'Mark Anderson',
        image: Photos.Podcast.aiConversationsVideo,
        subtitle: 'Engage in thought-provoking conversations with leading experts.',
        description:
            "Mark discusses the future of AI, the impact on society, and how it's shaping industries worldwide. Engage in thought-provoking conversations with leading experts.",
        episodes: 40,
        episodeLength: '40 min',
        releaseFrequency: 'Monthly',
    },
];

export default function PodcastList() {
    return (
        <section className={styles.podcastList}>
            <div className={styles.container}>
                <div className={styles.list}>
                    {PODCASTS.map((podcast) => (
                        <div className={styles.card} key={podcast.id}>
                            <div className={styles.left}>
                                <img className={styles.icon} src={podcast.icon} alt="" />

                                <div className={styles.titleRow}>
                                    <h3 className={styles.title}>{podcast.title}</h3>
                                    <div className={styles.rating}>
                                        {Array.from({ length: podcast.rating }).map((_, i) => (
                                            <span key={i}>★</span>
                                        ))}
                                    </div>
                                </div>

                                <div className={styles.hostBox}>
                                    <div className={styles.hostInfo}>
                                        <span className={styles.hostLabel}>Host</span>
                                        <strong className={styles.hostName}>{podcast.host}</strong>
                                    </div>
                                    <button className={styles.listenBtn}>
                                        Listen Podcast
                                        <img src={Photos.DiagonalArrow} alt="" />
                                    </button>
                                </div>
                            </div>

                            <div className={styles.right}>
                                <div className={styles.imageWrap}>
                                    <img src={podcast.image} alt={podcast.title} />
                                </div>

                                <h4 className={styles.subtitle}>{podcast.subtitle}</h4>
                                <p className={styles.description}>{podcast.description}</p>

                                <div className={styles.meta}>
                                    <div className={styles.metaItem}>
                                        <span>Total Episodes</span>
                                        <strong>{podcast.episodes}</strong>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <span>Average Episode Length</span>
                                        <strong>{podcast.episodeLength}</strong>
                                    </div>
                                    <div className={styles.metaItem}>
                                        <span>Release Frequency</span>
                                        <strong>{podcast.releaseFrequency}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
