import React from 'react';
import classes from './Logo.css';
import { Link } from 'react-router-dom';

const logo = () => (
   <Link to='/'><div className={classes.Logo}>
        <h1>DAVID MATHES</h1>
    </div></Link>
);

export default logo;