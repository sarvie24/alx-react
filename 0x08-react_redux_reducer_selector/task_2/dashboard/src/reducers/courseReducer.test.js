import React from 'react';
import { courseReducer } from './courseReducer';
import { FETCH_COURSE_SUCCESS, SELECT_COURSE, UNSELECT_COURSE } from '../actions/courseActionTypes';

describe('courseReducer', () => {
  it('returns an empty array as default state', () => {
    expect(courseReducer(undefined, {})).toEqual([]);
  });

  it('returns the data passed when FETCH_COURSE_SUCCESS is dispatched', () => {
    const data = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];
    expect(courseReducer(undefined, { type: FETCH_COURSE_SUCCESS, data })).toEqual([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ]);
  });

  it('returns the data with the right item updated when SELECT_COURSE is dispatched', () => {
    const state = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ];
    expect(courseReducer(state, { type: SELECT_COURSE, index: 1 })).toEqual([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ]);
  });

  it('returns the data with the right item updated when UNSELECT_COURSE is dispatched', () => {
    const state = [
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: true, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ];
    expect(courseReducer(state, { type: UNSELECT_COURSE, index: 1 })).toEqual([
      { id: 1, name: 'ES6', isSelected: false, credit: 60 },
      { id: 2, name: 'Webpack', isSelected: false, credit: 20 },
      { id: 3, name: 'React', isSelected: false, credit: 40 }
    ]);
  });
});
