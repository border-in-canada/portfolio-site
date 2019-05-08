import React from 'react';
import classes from './Clips.css';

const clips = () => (
    <div name='clips' className={classes.Container}>
        <div><h1>Clips</h1></div>
        <div className={classes.Clip}>
            <h2>Original Production/Recording/Mixing</h2>
            <iframe width="75%" height="125" scrolling="no" frameborder="no" allow="autoplay" allowtransparency="true" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/296945542%3Fsecret_token%3Ds-4cEl5&color=%23252729&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true&visual=false"></iframe>
            <iframe width="75%" height="125" scrolling="no" frameborder="no" allow="autoplay" allowtransparency="true" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/57357658&color=%23252729&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        </div>
    </div>
);

export default clips