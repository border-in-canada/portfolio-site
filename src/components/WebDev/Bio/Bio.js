import React from 'react';
import image from '../../../assets/images/MePic.jpg';
import classes from './Bio.css';

const bio = () => (
    <div className={classes.Container}>
        <div name='about' className={classes.Bio}>
                <div className={classes.Figure}>
                    <img src={image} alt='Pic of DM' />
                </div>
            <p className={classes.Words}>I live in Portland, Oregon where I've been working on everything tech for the past 5 years. My passion for web development has been fostered from my 10 years of IT experience, and I'm looking to step into a development role full time. My implements of choice include HTML, CSS, Javascript, React, and jQuery. Outside the codelab you can find me producing music, playing drums, or in a local body of water.<br /><br />I currently work at Gresham-Barlow School District as a Tier II support technician.</p>
        </div>            
    </div>
    
);

export default bio;