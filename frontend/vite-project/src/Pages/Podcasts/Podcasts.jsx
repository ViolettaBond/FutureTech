import React from 'react';
import Hero from './Hero/Hero';
import PodcastList from './PodcastList/PodcastList';
import LatestEpisodes from './LatestEpisodes/LatestEpisodes';

export default function Podcasts() {
    return (
        <>
            <Hero />
            <PodcastList />
            <LatestEpisodes />
        </>
    );
}
