import React from 'react';
import image from '../../../assets/images/MePic.jpg';
import classes from './Bio.css';

const bio = () => (
    <div className={classes.Container}>
        <div name='about' className={classes.Bio}>
            <div className={classes.figureThing}>
                <img src={image} alt='Pic of DM' />
            </div>
            <p className={classes.words}>I'm David Mathes, a Front-end web developer with a background in IT. I'm a curious, fast-paced programmer with a knack for tinkering and figuring out how things work. I also strongly believe in open-source software and the community it fosters. When I'm not programming you can find me engineering records and playing drums:)<br /><br />Are you looking for someone to help you with your website? Check out my projects here and reach out if you'd like to talk about your project.</p>
        </div>            
    </div>
    
);

export default bio;