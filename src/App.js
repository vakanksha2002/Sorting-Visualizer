import React, { Component } from 'react';

import Bar from './components/Bar'
import Header from './components/Header';
import bubbleSort from './algorithms/BubbleSort';
import insertionSort from './algorithms/InsertionSort';
import selectionSort from './algorithms/SelectionSort';

import './App.css';

class App extends Component {
  state = {
    array: [],
    steps: [],
    colorKeys: [],
    colors: [],
    timeouts: [],
    currentStep: 0,
    count: 40,
    delay: 1,
    algorithm: '',
  };

  componentDidMount() {
    this.newArr();
  }

  startOperation = () => {
    let steps = this.state.steps;
    let colors = this.state.colors;

    let timeouts = [];
    let i = 0;
    while (i < steps.length - this.state.currentStep) {
      let timeout = setTimeout(() => {
        let currentStep = this.state.currentStep;
        this.setState({
          array: steps[currentStep],
          colorKeys: colors[currentStep],
          currentStep: currentStep + 1,
        });
        timeouts.push(timeout);
      }, this.state.delay * i/4);
      i++;
    }
    this.setState({timeouts: timeouts});
  };

  clearColorKeys = () => {
    let blank = new Array(this.state.count).fill(0);
    this.setState({
      currentStep: 0,
      colorKeys: blank,
      colors: [blank],
    });
  };

  clearTimeouts = () => {
    this.state.timeouts.forEach((timeout) => clearTimeout(timeout));
    this.setState({ timeouts: [] });
  };

  buildBubbleSteps = () => {
    this.clearColorKeys();
    this.clearTimeouts();

    let array = this.state.array.slice();
    let steps = this.state.steps.slice();
    let colors = this.state.colors.slice();

    bubbleSort(array, steps, colors);

    this.setState({
			steps: steps,
			colors: colors,
		},()=>this.startOperation());
  }

  buildInsertionSteps = () => {
    this.clearColorKeys();
    this.clearTimeouts();

    let array = this.state.array.slice();
    let steps = this.state.steps.slice();
    let colors = this.state.colors.slice();

    insertionSort(array, steps, colors);

    this.setState({
			steps: steps,
			colors: colors,
		},()=>this.startOperation());
  }

  buildSelectionSteps = () => {
    this.clearColorKeys();
    this.clearTimeouts();

    let array = this.state.array.slice();
    let steps = this.state.steps.slice();
    let colors = this.state.colors.slice();

    selectionSort(array, steps, colors);

    this.setState({
			steps: steps,
			colors: colors,
		},()=>this.startOperation());
  }

  newNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  newArr = () => {
    this.setState({delay:0});
    this.setState({delay:100});
    this.clearColorKeys();
    this.clearTimeouts();

    let count = this.state.count;
    let arr = [];
    for (let i = 0; i < count; i++) {
      arr.push(this.newNumber(20, 200));
    }

    this.setState({
      array: arr,
      steps: [arr],
      count: count,
      currentStep: 0
    });
  };

  render() {
    const bars = this.state.array.map((value, index) => {
      return <Bar key={index} index={index} length={value} colorKey={this.state.colorKeys[index]} />
    })
    return (
      <div className='app'>
        <Header/>
        <div className='frame'>{bars}</div>
        <div className='main'>
          <button className='button reset' onClick={this.newArr}> ⟳ </button>
          <button className='button' onClick={this.buildBubbleSteps}>Bubble Sort</button>
          <button className='button' onClick={this.buildInsertionSteps}>Insertion Sort</button>
          <button className='button' onClick={this.buildSelectionSteps}>Selection Sort</button>
        </div> 
      </div>
    );
  };
}

export default App;