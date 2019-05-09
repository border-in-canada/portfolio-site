import React from 'react';
import classes from './NavigationItems.css';
import { Link } from "react-scroll";

const navigationItems = (props) => (
    <ul className={classes.Navigation}>
        <Link 
            className={classes.Item} 
            activeClass={classes.Active} 
            to='about' 
            spy={true} 
            smooth={true} 
            offset={-200}
            onClick={props.isActive}>
            About
        </Link>
        <Link 
            className={classes.Item} 
            activeClass={classes.Active} 
            to='work' 
            spy={true} 
            smooth={true}
            offset={-100}
            onClick={props.isActive}>
            Work
        </Link>
        <Link 
            className={classes.Item} 
            activeClass={classes.Active} 
            to='contact' 
            spy={true} 
            smooth={true}
            onClick={props.isActive}>
            Contact
        </Link>
    </ul>
);

export default navigationItems;