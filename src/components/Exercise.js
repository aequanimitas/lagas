import React from 'react';
import classNames from 'classnames';

export default class Exercise extends React.Component {
  render() {
    return ( <div className={classNames('pure-control-group', 'pure-u-1', 'pure-u-md-1-3')}>
         <label htmlFor={this.props.name}>{this.props.name}</label>
         <input type="number" min="5" max="10" step="1" id={this.props.name} className={'pure-u-23-24 routine-exercise form-control'} />
       </div>
    );
  }
}
