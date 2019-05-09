import React from 'react';
import classes from './Splash.css';
import creep from '../../../assets/images/presspic2.jpg';

const splash = () => (
    <div className={classes.Splash}>
        <p className={classes.First}>Production</p>
        <p className={classes.Second}>Mixing</p>
        <p className={classes.Third}>Recording</p>
    </div>
);

export default splash;