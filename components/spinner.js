import React from 'react';

export class Spinner extends React.Component{
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
};
