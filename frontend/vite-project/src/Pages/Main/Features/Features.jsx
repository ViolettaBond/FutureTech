import styles from './Features.module.scss';
import { Photos } from '../../../../../Photos';

const FEATURES = [
    {
        id: 'blog',
        icon: Photos.futureIcon,
        title: 'FutureTech Blog',
        description: 'Stay informed with our blog section dedicated to future technology.',
        cells: [
            {
                title: 'Quantity',
                text: 'Over 1,000 articles on emerging tech trends and breakthroughs.',
            },
            {
                title: 'Variety',
                text: 'Articles cover fields like AI, robotics, biotechnology, and more.',
            },
            { title: 'Frequency', text: 'Fresh content added daily to keep you up to date.' },
            {
                title: 'Authoritative',
                text: 'Written by our team of tech experts and industry professionals.',
            },
        ],
    },
    {
        id: 'research',
        icon: Photos.researchIcon,
        title: 'Research Insights Blogs',
        description: 'Dive deep into future technology concepts with our research section.',
        cells: [
            { title: 'Depth', text: '500+ research articles for in-depth understanding.' },
            { title: 'Graphics', text: 'Visual aids and infographics to enhance comprehension.' },
            { title: 'Trends', text: 'Explore emerging trends in future technology research.' },
            { title: 'Contributors', text: 'Contributions from tech researchers and academics.' },
        ],
    },
];

export default function Features() {
    return (
        <section className={styles.features}>
            <div className={styles.header}>
                <div className={styles.headerInner}>
                    <span className={styles.eyebrow}>Unlock the Power of</span>
                    <h2 className={styles.title}>FutureTech Features</h2>
                </div>
            </div>

            <div className={styles.container}>
                <div className={styles.list}>
                    {FEATURES.map((feature) => (
                        <div className={styles.card} key={feature.id}>
                            <div className={styles.left}>
                                <img className={styles.icon} src={feature.icon} alt="" />
                                <h3>{feature.title}</h3>
                                <p>{feature.description}</p>
                            </div>

                            <div className={styles.right}>
                                <div className={styles.grid}>
                                    {feature.cells.map((cell, i) => (
                                        <div className={styles.cell} key={i}>
                                            <h4>{cell.title}</h4>
                                            <p>{cell.text}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
