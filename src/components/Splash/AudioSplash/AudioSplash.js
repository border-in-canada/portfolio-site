import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/images/press-pic.jpg';
import './AudioSplash.css';

const audioSplash = (props) => {
    return (
    <div className="imgWrapper">
      <Link to='/audio'><img src={image} alt='studio-pic' /></Link> 
    </div>
    );
}

export default audioSplash;