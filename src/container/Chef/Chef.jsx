import React from 'react';
import { images } from '../../constants'
import './Chef.css';
import { SubHeading } from '../../components';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img_reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word"  />
      <h1 className="headtext__cormorant">What We Beleive In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={ images.quote } alt="quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, officiis.</p>
        </div>
          <p className="p__opensans">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi harum sequi consectetur! Minima molestiae iste inventore, doloremque itaque assumenda sint deleniti enim est quasi voluptate.</p> </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
        </div>
    </div>
  </div>
);

export default Chef;
