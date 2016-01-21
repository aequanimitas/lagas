import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Exercise from './Exercise';

export class RoutineWork extends Component {
  render() {
    return (
      <div {...this.props} className={classNames(this.props.routineClassName, 'routine')}>
        <span className={'routine-label'}>{this.props.routineName}</span>
        {this.props.exercises.map(ex => <Exercise exerciseName={ex.exerciseName} 
                                  key={ex.exerciseName + this.props.routineClassName} />)}
      </div>
    );
  }
}

RoutineWork.propTypes = {
  routineName: PropTypes.string.isRequired,
  exercises: PropTypes.arrayOf(PropTypes.shape({
    exerciseName: PropTypes.string.isRequired
  })).isRequired
}
