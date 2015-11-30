import React from 'react';
import {Button} from '../components/button';
import {Input} from '../components/input';

export class Spinner extends React.Component {
  render() {
    return (
      <div>
        <Input />
        <Button btnClass={['btn', 'up-button', 'up-down-buttons']} btnOnClick={() => {}}><i></i></Button>
        <Button btnClass={['btn', 'down-button', 'up-down-buttons']} btnOnClick={() => {}}><i></i></Button>
      </div>
    );
  }
}
