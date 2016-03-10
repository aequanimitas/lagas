import React, {Component} from 'react';
import {Button} from './Button';

class Exercise extends Component {
  constructor(props) {
    super(props);
    this.state = {count: props.initVal, defaultValue: 12}
  }

  handleOnChange(event) {
    this.setState({count: event.target.value});
  }

  changeCount(arg) {
    let exCount = parseInt(this.state.count, 10);

      if (arg === 'inc') {
        this.setState({count: parseInt(this.state.count, 10) + 1});
      } else if (arg === 'dec') {
        this.setState({count: parseInt(this.state.count, 10) - 1});
      }
  }

  render() {
    return (<div>
        <input onChange={this.handleOnChange.bind(this)} value={this.state.count} />
        <Button onClick={this.changeCount.bind(this, 'inc')} 
	        btnClass={['btn', 'up-button', 'up-down-buttons']}><i></i>
        </Button>
        <Button onClick={this.changeCount.bind(this, 'dec')} 
	        btnClass={['btn', 'down-button', 'up-down-buttons']}><i></i>
        </Button>
      </div>
    );
  }
}

export default Exercise;
