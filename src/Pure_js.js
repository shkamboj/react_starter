import React, { Component } from 'react';
import './Pure_js.css';



class Pure_js extends Component{
  render(){
    return React.createElement('div',{className: 'Pure_js'}, null, React.createElement('div', 'h1', 'with pure javascript : basically how jsx works'));
  }
}

export default Pure_js;