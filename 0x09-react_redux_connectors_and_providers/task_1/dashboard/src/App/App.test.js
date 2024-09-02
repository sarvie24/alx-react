import React from 'react';
import { mapStateToProps } from './App';
import { fromJS } from 'immutable';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});

describe('mapStateToProps', () => {
  it('should return the right object when passing the state', () => {
    const state = fromJS({
      ui: {
        isLoggedIn: true,
        isDrawerOpen: true,
      },
    });
    const expected = {
      isLoggedIn: true,
      drawerOpen: true,
    };
    expect(mapStateToProps(state)).toEqual(expected);
  });
});
