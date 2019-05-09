import React from 'react';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../Backdrop/Backdrop';
import Aux from '../../../hoc/Aux/Aux';

const sideDrawer = (props) => {
    let attachedClasses = [classes.SideDrawer, classes.Close];
    if (props.open) {
        attachedClasses = [classes.SideDrawer, classes.Open];
    }
    return (
        <Aux>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <nav>
                    <NavigationItems isActive={props.active}/>
                </nav>
            </div>
        </Aux>
        
    );
};

export default sideDrawer;