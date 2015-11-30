import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import {Spinner} from '../components/spinner';

describe('Spinner', () => {

  let instance, buttons, upButton, downButton, input;

  beforeEach(() => {
    instance = ReactTestUtils.renderIntoDocument(<Spinner initVal={6}/>);
    buttons = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'button');
    input = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'input');
    upButton = ReactDOM.findDOMNode(buttons[0]);
    downButton = ReactDOM.findDOMNode(buttons[1]);
  });

  it('should be a div', () => {
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
  });

  describe('buttons', () => {
    it('should be two', () => {
      assert.equal(buttons.length, 2);
      assert.equal(upButton.tagName, 'BUTTON');
      assert.ok(upButton.classList.contains('btn'));
      assert.ok(upButton.classList.contains('up-button'));
      assert.ok(upButton.classList.contains('up-down-buttons'));
      assert.ok(downButton.classList.contains('btn'));
      assert.ok(downButton.classList.contains('down-button'), 'should have class down-button');
      assert.ok(downButton.classList.contains('up-down-buttons'));
    });

    it('should have icons inside them', () => {
      assert.equal(upButton.children.length, 1);
      assert.ok(upButton.children[0].tagName, 'icon');
      assert.equal(downButton.children.length, 1);
      assert.ok(downButton.children[0].tagName, 'icon');
    });

    it('should be wrapped in a div', () => {
      assert.fail('Buttons are not wrapped');
    });
  });

  it('on click, should update the input value', () => {
    ReactTestUtils.Simulate.click(downButton);
    assert.equal(instance.state.count, 5);
    assert.equal(input.value, 5);
    ReactTestUtils.Simulate.click(upButton);
    assert.equal(instance.state.count, 6);
    assert.equal(input.value, 6);
  });
});
