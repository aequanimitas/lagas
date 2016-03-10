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
      if ((exCount + 1) > 8) {
        return null;
      } else {
        this.setState({count: exCount + 1});
      }
    } else if(arg === 'dec') {
      if((exCount - 1) < 5) {
        return null;
      } else {
        this.setState({count: exCount - 1});
      }
    } else {
      return null;
    }
  }

  render() {
    return ( <div>
		    <div className={"pure-u-11-24"}> <input type="text" /> </div>
		    <div className={"pure-u-11-24"}>
		    <div className={"spinner"}>
        <input onChange={this.handleOnChange.bind(this)} value={this.state.count} />
	<div className={"btn-wrapper"}>
        <Button onClick={this.changeCount.bind(this, 'inc')} 
	        btnClass={['btn', 'up-button', 'up-down-buttons']}><i></i>
        </Button>
        <Button onClick={this.changeCount.bind(this, 'dec')} 
	        btnClass={['btn', 'down-button', 'up-down-buttons']}><i></i>
        </Button>
	</div>
      </div>
      </div>
      </div>
    );
  }
}

export default Exercise;
