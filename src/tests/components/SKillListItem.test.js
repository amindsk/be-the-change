import React from 'react';
import { shallow } from 'enzyme';
import { SkillListItem } from '../../components/SkillListItem';
import skills from '../fixtures/skills';

test('Should render SkillListItem correctly', () => {
    const wrapper = shallow(<SkillListItem {...skills[0]} />);
    expect(wrapper).toMatchSnapshot();
});