import 'rc-slider/assets/index.css';

import React from 'react';

import Slider from 'rc-slider';

class customSlider extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        value: 50,
      };
    }
    onSliderChange = (value) => {
      console.log(value);
      this.setState({
        value,
      });
    }
    onAfterChange = (value) => {
      console.log(value); //eslint-disable-line
    }
    render() {
      return (
        <customSlider value={this.state.value}
          onChange={this.onSliderChange} onAfterChange={this.onAfterChange}
        />
      );
    }
  }
  
