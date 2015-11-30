import React from 'react';

export class Input extends React.Component {
  render() {
    return (
      <input {...this.props} type={this.props.inputType} defaultValue={this.props.default} />
    );
  }
}
