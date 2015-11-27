import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';
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
    let buttons = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'button');
    assert.equal(buttons.length, 2);
  });

  it('buttons should have icons inside them', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Spinner>
        <Button><i></i></Button>
        <Button></Button>
      </Spinner>
    );
    let buttons = ReactTestUtils.scryRenderedDOMComponentsWithTag(instance, 'button');
    assert.equal(buttons[0].children.length, 1);
  });

  it.skip('input should also be rendered', () => {
    let instance = ReactTestUtils.renderIntoDocument(
      <Spinner>
        <Input></Input>
      </Spinner>
    );
  });

});
