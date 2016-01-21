import React from 'react';
import ReactDOM from 'react-dom';
import ReactTestUtils from 'react/lib/ReactTestUtils';
import expect from 'expect';

import App from '../../src/containers/App';

const {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag,
  scryRenderedDOMComponentsWithClass
} = ReactTestUtils;

describe('App defaults', () => {
  let app, routines, routineWrapper, routine;

  beforeEach(() => {
    app = renderIntoDocument(<App />);
    routines = scryRenderedDOMComponentsWithClass(app, 'routine');
  });
  
  describe('stretch routine', () => {
    let routine;
    beforeEach(() => {
      routine = ReactDOM.findDOMNode(routines[0]);
    });

    it('should have class stretch-routine', () => {
      expect(routine.classList.contains('stretch-routine')).toBe(true);
    });

    it('should have class routine', () => {
      expect(routine.classList.contains('routine')).toBe(true);
    });

    it('should have label with text "Dynamic Stretches"', () => {
      let lbl = routine.getElementsByClassName('routine-label');
      expect(lbl.length).toEqual(1);
      expect(lbl[0].innerText, 'Dynamic Stretches')
    });

    it('should have 7 dynamic stretches', () => {
      expect(routine.getElementsByClassName('routine-exercise').length).toEqual(7);
      expect(routine.getElementsByClassName('pure-control-group').length).toEqual(7);
    });
  });

  describe('bodyline routine', () => {
    beforeEach(() => {
      routine = ReactDOM.findDOMNode(routines[1]);
    });

    it('should have class routine', () => {
      expect(routine.classList.contains('routine')).toBe(true);
    });

    it('should have label with text "Bodyline Work"', () => {
      let lbl = routine.getElementsByClassName('routine-label');
      expect(lbl.length).toEqual(1);
      expect(lbl[0].textContent).toEqual('Bodyline work');
    });

    it('should have class bodyline-routine', () => {
      expect(routine.classList.contains('bodyline-routine')).toBe(true);
    });

    it('should have 5 bodyline exercises', () => {
      expect(routine.getElementsByClassName('routine-exercise').length).toEqual(5);
      expect(routine.getElementsByClassName('pure-control-group').length).toEqual(5);
    });
  });

  describe('skillwork routine', () => {
    beforeEach(() => {
      routine = ReactDOM.findDOMNode(routines[2]);
    });

    it('should have class routine', () => {
      expect(routine.classList.contains('routine')).toBe(true);
    });

    it('should have label with text "Skillwork"', () => {
      let lbl = routine.getElementsByClassName('routine-label');
      expect(lbl.length).toEqual(1);
      expect(lbl[0].textContent).toEqual('Skill work');
    });

    it('should have class skillwork-routine', () => {
      expect(routine.classList.contains('skillwork-routine')).toBe(true);
    });
    
    it('should have 2 skill-work exercises', () => {
      expect(routine.getElementsByClassName('routine-exercise').length).toEqual(2);
      expect(routine.getElementsByClassName('pure-control-group').length).toEqual(2);
    });
  });

  describe('strength routine', () => {
    beforeEach(() => {
      routine = ReactDOM.findDOMNode(routines[3]);
    });

    it('should have class routine', () => {
      expect(routine.classList.contains('routine')).toBe(true);
    });

    it('should have class strength-routine', () => {
      expect(routine.classList.contains('strength-routine')).toBe(true);
    });

    it('should have label with text "Strength work"', () => {
      let lbl = routine.getElementsByClassName('routine-label');
      expect(lbl.length).toEqual(1);
      expect(lbl[0].textContent).toEqual('Strength work');
    });

    it('should have 6 strength exercises', () => {
      expect(routine.getElementsByClassName('routine-exercise').length).toEqual(6);
      expect(routine.getElementsByClassName('pure-control-group').length).toEqual(6);
    });
  });
});
