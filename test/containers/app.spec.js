import React from 'react';
import TestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';

import App from '../../src/containers/App';

describe('App defaults', () => {
  it('should display one text box only', () => {
     let renderer = TestUtils.createRenderer();
     renderer.render(<App />);
     let output = renderer.getRenderOutput();
     expect(output.props.children.type.name).toBe('Exercise');
  });
});
