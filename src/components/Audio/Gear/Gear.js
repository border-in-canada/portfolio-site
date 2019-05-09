import React from 'react';
import classes from './Gear.css';
import outboard from '../../../assets/images/gear.jpg';
import mics from '../../../assets/images/studio.jpg';
import Aux from '../../../hoc/Aux/Aux';

const gear = () => (
    <Aux>
        <div name='gear' className={classes.Container}>
                <div className={classes.ListItem}>
                    <h1>Main Features</h1>
                    <p>Apogee Ensemble x2</p>
                    <p>Adams A7X Monitors</p>
                    <p>Avantone MidRange Monitors</p>
                    <p>Shadow Hills Mastering Controller</p>
                    <p>Native Instruments & Serum Software Instruments</p>
                </div>
                <div className={classes.ListItem}>
                    <h1>Signal Processing</h1>
                    <p>Shadow Hills Analog Summing Mixer</p>
                    <p>API 2500 Compressor</p>
                    <p>Waves/SoundToys Plugs</p>
                    <p>DSI Prophet 08' Polyphonic Synth</p>
                    <p>Moog Minitaur Bass Synth</p>
                </div>
                <div className={classes.ListItem}><
                    h1>Mics/Pres</h1>
                    <p>Shadow Hills Mono Gamma Pres x2</p>
                    <p>Neumann U87 Clone Condensor</p>
                    <p>Trans & Trans-less Shure SM57's</p>
                    <p>Shure Beta 52A Mic</p>
                    <p>Audix D2 & D4 Inst Mics</p>
                </div>
        </div>
        <div className={classes.Gear}>
                <img src={outboard} alt='gear-photo' />
                <img src={mics} alt='mic-photo' />
        </div>
    </Aux>
);

export default gear;