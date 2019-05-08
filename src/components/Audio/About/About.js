import React from 'react';
import classes from './About.css';
import studio1 from '../../../assets/images/studiorec.jpg';
import studio2 from '../../../assets/images/studiodrum.jpg';
import Aux from '../../../hoc/Aux/Aux';

const about = () => (
    <Aux>
        <div name='about' className={classes.Container}>
            <div className={classes.Bio}>
                <div><p>I've been engineering music for over a decade. I started in production because I was a musician first, and I couldn't seem to find an engineer that could get the sound I wanted. I've spent the past years cultivating sounds for trip-hop, post-rock, pop, and electronic acts, and I love finding new tools and methods for getting that unique, subtle vibe that every group strives for. Having been in each role, I'm keenly aware of how to get the most natural and authentic recordings, with an ear for space, style and colour.</p><br /><p>My boutique project studio space is perfectly geared and tuned for mixing and tracking an instrument or two at a time. The room is 12x17, air-tight, walls decoupled from the external structure, and works well for drums due to the 9 ft ceilings.</p></div>
            </div>
        </div>
        <div className={classes.Pic}>
            <img src={studio1} alt='studio-pic' />
            <img src={studio2} alt='studio-pic' />
        </div>
    </Aux>
    
    
);

export default about;