import styles from './Home.module.scss';
import Hero from './Hero/Hero';
import Features from './Features/Features';
import BlogSection from './BlogSection/BlogSection';
import Resources from './Resources/Resources';
import Reviews from './Reviews/Reviews';
import About from './About/About';

export default function Main() {
    return (
        <main className={styles.home}>
            <Hero />
            <Features />
            <BlogSection />
            <Resources />
            <Reviews />
            <About />
        </main>
    );
}
