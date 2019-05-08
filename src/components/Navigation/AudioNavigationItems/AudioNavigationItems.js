import React from 'react';
import classes from './AudioNavigationItems.css';
import { Link, animateScroll as scroll } from "react-scroll";

const navigationItems = () => (
    <ul className={classes.Navigation}>
        <Link className={classes.Item} activeClass={classes.Active} to='about' spy={true} smooth={true} offset={0}>About</Link>
        <Link className={classes.Item} activeClass={classes.Active} to='gear' spy={true} smooth={true}>Gear</Link>
        <Link className={classes.Item} activeClass={classes.Active} to='clips' spy={true} smooth={true} offset={-100}>Clips</Link>
        <Link className={classes.Item} activeClass={classes.Active} to='contact' spy={true} smooth={true} offset={-300}>Contact</Link>
    </ul>
);

export default navigationItems;