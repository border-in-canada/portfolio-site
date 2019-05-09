import React, { Component } from 'react';
import classes from './AudioNavigationItems.css';
import { Link } from "react-scroll";

class NavigationItems extends Component {
    render() {
        return (
            <ul className={classes.Navigation}>
                <Link 
                    className={classes.Item} 
                    activeClass={classes.Active} 
                    to='about' 
                    spy={true} 
                    smooth={true} 
                    offset={-150}
                    onClick={this.props.isActive}>
                    About 
                </Link>
                <Link 
                    className={classes.Item} 
                    activeClass={classes.Active} 
                    to='gear' 
                    spy={true} 
                    smooth={true}
                    offset={-150}
                    onClick={this.props.isActive}
                    >Gear
                </Link>
                <Link 
                    className={classes.Item} 
                    activeClass={classes.Active} 
                    to='clips' 
                    spy={true} 
                    smooth={true} 
                    offset={-100}
                    onClick={this.props.isActive}>
                    Clips
                </Link>
                <Link 
                    className={classes.Item} 
                    activeClass={classes.Active} 
                    to='contact' 
                    spy={true} 
                    smooth={true} 
                    offset={-80}
                    onClick={this.props.isActive}>
                    Contact
                </Link>
            </ul>
        );
    }   
}
export default NavigationItems;