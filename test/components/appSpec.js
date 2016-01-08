import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react/lib/ReactTestUtils';

import {App} from '../../public/js/components/app';

const {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  scryRenderedDOMComponentsWithClass
} = ReactTestUtils;

describe('App defaults', () => {
  let app, routines, routineWrapper, routine;

  beforeEach(() => {
    app = renderIntoDocument(<App />);
    routineWrapper = scryRenderedDOMComponentsWithTag(app, 'ul');
    routines = scryRenderedDOMComponentsWithClass(app, 'container');
  });
  
  describe('stretch routine', () => {
    let routine;
    beforeEach(() => {
      routine = ReactDOM.findDOMNode(routines[0]);
    });

    it('should have class stretch-routine', () => {
      assert.ok(routine.classList.contains('stretch-routine'));
    });

    it('should have class routine', () => {
      assert.ok(routine.classList.contains('routine'));
    });

    it('should have label with text "Dynamic Stretches"', () => {
      let lbl = routine.getElementsByClassName('routine-label');
      assert.equal(lbl.length, 1);
      assert.equal(lbl[0].innerText, 'Dynamic Stretches');
    });

    it('should have 7 dynamic stretches', () => {
      assert.equal(routine.getElementsByClassName('routine-exercise').length, 7);
      assert.equal(routine.getElementsByClassName('form-group').length, 7);
    });
  });

  describe('bodyline routine', () => {
    beforeEach(() => {
      routine = ReactDOM.findDOMNode(routines[1]);
    });

    it('should have class routine', () => {
      assert.ok(routine.classList.contains('routine'));
    });

    it('should have label with text "Bodyline Work"', () => {
      let lbl = routine.getElementsByClassName('routine-label');
      assert.equal(lbl.length, 1);
      assert.equal(lbl[0].innerText, 'Bodyline work');
    });

    it('should have class bodyline-routine', () => {
      assert.ok(routine.classList.contains('bodyline-routine'));
    });

    it('should have 5 bodyline exercises', () => {
      assert.equal(routine.getElementsByClassName('routine-exercise').length, 5);
      assert.equal(routine.getElementsByClassName('form-group').length, 5);
    });
  });

  describe('skillwork routine', () => {
    beforeEach(() => {
      routine = ReactDOM.findDOMNode(routines[2]);
    });

    it('should have class routine', () => {
      assert.ok(routine.classList.contains('routine'));
    });

    it('should have label with text "Skillwork"', () => {
      let lbl = routine.getElementsByClassName('routine-label');
      assert.equal(lbl.length, 1);
      assert.equal(lbl[0].innerText, 'Skill work');
    });

    it('should have class skillwork-routine', () => {
      assert.ok(routine.classList.contains('skillwork-routine'));
    });
    
    it('should have 2 skill-wrok exercises', () => {
      assert.equal(routine.getElementsByClassName('routine-exercise').length, 2);
      assert.equal(routine.getElementsByClassName('form-group').length, 2);
    });
  });

  describe('strength routine', () => {
    beforeEach(() => {
      routine = ReactDOM.findDOMNode(routines[3]);
    });

    it('should have class routine', () => {
      assert.ok(routine.classList.contains('routine'));
    });

    it('should have class strength-routine', () => {
      assert.ok(routine.classList.contains('strength-routine'));
    });

    it('should have label with text "Strength work"', () => {
      let lbl = routine.getElementsByClassName('routine-label');
      assert.equal(lbl.length, 1);
      assert.equal(lbl[0].innerText, 'Strength work');
    });

    it('should have 6 strength exercises', () => {
      assert.equal(routine.getElementsByClassName('routine-exercise').length, 6);
      assert.equal(routine.getElementsByClassName('form-group').length, 6);
    });
  });
});