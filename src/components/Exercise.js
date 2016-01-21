import React from 'react';
import classNames from 'classnames';

export default class Exercise extends React.Component {
  render() {
    return ( <div className={'pure-control-group'}>
         <span>{this.props.exerciseName}</span>
         <input type="number" min="5" max="10" step="1" className={'routine-exercise form-control'} />
       </div>
    );
  }
}
