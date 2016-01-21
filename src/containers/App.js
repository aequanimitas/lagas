import React, { Component } from 'react';
import { render } from 'react-dom';
import { RoutineWork } from '../components/RoutineWork';
import Exercise from '../components/Exercise';

export default class App extends Component {
  render() {
    return (<ul>
      <RoutineWork routineClassName={['pure-g', 'pure-u-1', 'stretch-routine', 'routine']}>
        <span className={'routine-label'}>Dynamic Stretches</span>
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
      </RoutineWork>
      <RoutineWork routineClassName={['pure-g', 'bodyline-routine', 'routine']}>
        <span className={'routine-label'}>Bodyline work</span>
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
      </RoutineWork>
      <RoutineWork routineClassName={['pure-g', 'skillwork-routine', 'routine']}>
        <span className={'routine-label'}>Skill work</span>
        <Exercise />
        <Exercise />
      </RoutineWork>
      <RoutineWork routineClassName={['pure-g', 'strength-routine', 'routine']}>
        <span className={'routine-label'}>Strength work</span>
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
        <Exercise />
      </RoutineWork>
    </ul>);
  }
}

