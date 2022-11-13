import React from 'react';
import Aboutus from '../home/Aboutus';
import AboutBanner from './AboutBanner';
import OurServices from './OurServices';
import SummeryTwo from './SummeryTwo';

const About = () => {
    return (
        <div>
            <AboutBanner />
            <Aboutus />
            <SummeryTwo />
            <OurServices />
        </div>
    );
};

export default About;