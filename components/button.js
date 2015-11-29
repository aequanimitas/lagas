import React from 'react';
import classNames from 'classnames';

export class Button extends React.Component {
  render() {
    return (
      <button onClick={this.props.btnOnClick} className={classNames(this.props.btnClass)}>
        {this.props.children}
      </button>
    );
  }
}
