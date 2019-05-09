import React from 'react';
import classes from './NavigationItems.css';
import { Link, animateScroll as scroll } from "react-scroll";

const navigationItems = () => (
    <ul className={classes.Navigation}>
        <Link className={classes.Item} activeClass={classes.Active} to='about' spy={true} smooth={true} offset={-120}>About</Link>
        <Link className={classes.Item} activeClass={classes.Active} to='work' spy={true} smooth={true}>Work</Link>
        <Link className={classes.Item} activeClass={classes.Active} to='contact' spy={true} smooth={true}>Contact</Link>
    </ul>
);

export default navigationItems;