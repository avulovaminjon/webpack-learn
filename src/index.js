import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Icon from './bg.jpg';

function component() {
    const element = document.createElement('div');
  
    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack 5'], ' ');
    element.classList.add('hello');

    // // Add the image to our existing div.
    // const myIcon = new Image();
    // myIcon.src = Icon;

    // element.appendChild(myIcon);

    return element;
  }
  
  document.body.appendChild(component());