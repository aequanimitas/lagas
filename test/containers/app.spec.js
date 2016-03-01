import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';

import App from '../../src/containers/App';

describe('App defaults', () => {
  it('should display one text box only', () => {
     let renderer = TestUtils.createRenderer();
     renderer.render(<App />);
     let output = renderer.getRenderOutput();
     console.log(output);
     expect(output.props.children.length).toBe(1);
  });
});
