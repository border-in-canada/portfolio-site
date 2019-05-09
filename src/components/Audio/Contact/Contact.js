import React from 'react';
import classes from './Contact.css';

const contact = () => (
    <div name='contact' className={classes.Container}>
        <h1 style={{textAlign: 'center', fontSize: '48px'}}>Contact</h1>
        <div className={classes.Contact}>
            <div><p>828.545.7330</p></div>
            <div><a href="mailto:mathesd84@gmail.com" target='_blank' rel='noopener noreferrer'>mathesd84@gmail.com</a></div>
        </div>
    </div>
);

export default contact;