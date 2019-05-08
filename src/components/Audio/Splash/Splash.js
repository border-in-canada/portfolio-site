import React from 'react';
import classes from './Splash.css';
import creep from '../../../assets/images/presspic2.jpg';

const splash = () => (
    <div>
        <div className={classes.Splash}>
            <p className={classes.First}>Production</p>
            <p className={classes.Second}>Mixing</p>
            <p className={classes.Third}>Recording</p>
        </div>
        {/* <div className={classes.Fourth}>
            <img src={creep} alt='press-pic' />  
        </div>  */}
    </div>  
   
);

export default splash;