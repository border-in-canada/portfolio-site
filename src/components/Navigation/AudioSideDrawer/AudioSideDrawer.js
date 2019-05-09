import React, { Component } from 'react';
import AudioNavigationItems from '../AudioNavigationItems/AudioNavigationItems';
import classes from './AudioSideDrawer.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

class AudioSideDrawer extends Component {
    
    render() {

        let attachedClasses = [classes.SideDrawer, classes.Close];
        if (this.props.open) {
            attachedClasses = [classes.SideDrawer, classes.Open];
        }
        // else if (this.props.open && this.state.isActive) {
        //     attachedClasses = [classes.SideDrawer, classes.Close];
        // }
        // else if (this.props.open){
        //     attachedClasses = [classes.SideDrawer, classes.Open];
        // }
        
    
        return (
            <Aux>
                <Backdrop show={this.props.open} clicked={this.props.closed}/>
                <div className={attachedClasses.join(' ')}>
                    <nav>
                        <AudioNavigationItems isActive={this.props.active}/>
                    </nav>
                </div>
            </Aux>
            
        );
    }
    
}

export default AudioSideDrawer;