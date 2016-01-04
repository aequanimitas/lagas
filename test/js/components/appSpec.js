import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react/lib/ReactTestUtils';

import {App} from '../../../public/js/components/app';

describe('App spa', () => {
  let app, routines, routineWrapper;

  beforeEach(() => {
    app = ReactTestUtils.renderIntoDocument(<App />);
    routineWrapper = ReactTestUtils.scryRenderedDOMComponentsWithTag(app, 'ul');
    routines = ReactTestUtils.scryRenderedDOMComponentsWithClass(app, 'container');
  });
  
  describe('stretch routine', () => {
    let stretchRoutine;
    beforeEach(() => {
      stretchRoutine = ReactDOM.findDOMNode(routines[0]);
    });

    it('should have class stretch-routine', () => {
      assert.ok(stretchRoutine.classList.contains('stretch-routine'));
    });

    it('should have label with text "Dynamic Stretches"', () => {
      let lbl = stretchRoutine.getElementsByClassName('routine-label');
      assert.equal(lbl.length, 1);
    });

    it('should have 7 dynamic stretches', () => {
      assert.equal(stretchRoutine.getElementsByClassName('routine-exercise').length, 7);
    });
  });

  it('bodyline routine', () => {
    let bodylineRoutine = ReactDOM.findDOMNode(routines[1]);
    assert.ok(bodylineRoutine.classList.contains('bodyline-routine'));
  });

  it('skillwork routine', () => {
    let skillworkRoutine = ReactDOM.findDOMNode(routines[2]);
    assert.ok(skillworkRoutine.classList.contains('skillwork-routine'));
  });

  it('strength routine', () => {
    let strengthRoutine = ReactDOM.findDOMNode(routines[3]);
    assert.ok(strengthRoutine.classList.contains('strength-routine'));
  });

});
