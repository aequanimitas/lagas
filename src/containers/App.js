import React, { Component } from 'react';
import { render } from 'react-dom';
import { Routine } from '../components/Routine';
import Exercise from '../components/Exercise';

export default class App extends Component {
  render() {
    const stretch = [
      { name: "Stretch1" },
      { name: "Stretch2" },
      { name: "Stretch3" },
      { name: "Stretch4" },
      { name: "Stretch5" },
      { name: "Stretch6" },
      { name: "Stretch7" }
    ];
    return (<div className={'just-wrap pure-form pure-form-stacked'}>
      <Routine routineClassName={['stretch-routine']} 
                   name="Dynamic Stretches" exercises={stretch} />
      <Routine routineClassName={['bodyline-routine']} name="Bodyline work"
                   exercises={stretch.slice(2)} />
      <Routine routineClassName={['skillwork-routine']} name="Skill work"
                   exercises={stretch.slice(5)} />
      <Routine routineClassName={['strength-routine']} name="Strength work"
                   exercises={stretch.slice(1)} />
    </div>);
  }
}

