import React from 'react';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { shallow } from 'enzyme';
import Blogs from './Blogs';

describe("<Blogs />", () => {
  it("properly set the loading and blogs", () => {
    configure({ adapter: new Adapter() });
    const wrapper = shallow(<Blogs />);
    expect(wrapper.state('loading')).toEqual(false);
    expect(wrapper.state('blogs').length).toBe(0);
  });
});