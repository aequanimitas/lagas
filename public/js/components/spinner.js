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
    let temp;
    if (arg === 'inc') {
      temp = parseInt(this.state.count, 10) + 1;
    } else if (arg === 'dec') {
      temp = parseInt(this.state.count, 10) - 1;
    } else {
      temp = parseInt(this.state.count, 10);
    }
    this.setState({count: temp});
  }

  withinBounds(x) {
    console.log(this.props);
    console.log(x);
    return false;
  }

  render() {
    return (
     <form onSubmit={this.handleSubmit}>
      <div className={'spinner'}>
        <input type="text" required/>
        <input type="number" className={'form-control'} min="1" max="15"i defaultValue="5"/>
      </div>
      <button type="submit">Submit</button>
      </form>
    );
  }
}
