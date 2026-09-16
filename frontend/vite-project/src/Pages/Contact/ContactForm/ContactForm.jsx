import { useState } from 'react';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import './phone-input.css';
import styles from './ContactForm.module.scss';
import { Photos } from '../../../../../Photos';

export default function ContactForm() {
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',
    });
    const [agreed, setAgreed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        if (!agreed) {
            setError('Подтвердите согласие с условиями');
            return;
        }

        try {
            setLoading(true);

            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form),
            });

            if (!response.ok) throw new Error('Ошибка отправки');

            setSent(true);
            setForm({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                message: '',
            });
            setAgreed(false);
        } catch (err) {
            console.error(err);
            setError('Не удалось отправить форму');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className={styles.contactForm}>
            <div className={styles.container}>
                <div className={styles.left}>
                    <img className={styles.icon} src={Photos.iconSpace} alt="" />
                    <h2>Get in Touch with AI Podcasts</h2>
                </div>

                <div className={styles.right}>
                    {sent ? (
                        <div className={styles.success}>Спасибо! Мы свяжемся с вами.</div>
                    ) : (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <label>First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="Enter First Name"
                                        value={form.firstName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label>Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Enter Last Name"
                                        value={form.lastName}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.row}>
                                <div className={styles.field}>
                                    <label>Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Enter your Email"
                                        value={form.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className={styles.field}>
                                    <label>Phone Number</label>
                                    <PhoneInput
                                        defaultCountry="ru"
                                        value={form.phone}
                                        onChange={(phone) => setForm({ ...form, phone })}
                                        placeholder="Enter Phone Number"
                                    />
                                </div>
                            </div>

                            <div className={styles.field}>
                                <label>Message</label>
                                <textarea
                                    name="message"
                                    placeholder="Enter your Message"
                                    value={form.message}
                                    onChange={handleChange}
                                    rows={5}
                                    required
                                />
                            </div>

                            <div className={styles.bottom}>
                                <label className={styles.checkbox}>
                                    <input
                                        type="checkbox"
                                        checked={agreed}
                                        onChange={(e) => setAgreed(e.target.checked)}
                                    />
                                    I agree with Terms of Use and Privacy Policy
                                </label>

                                <button type="submit" disabled={loading}>
                                    {loading ? 'Sending...' : 'Send'}
                                </button>
                            </div>

                            {error && <p className={styles.error}>{error}</p>}
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
}
