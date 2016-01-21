import React from 'react';
import classNames from 'classnames';

export class RoutineWork extends React.Component {
  render() {
    return (
      <div {...this.props} className={classNames(this.props.routineClassName)}>
        {this.props.children}
      </div>
    );
  }
}
