import React, { Component } from 'react';
import classes from './WebDev.css';
import SideDrawer from '../../Navigation/SideDrawer/SideDrawer';
import Toolbar from '../../Navigation/Toolbar/Toolbar';
import Bio from '../Bio/Bio';
import Gallery from '../Gallery/Gallery';
import Contact from '../Contact/Contact';

class WebDev extends Component {
    state = {
        showSideDrawer: false
    }

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return {showSideDrawer: !prevState.showSideDrawer}
        });
    }

    render() {
        return (
                <div className={classes.WebDev}>
                    <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                    <SideDrawer active={this.sideDrawerClosedHandler} open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                    <Bio />
                    <Gallery />
                    <Contact />
                </div>
        );
    }
}

export default WebDev;