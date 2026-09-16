import { useState } from 'react';
import styles from './InDepth.module.scss';
import { Photos } from '../../../../../Photos';

const TABS = [
    { id: 'whitepapers', label: 'Whitepapers' },
    { id: 'ebooks', label: 'Ebooks' },
    { id: 'reports', label: 'Reports' },
];

const DATA = {
    whitepapers: {
        big: [
            {
                id: 1,
                title: 'Quantum Computing Whitepaper',
                description:
                    'Provides technical specifications and requirements for implementing quantum computing systems.',
                icon: Photos.iconQuantum,
                image: Photos.quantumWaves,
                date: 'July 2023',
                category: 'Quantum Computing',
                author: 'Dr. Quantum',
            },
            {
                id: 2,
                title: 'Space Exploration Whitepaper',
                description:
                    'Explores Mars colonization, asteroid resource potential, and space tourism.',
                icon: Photos.iconSpace,
                image: Photos.aiRobot,
                date: 'September 2023',
                category: 'Space Exploration',
                author: 'FutureTech Space Division',
            },
        ],
        small: [
            {
                id: 1,
                title: 'FutureTech Trends 2024',
                description:
                    'An ebook that predicts upcoming technology trends for the next year, including AI developments.',
                image: Photos.vrHeadset,
            },
            {
                id: 2,
                title: 'Space Exploration Ebook',
                description:
                    'An ebook that predicts upcoming technology trends for the next year, including AI developments.',
                image: Photos.astronaut,
            },
            {
                id: 3,
                title: 'Quantum Computing Whitepaper',
                description:
                    'An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.',
                image: Photos.digitalWaves,
            },
        ],
    },

    ebooks: {
        big: [
            {
                id: 1,
                title: 'FutureTech Trends 2024',
                description:
                    'An ebook that predicts upcoming technology trends for the next year, including AI developments.',
                icon: Photos.iconQuantum,
                image: Photos.vrHeadset,
                date: 'October 2023',
                category: 'Technology',
                author: 'Dr. Tech',
            },
            {
                id: 2,
                title: 'Space Exploration Ebook',
                description: 'An ebook about Mars missions and asteroid mining.',
                icon: Photos.iconSpace,
                image: Photos.astronaut,
                date: 'November 2023',
                category: 'Space',
                author: 'FutureTech',
            },
        ],
        small: [
            {
                id: 1,
                title: 'FutureTech Trends 2024',
                description:
                    'An ebook that predicts upcoming technology trends for the next year, including AI developments.',
                image: Photos.vrHeadset,
            },
            {
                id: 2,
                title: 'Space Exploration Ebook',
                description:
                    'An ebook that predicts upcoming technology trends for the next year, including AI developments.',
                image: Photos.astronaut,
            },
            {
                id: 3,
                title: 'Quantum Computing Whitepaper',
                description:
                    'An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.',
                image: Photos.digitalWaves,
            },
        ],
    },

    reports: {
        big: [
            {
                id: 1,
                title: 'AI in Healthcare Report',
                description:
                    'A comprehensive report on the current state and future of AI in the healthcare industry.',
                icon: Photos.iconQuantum,
                image: Photos.quantumWaves,
                date: 'August 2023',
                category: 'Healthcare',
                author: 'Dr. Emily Walker',
            },
            {
                id: 2,
                title: 'Climate Tech Report',
                description:
                    'An overview of climate technologies and their impact on global sustainability.',
                icon: Photos.iconSpace,
                image: Photos.aiRobot,
                date: 'December 2023',
                category: 'Climate',
                author: 'FutureTech Green Division',
            },
        ],
        small: [
            {
                id: 1,
                title: 'FutureTech Trends 2024',
                description:
                    'An ebook that predicts upcoming technology trends for the next year, including AI developments.',
                image: Photos.vrHeadset,
            },
            {
                id: 2,
                title: 'Space Exploration Ebook',
                description:
                    'An ebook that predicts upcoming technology trends for the next year, including AI developments.',
                image: Photos.astronaut,
            },
            {
                id: 3,
                title: 'Quantum Computing Whitepaper',
                description:
                    'An in-depth whitepaper exploring the principles, applications, and potential impact of quantum computing.',
                image: Photos.digitalWaves,
            },
        ],
    },
};

export default function InDepth() {
    const [activeTab, setActiveTab] = useState('whitepapers');
    const data = DATA[activeTab];

    return (
        <section className={styles.inDepth}>
            <div className={styles.container}>
                <div className={styles.tabsInner}>
                    <div className={styles.headingTabs}>
                        <span>Dive into the Details</span>

                        <p className={styles.text}>In-Depth Reports and Analysis</p>
                    </div>

                    <div className={styles.tabs}>
                        {TABS.map((tab) => (
                            <button
                                key={tab.id}
                                className={`${styles.tab} ${activeTab === tab.id ? styles.active : ''}`}
                                onClick={() => setActiveTab(tab.id)}>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className={styles.list}>
                    {data.big.map((item) => (
                        <div className={styles.bigCard} key={item.id}>
                            <div className={styles.left}>
                                <img className={styles.icon} src={item.icon} alt="" />
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>

                            <div className={styles.right}>
                                <img src={item.image} alt={item.title} />

                                <div className={styles.cardBottom}>
                                    <div>
                                        <h4>{item.title}</h4>
                                        <p>{item.description}</p>
                                    </div>
                                    <button className={styles.downloadBtn}>
                                        Download PDF Now ↗
                                    </button>
                                </div>

                                <div className={styles.meta}>
                                    <div>
                                        <span>Publication Date</span>
                                        <strong>{item.date}</strong>
                                    </div>
                                    <div>
                                        <span>Category</span>
                                        <strong>{item.category}</strong>
                                    </div>
                                    <div>
                                        <span>Author</span>
                                        <strong>{item.author}</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className={styles.grid}>
                    {data.small.map((item) => (
                        <div className={styles.smallCard} key={item.id}>
                            <img src={item.image} alt={item.title} />
                            <h4>{item.title}</h4>
                            <p>{item.description}</p>
                            <div className={styles.actions}>
                                <button>View Details</button>
                                <button>Download PDF Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
