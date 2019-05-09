import React, { Component } from 'react';
import classes from './Chooser.css';
import Logo from '../../WebDev/Logo/Logo';
import { Link } from 'react-router-dom';

class Chooser extends Component {

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className={classes.Container}>
                <Logo />
                <Link to="/webdev" className={classes.Button1}>WebDev</Link>
                <Link to="/audio" className={classes.Button2}>Audio</Link>
            </div>
        );
    }
}

export default Chooser;