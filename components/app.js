import React from 'react';
import {Spinner} from './spinner';

export class App extends React.Component {
  render() {
    return (
      <div>
        <Spinner initVal={6}/>
      </div>
    );
  }
}
