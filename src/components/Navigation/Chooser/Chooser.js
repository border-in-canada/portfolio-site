import React from 'react';
import classes from './Chooser.css';
import Logo from '../../WebDev/Logo/Logo';
import { Link } from 'react-router-dom';

const chooser = () => (
    <div className={classes.Container}>
        <Logo />
        <Link to="/webdev" className={classes.Button1}>WebDev</Link>
        <Link to="/audio" className={classes.Button2}>Audio</Link>
    </div>
);

export default chooser;