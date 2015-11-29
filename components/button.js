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

Button.propTypes = {
  btnOnClick: React.PropTypes.func.isRequired,
  btnClass: React.PropTypes.array
};
