import styles from './Resources.module.scss';
import { Photos } from '../../../../../Photos';

export default function Resources() {
    return (
        <section className={styles.resources}>
            <div className={styles.container}>
                <header className={styles.header}>
                    <div>
                        <span className={styles.badge}>Your Gateway to In-Depth Information</span>
                        <h2 className={styles.title}>
                            Unlock Valuable Knowledge with FutureTech's Resources
                        </h2>
                    </div>
                    <a className={styles.viewAllBtn} href="/resources">
                        View All Resources
                        <img src={Photos.DiagonalArrow} alt="" />
                    </a>
                </header>

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
            </div>
        </section>
    );
}
