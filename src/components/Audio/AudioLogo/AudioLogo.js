import React from 'react';
import classes from './AudioLogo.css';
import { Link } from 'react-router-dom';

const audioLogo = () => (
   <Link to='/'><div className={classes.Logo}>
        <h1>DAVID MATHES</h1>
    </div></Link>
);

export default audioLogo;