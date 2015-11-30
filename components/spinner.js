import React from 'react';
import {Button} from '../components/button';
import {Input} from '../components/input';

export class Spinner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initVal, defaultValue: 12}
  }

  handleOnChange(event) {
    this.setState({count: event.target.value});
  }

  changeCount(arg) {
    if (arg === 'inc') {
      this.setState({count: parseInt(this.state.count, 10) + 1});
    } else if (arg === 'dec') {
      this.setState({count: parseInt(this.state.count, 10) - 1});
    }
  }

  render() {
    return (
      <div>
        <Input onChange={this.handleOnChange.bind(this)} value={this.state.count} />
        <Button onClick={this.changeCount.bind(this, 'inc')} btnClass={['btn', 'up-button', 'up-down-buttons']}><i></i></Button>
        <Button onClick={this.changeCount.bind(this, 'dec')} btnClass={['btn', 'down-button', 'up-down-buttons']}><i></i></Button>
      </div>
    );
  }
}

Spinner.propTypes = {
  initVal: React.PropTypes.number.isRequired
}
