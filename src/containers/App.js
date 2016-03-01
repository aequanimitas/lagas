import React, { Component } from 'react';
import { render } from 'react-dom';
import { Routine } from '../components/Routine';
import Exercise from '../components/Exercise';

export default class App extends Component {
  render() {
    return <div>Lagas</div>
  }
  oldoldold() {
    return <div className={'just-wrap pure-form pure-form-stacked'}>
              <Exercise />
    </div>
  }
}

