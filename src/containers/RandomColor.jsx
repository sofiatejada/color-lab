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
    bgColor: '',
  }

  colorChange = () => {
    const stuff = Math.floor(Math.random() * colors.length);

    this.setState({ bgColor: colors[stuff] });
  }

  componentDidMount() {
    setInterval(() => this.colorChange(), 1000);
  }


  render() {
    return (
      <div>
        <Display bgColor={this.state.bgColor}/>
      </div>
    );
  }
}

