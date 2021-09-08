import React, { Component } from 'react';
import Display from '../components/random-color/Display';

const colors = [
  '#EF476F',
  '#FFD166',
  '#06D6A0',
  '#118AB2',
  '#FFAFCC',
];

export default class RandomColor extends Component {

  state = {
    bgColor: '#FFAFCC',
  }

  colorChange = () => {
    return colors.map(item => this.setState = { bgColor: item });
  }


  render() {
    return (
      <div>
        <Display bgColor={this.state.bgColor}/>
      </div>
    );
  }
}

