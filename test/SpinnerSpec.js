import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import {Spinner} from '../components/spinner';

describe('Spinner', () => {

  let instance, buttons, upButton, downButton, input;

  beforeEach(() => {
    instance = ReactTestUtils.renderIntoDocument(<Spinner initVal={6} min={5} max={8} btnWrapperClass={['btn-wrapper']} />);
    buttons = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'button');
    input = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'input');
    upButton = ReactDOM.findDOMNode(buttons[0]);
    downButton = ReactDOM.findDOMNode(buttons[1]);
  });

  it('should have class spinner', () => {
    assert.ok(ReactDOM.findDOMNode(instance).classList.contains('spinner'));
  });
});
