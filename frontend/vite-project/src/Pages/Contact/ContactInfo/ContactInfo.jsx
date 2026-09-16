import styles from './ContactInfo.module.scss';
import { Photos } from '../../../../../Photos';

const CARDS = [
    {
        id: 'inquiries',
        title: 'General Inquiries',
        items: [
            { label: 'contact@ai-podcasts.com', href: 'mailto:contact@ai-podcasts.com' },
            { label: '+1 (123) 456-7890', href: 'tel:+11234567890' },
        ],
    },
    {
        id: 'support',
        title: 'Technical Support',
        items: [
            { label: 'contact@ai-podcasts.com', href: 'mailto:contact@ai-podcasts.com' },
            { label: '+1 (123) 456-7890', href: 'tel:+11234567890' },
        ],
    },
    {
        id: 'office',
        title: 'Our Office',
        text: 'Address: 123 AI Tech Avenue, Techville, 54321',
        button: { label: 'Get Directions', href: '#' },
    },
    {
        id: 'socials',
        title: 'Connect with Us',
        socials: [
            { icon: Photos.Social.Twitter, href: '#' },
            { icon: Photos.Social.Google, href: '#' },
            { icon: Photos.Social.LinkedIn, href: '#' },
        ],
    },
];

export default function ContactInfo() {
    return (
        <section className={styles.contactInfo}>
            <div className={styles.container}>
                <div className={styles.grid}>
                    {CARDS.map((card) => (
                        <div className={styles.card} key={card.id}>
                            <h3 className={styles.cardTitle}>{card.title}</h3>

                            {card.items &&
                                card.items.map((item, i) => (
                                    <a className={styles.linkBox} href={item.href} key={i}>
                                        <span>{item.label}</span>
                                        <img src={Photos.DiagonalArrow} alt="" />
                                    </a>
                                ))}

                            {card.text && <p className={styles.text}>{card.text}</p>}

                            {card.button && (
                                <a className={styles.linkBox} href={card.button.href}>
                                    <span>{card.button.label}</span>
                                    <img src={Photos.DiagonalArrow} alt="" />
                                </a>
                            )}

                            {card.socials && (
                                <div className={styles.socials}>
                                    {card.socials.map((s, i) => (
                                        <a href={s.href} key={i}>
                                            <img src={s.icon} alt="" />
                                        </a>
                                    ))}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
