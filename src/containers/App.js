import React, { Component } from 'react';
import { render } from 'react-dom';
import { RoutineWork } from '../components/RoutineWork';

export default class App extends Component {
  render() {
    return (<ul>
        <RoutineWork routineClassName={['container', 'stretch-routine', 'routine']}>
         <span className={'routine-label'}>Dynamic Stretches</span>
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
     <RoutineWork routineClassName={['container', 'bodyline-routine', 'routine']}>
         <span className={'routine-label'}>Bodyline work</span>
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
       <RoutineWork routineClassName={['container', 'skillwork-routine', 'routine']}>
         <span className={'routine-label'}>Skill work</span>
         <div className={'form-group'}>
           <input type="number" min="5" max="10" step="1" className={'routine-exercise form-control'} />
         </div>
         <div className={'form-group'}>
           <input type="number" min="5" max="10" step="1" className={'routine-exercise form-control'} />
         </div>
       </RoutineWork>
       <RoutineWork routineClassName={['container', 'strength-routine', 'routine']}>
         <span className={'routine-label'}>Strength work</span>
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
     </ul>);
 }
}

