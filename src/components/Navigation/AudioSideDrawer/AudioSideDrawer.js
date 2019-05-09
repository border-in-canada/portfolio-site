import React from 'react';
import AudioNavigationItems from '../AudioNavigationItems/AudioNavigationItems';
import classes from './AudioSideDrawer.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const audioSideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <AudioNavigationItems />
                </nav>
            </div>
        </Aux>
        
    );
};

export default audioSideDrawer;