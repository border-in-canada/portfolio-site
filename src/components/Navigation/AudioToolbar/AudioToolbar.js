import React from 'react';
import classes from './AudioToolbar.css';
import AudioLogo from '../../Audio/AudioLogo/AudioLogo';
import AudioNavigationItems from '../AudioNavigationItems/AudioNavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const audioToolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle clicked={props.drawerToggleClicked} />
       
        <AudioLogo />
        
        <nav className={classes.DesktopOnly}>
            <AudioNavigationItems />
        </nav>
    </header>
);

export default audioToolbar;