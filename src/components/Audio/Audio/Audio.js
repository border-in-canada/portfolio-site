import React, { Component } from 'react';
import classes from './Audio.css';
import AudioSideDrawer from '../../Navigation/AudioSideDrawer/AudioSideDrawer';
import AudioToolbar from '../../Navigation/AudioToolbar/AudioToolbar';
import Contact from '../Contact/Contact';
import Gear from '../Gear/Gear';
import Clips from '../Clips/Clips';
import About from '../About/About';
import Splash from '../Splash/Splash';

class Audio extends Component {
    state = {
        showSideDrawer: false
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
            <div className={classes.Audio}>
                <AudioToolbar drawerToggleClicked={this.sideDrawerToggleHandler}/>
                <AudioSideDrawer open={this.state.showSideDrawer} closed={this.sideDrawerClosedHandler}/>
                <Splash />
                <About />
                <Gear />
                <Clips />
                <Contact />
            </div>
        );
    }
}

export default Audio;