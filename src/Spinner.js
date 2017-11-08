import React, { Component } from 'react';
import spinner from './spinner.png';
import './Spinner.css';

class Spinner extends Component {
  render() {
    return (
      <div id="overlayContainer">
        <div id="overlay"/>
        <img src={spinner} id="spinner" alt="spinner" />
      </div>
    );
  }
}

export default Spinner;
