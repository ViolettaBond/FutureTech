import { useEffect, useState } from 'react';
import styles from './Faq.module.scss';
import { Photos } from '../../../../../Photos';

export default function Faq() {
    const [items, setItems] = useState([]);
    const [openId, setOpenId] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/api/faq')
            .then((res) => res.json())
            .then((data) => {
                setItems(data);
                if (data.length > 0) setOpenId(data[0].id);
            })
            .catch((err) => {
                console.error(err);
                setItems([]);
            });
    }, []);

    const toggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className={styles.faq}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img className={styles.icon} src={Photos.iconSpace} alt="" />
                    <h2>Asked question</h2>
                    <p>
                        If the question is not available on our FAQ section, Feel free to contact us
                        personally, we will resolve your respective doubts.
                    </p>
                    <button className={styles.askBtn}>Ask Question ↗</button>
                </div>

                <div className={styles.right}>
                    {items.map((item) => (
                        <div
                            className={`${styles.item} ${openId === item.id ? styles.open : ''}`}
                            key={item.id}>
                            <button className={styles.question} onClick={() => toggle(item.id)}>
                                <span>{item.question}</span>
                                <span className={styles.iconPlus}>
                                    {openId === item.id ? '−' : '+'}
                                </span>
                            </button>

                            {openId === item.id && <p className={styles.answer}>{item.answer}</p>}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
