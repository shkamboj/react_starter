import React, { Component } from 'react';
import './Pure_js.css';

import image from './image.jpg'; 

class Pure_js extends Component{
  render(){
    return React.createElement('div',{className: 'Pure_js'}, null, <img src={image} />);
  }
}

export default Pure_js;