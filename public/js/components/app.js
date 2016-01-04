import React from 'react';

import {RoutineWork} from './routinework';

export class App extends React.Component {
  render() {
    return (
      <ul>
        <RoutineWork routineClassName={['container', 'stretch-routine']}>
          <span className={'routine-label'}>Stretch</span>
          <div className={'form-group'}>
            <input type="number" min="5" max="10" step="1" className={'routine-exercise form-control'} />
          </div>
          <div className={'form-group'}>
            <input type="number" min="5" max="10" step="1" className={'routine-exercise form-control'} />
          </div>
          <div className={'form-group'}>
            <input type="number" min="5" max="10" step="1" className={'routine-exercise form-control'} />
          </div>
          <div className={'form-group'}>
            <input type="number" min="5" max="10" step="1" className={'routine-exercise form-control'} />
          </div>
          <div className={'form-group'}>
            <input type="number" min="5" max="10" step="1" className={'routine-exercise form-control'} />
          </div>
          <div className={'form-group'}>
            <input type="number" min="5" max="10" step="1" className={'routine-exercise form-control'} />
          </div>
          <div className={'form-group'}>
            <input type="number" min="5" max="10" step="1" className={'routine-exercise form-control'} />
          </div>
        </RoutineWork>
        <RoutineWork routineClassName={['container', 'bodyline-routine']} />
        <RoutineWork routineClassName={['container', 'skillwork-routine']} />
        <RoutineWork routineClassName={['container', 'strength-routine']} />
      </ul>
    );
  }
}
