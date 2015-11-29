import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import {Spinner} from '../components/spinner';

describe ('Spinner', () => {
  const intoDoc = ReactTestUtils.renderIntoDocument;
  const withTag = ReactTestUtils.findRenderedDOMComponentWithTag;

  it('should have an input node', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Spinner />
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
  });

  describe('buttons', () => {
    let instance, buttons, upButton, downButton;
    beforeEach(() => {
      instance = ReactTestUtils.renderIntoDocument(<Spinner />);
      buttons = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'button');
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
      assert.equal(downButton.children.length, 1);
    });
  });
});
