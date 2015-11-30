import React from 'react';
import {Button} from '../components/button';
import {Input} from '../components/input';

export class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initVal, defaultValue: 12}
  }

  changeCount(arg) {

    if (arg === 'inc') {
      this.setState({count: this.state.count + 1});
    } else if (arg === 'dec') {
      this.setState({count: this.state.count - 1});
    }
  }

  render() {
    return (
      <div>
        <Input value={this.state.count} default={this.state.defaultValue}/>
        <Button onClick={this.changeCount.bind(this, 'inc')} btnClass={['btn', 'up-button', 'up-down-buttons']}><i></i></Button>
        <Button onClick={this.changeCount.bind(this, 'dec')} btnClass={['btn', 'down-button', 'up-down-buttons']}><i></i></Button>
      </div>
    );
  }
}

Spinner.propTypes = {
  initVal: React.PropTypes.number.isRequired
}
