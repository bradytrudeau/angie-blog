import React from 'react';
import HeroImg from '../../images/Hero-Small.png';
import './Hero.css';

const Hero = () => (
  <div className="hero">
    <img className="hero-img" src={HeroImg}></img>
  </div>
);

export default Hero;