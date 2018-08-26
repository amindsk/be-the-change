import React from 'react';
import { shallow } from 'enzyme';
import { SkillList } from '../../components/SkillList';
import skills from '../fixtures/skills';

test('Should render SkillList correctly', () => {
    const wrapper = shallow(<SkillList skills={skills} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render SkillList with empty message', () => {
    const wrapper = shallow(<SkillList skills={[]} />);
    expect(wrapper).toMatchSnapshot();
});