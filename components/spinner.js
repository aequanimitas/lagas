import React from 'react';
import {Button} from '../components/button';

export class Spinner extends React.Component{
  render() {
    return (
      <div>
        <Button btnClass='btn up-button up-down-buttons'><i></i></Button>
        <Button btnClass='btn down-button up-down-buttons'><i></i></Button>
      </div>
    );
  }
};
