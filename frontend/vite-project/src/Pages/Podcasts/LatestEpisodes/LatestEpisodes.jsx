import styles from './LatestEpisodes.module.scss';
import { Photos } from '../../../../../Photos';

const EPISODES = [
    {
        id: 1,
        image: Photos.Podcast.aiHealthcare,
        duration: '2:30 min',
        title: 'AI in Healthcare',
        description:
            'Dr. Lisa Adams discusses how AI is revolutionizing healthcare, from diagnostic tools to patient care.',
    },
    {
        id: 2,
        image: Photos.Podcast.aiEthics,
        duration: '2:30 min',
        title: 'AI Ethics',
        description:
            'Explore the ethical dilemmas and considerations surrounding AI with guest speaker Dr. Michael Turner.',
    },
    {
        id: 3,
        image: Photos.Podcast.machineLearning,
        duration: '2:30 min',
        title: 'Machine Learning Explained',
        description:
            'Dive into the intricacies of machine learning with AI expert Sarah Davis. In this episode',
    },
    {
        id: 4,
        image: Photos.Podcast.futureOfWork,
        duration: '2:30 min',
        title: 'AI and the Future of Work',
        description:
            'Dr. Olivia White joins John Parker to discuss the evolving role of AI in the workplace.',
    },
    {
        id: 5,
        image: Photos.Podcast.aiEducation,
        duration: '2:30 min',
        title: 'AI in Education',
        description:
            'Explore the role of AI in education as Emily Turner discusses how AI is transforming the learning experience.',
    },
    {
        id: 6,
        image: Photos.Podcast.aiEntertainment,
        duration: '2:30 min',
        title: 'AI in Entertainment',
        description:
            'David Smith as they explore the influence of AI in the entertainment industry.',
    },
];

export default function LatestEpisodes() {
    return (
        <section className={styles.latestEpisodes}>
            <div className={styles.heading}>
                <div className={styles.headingInner}>
                    <span className={styles.badge}>Stay Informed with Fresh Content</span>
                    <h2 className={styles.title}>Latest Podcast Episodes</h2>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.grid}>
                    {EPISODES.map((episode) => (
                        <div className={styles.card} key={episode.id}>
                            <div className={styles.imageWrap}>
                                <img src={episode.image} alt={episode.title} />

                                <button className={styles.playBtn}>
                                    <img src={Photos.btnVideo} alt="Play" />
                                </button>

                                <span className={styles.duration}>{episode.duration}</span>
                            </div>

                            <h3 className={styles.cardTitle}>{episode.title}</h3>
                            <p className={styles.description}>{episode.description}</p>

                            <button className={styles.listenBtn}>
                                Listen Podcast
                                <img src={Photos.DiagonalArrow} alt="" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
