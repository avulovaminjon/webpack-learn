import _ from 'lodash';
import printMe from './print.js';
import './style.css';
import Icon from './bg.jpg';
import numRef from './ref.json';

// function getComponent() {

//   return import('lodash')
//     .then(({ default: _ }) => {
//       const element = document.createElement('div');

//       element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//       element.classList.add('hello');

//       return element;
//     })
//     .catch((error) => 'An error occurred while loading the component');
//  }

// getComponent().then((component) => {
//   document.body.appendChild(component);
// });

//  async function

async function getComponent() {
  const element = document.createElement('div');
  const { default: _ } = await import('lodash');

  element.innerHTML = _.join(['Hello', 'webpack 5'], ' ');
  element.classList.add('hello');
  element.onclick = printMe.bind(null, "hello world1");
  return element;
 }

 getComponent().then((component) => {
   document.body.appendChild(component);
 });