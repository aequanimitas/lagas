import React from 'react';
import classNames from 'classnames';

export default class Exercise extends React.Component {
  render() {
    return ( <div className={'pure-control-group'}>
         <label htmlFor={this.props.name}>{this.props.name}</label>
         <input type="number" min="5" max="10" step="1" id={this.props.name} className={'routine-exercise form-control'} />
       </div>
    );
  }
}
