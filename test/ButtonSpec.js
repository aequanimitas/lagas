import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';

import {Button} from '../components/button';

describe('Increment - Decrement Buttons', () => {
  var withTag = ReactTestUtils.findRenderedDOMComponentWithTag,
      withClass = ReactTestUtils.findRenderedDOMComponentWithClass;

  it('should just exist', () => {
    let button = ReactTestUtils.renderIntoDocument(<Button />);
    assert.ok(withTag(button, 'button'))
  });

  it('should have class btn', () => {
    let button = ReactTestUtils.renderIntoDocument(
      <Button btnClass='btn up-button up-down-buttons' />
    );
    assert.ok(withClass(button, 'btn'));
    assert.ok(withClass(button, 'up-button'));
    assert.ok(withClass(button, 'up-down-buttons'));
  });
});
