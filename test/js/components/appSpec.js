import React from 'react';
import ReactTestUtils from 'react/lib/ReactTestUtils';

import {App} from '../../../public/js/components/app';

describe('App spa', () => {
  let withClass = ReactTestUtils.findRenderedDOMComponentWithClass;
  let withTag = ReactTestUtils.findRenderedDOMComponentWithTag;

  it('should have 4 containers', () => {
    let app = ReactTestUtils.renderIntoDocument(
      <App />
    );
    let routines = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'div');
    assert.ok(withTag(app, 'div'));
    assert.ok(withClass(app, 'container'));
    assert.equal(routines.length, '4');
  });
});
