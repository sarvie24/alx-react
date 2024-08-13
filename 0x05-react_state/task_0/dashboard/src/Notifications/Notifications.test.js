import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

describe('Notifications component', () => {
  it('should call handleDisplayDrawer when menu item is clicked', () => {
    const handleDisplayDrawerSpy = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={false} handleDisplayDrawer={handleDisplayDrawerSpy} handleHideDrawer={() => {}} />
    );
    wrapper.find('button').first().simulate('click');
    expect(handleDisplayDrawerSpy).toHaveBeenCalledTimes(1);
  });

  it('should call handleHideDrawer when close button is clicked', () => {
    const handleHideDrawerSpy = jest.fn();
    const wrapper = shallow(
      <Notifications displayDrawer={true} handleDisplayDrawer={() => {}} handleHideDrawer={handleHideDrawerSpy} />
    );
    wrapper.find('button').last().simulate('click');
    expect(handleHideDrawerSpy).toHaveBeenCalledTimes(1);
  });
});
