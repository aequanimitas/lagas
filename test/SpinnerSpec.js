import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import ReactDOM from 'react-dom';
import {Spinner} from '../components/spinner';
import {Button} from '../components/button';

describe ('Spinner', () => {
  const intoDoc = ReactTestUtils.renderIntoDocument;
  const withTag = ReactTestUtils.findRenderedDOMComponentWithTag;


  it('should have an input node', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Spinner />
    );
    assert.ok(ReactTestUtils.findRenderedDOMComponentWithTag(instance, 'div'));
  });

  it('should have two buttons', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Spinner>
        <Button></Button>
        <Button></Button>
      </Spinner>
    );
    let buttons = ReactDOM.findDOMNode(instance).children;
    assert.equal(buttons.length, 2);
    assert.equal(buttons[0].nodeName, 'BUTTON');
    assert.equal(buttons[1].nodeName, 'BUTTON');
  });

  it.skip('buttons should have icons inside them', () => {
  
  });
});
