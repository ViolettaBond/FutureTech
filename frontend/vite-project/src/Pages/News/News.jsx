import Discover from './Discover/Discover';
import GlobalClimate from './GlobalClimate/GlobalClimate';
import Hero from './Hero/Hero';
import Video from './Video/Video';

export default function News() {
    return (
        <>
            <div>
                <Hero />
                <GlobalClimate />
                <Discover />
                <Video />
            </div>
        </>
    );
}
