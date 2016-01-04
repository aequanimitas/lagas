import React from 'react';
import classNames from 'classnames';

export class App extends React.Component {
  render() {
    return (
      <div className={classNames('container')}>
        <div className={classNames('container')}></div>
        <div className={classNames('container')}></div>
        <div className={classNames('container')}></div>
        <div className={classNames('container')}></div>
      </div>
    );
  }
}
