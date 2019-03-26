import React from 'react';
import AboutCarousel from './AboutCarousel.js'

const About = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h2>We love genuine style</h2>
            <div style={{width: '50%', height: 'auto'}}>
                <AboutCarousel />
            </div>
            <p>Started from the bottom now we are here.</p>


        </div>
    );
};

export default About;