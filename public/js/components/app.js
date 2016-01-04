import React from 'react';
import classNames from 'classnames';

import {RoutineWork} from './routinework';

export class App extends React.Component {
  render() {
    return (
      <ul>
        <RoutineWork routineClassName={['container', 'stretch-routine']}>
          <span className={'routine-label'}>Stretch</span>
          <input type="number" className={'routine-exercise'} />
          <input type="number" className={'routine-exercise'} />
          <input type="number" className={'routine-exercise'} />
          <input type="number" className={'routine-exercise'} />
          <input type="number" className={'routine-exercise'} />
          <input type="number" className={'routine-exercise'} />
          <input type="number" className={'routine-exercise'} />
        </RoutineWork>
        <RoutineWork routineClassName={['container', 'bodyline-routine']} />
        <RoutineWork routineClassName={['container', 'skillwork-routine']} />
        <RoutineWork routineClassName={['container', 'strength-routine']} />
      </ul>
    );
  }
}
