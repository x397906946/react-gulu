import React from 'react';
import Icon from '../icon';
import * as renderer from 'react-test-renderer';
import {mount} from 'enzyme';

describe('Icon', () => {
  it('render success', () => {
    const json = renderer.create(<Icon/>).toJSON();
    expect(json).toMatchSnapshot();
  });
  it('onClick', () => {
    const fn = jest.fn();
    const component = mount(<Icon name="alipay" onClick={fn}/>);
    component.find('svg').simulate('click');
    expect(fn).toBeCalled();
  });
});
