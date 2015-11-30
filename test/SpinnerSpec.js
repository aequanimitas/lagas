import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import {Spinner} from '../components/spinner';

describe('Spinner', () => {
  it('should be a div', () => {
    let instance = ReactTestUtils.renderIntoDocument(<Spinner />);
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
  });

  describe('buttons', () => {
    let instance, buttons, upButton, downButton, input;
    beforeEach(() => {
      instance = ReactTestUtils.renderIntoDocument(<Spinner />);
      buttons = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'button');
      input = ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'input');
      upButton = ReactDOM.findDOMNode(buttons[0]);
      downButton = ReactDOM.findDOMNode(buttons[1]);
    });

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
    it.skip('on click, should update the input value', () => {
      ReactTestUtils.Simulate.click(upButton);
      assert.equal(input.state.value, 5);
    });
  });
});
