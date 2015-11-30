import React from 'react';

export class Input extends React.Component {
  render() {
    return (
      <input type={this.props.inputType} defaultValue={this.props.default} value={this.props.value} />
    );
  }
}
