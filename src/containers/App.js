import React, { Component } from 'react';
import { render } from 'react-dom';
import { RoutineWork } from '../components/RoutineWork';
import Exercise from '../components/Exercise';

export default class App extends Component {
  render() {
    const stretch = [
      { exerciseName: "Stretch1" },
      { exerciseName: "Stretch2" },
      { exerciseName: "Stretch3" },
      { exerciseName: "Stretch4" },
      { exerciseName: "Stretch5" },
      { exerciseName: "Stretch6" },
      { exerciseName: "Stretch7" }
    ];
    return (<ul>
      <RoutineWork routineClassName={['pure-g', 'stretch-routine']} 
                   routineName="Dynamic Stretches" exercises={stretch} />
      <RoutineWork routineClassName={['pure-g', 'bodyline-routine']} routineName="Bodyline work"
                   exercises={stretch.slice(2)} />
      <RoutineWork routineClassName={['pure-g', 'skillwork-routine']} routineName="Skill work"
                   exercises={stretch.slice(5)} />
      <RoutineWork routineClassName={['pure-g', 'strength-routine']} routineName="Strength work"
                   exercises={stretch.slice(1)} />
    </ul>);
  }
}

