import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import Exercise from './Exercise';

export class Routine extends Component {
  render() {
    const classes = [this.props.routineClassName, 'routine', 'pure-u-1', 'pure-u-md-1-2'];
    return (
      <div {...this.props} className={classNames(classes)}>
        <span className={'routine-label'}>{this.props.name}</span>
        {this.props.exercises.map(ex => <Exercise name={ex.name} 
                                  key={ex.name + this.props.name} />)}
      </div>
    );
  }
}

Routine.propTypes = {
  name: PropTypes.string.isRequired,
  exercises: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired
  })).isRequired
}
