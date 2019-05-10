import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Gallery.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/fontawesome-free-brands';
import burger from '../../../assets/images/burger.jpg';
import quotgen from '../../../assets/images/quotgen3.jpg';
import weather from '../../../assets/images/weather3.jpg';
import form from '../../../assets/images/Form3.jpg';
import tribute from '../../../assets/images/Boards2.jpg';
import techdoc from '../../../assets/images/techdoc3.jpg';


const gallery = () => (
    <div>
        <h1 name='work' style={{textAlign: 'center', marginTop: '6em', fontSize: '48px'}}>Work</h1>
        <div className={classes.Gallery}>
            <div><a href='https://burg-builder.herokuapp.com/' target="_blank" rel='noopener noreferrer'><img src={burger} alt='screenshot' /></a></div>
            <div><a href='https://codepen.io/border-in-canada/full/YLgoeq' target="_blank" rel='noopener noreferrer'><img src={quotgen} alt='screenshot' /></a></div>
            <div><a href='https://codepen.io/border-in-canada/full/rvgNJZ' target="_blank" rel='noopener noreferrer'><img src={weather} alt='screenshot' /></a></div>
            <div><a href='https://codepen.io/border-in-canada/full/odzyGK' target="_blank" rel='noopener noreferrer'><img src={tribute} alt='screenshot' /></a></div>
            <div><a href='https://codepen.io/border-in-canada/full/ejLWww' target="_blank" rel='noopener noreferrer'><img src={form} alt='screenshot' /></a></div>
            <div><a href='https://codepen.io/border-in-canada/full/rZoryV' target="_blank" rel='noopener noreferrer'><img src={techdoc} alt='screenshot' /></a></div>
        </div>
        <div className={classes.Icons}>
            <p>View my code and skills:</p>
        </div>
        <div className={classes.Icons}>
            <a href='https://www.github.com/border-in-canada' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon  icon={ faGithub } /></a>
            <a href='https://www.linkedin.com/in/davemathes' target='_blank' rel='noopener noreferrer'><FontAwesomeIcon  icon={ faLinkedin } /></a>
        </div>
    </div>
   
);

export default gallery;