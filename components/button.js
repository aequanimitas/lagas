import React from 'react';
import classNames from 'classnames';

export class Button extends React.Component {
  render() {
    return (
      <button className={classNames(this.props.btnClass)}>
        {this.props.children}
      </button>
    );
  }
}
