import React from 'react';
import AudioNavigationItems from '../AudioNavigationItems/AudioNavigationItems';
import classes from './AudioSideDrawer.css';
// import Backdrop from '../../UI/Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const audioSideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <AudioNavigationItems />
                </nav>
            </div>
        </Aux>
        
    );
};

export default audioSideDrawer;