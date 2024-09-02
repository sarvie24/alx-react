import React from 'react';
import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('App', () => {
  // Your existing tests here
});

describe('mapStateToProps', () => {
  it('should return the right object when passing the state', () => {
    const state = fromJS({
      ui: {
        isLoggedIn: true,
      },
    });
    const expected = {
      isLoggedIn: true,
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });
});
