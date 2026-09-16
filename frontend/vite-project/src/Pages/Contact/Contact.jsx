import styles from './Contact.module.scss';
import ContactInfo from './ContactInfo/ContactInfo';
import ContactForm from './ContactForm/ContactForm';
import Faq from './FAQ/FAQ';

export default function Contact() {
    return (
        <main className={styles.contact}>
            <ContactInfo />
            <ContactForm />
            <Faq />
        </main>
    );
}
