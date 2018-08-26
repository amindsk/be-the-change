import React from 'react';
import { shallow } from 'enzyme';
import SkillForm from '../../components/SkillForm';
import skills from '../fixtures/skills';

test('Should render SkillForm correctly', () => {
    const wrapper = shallow(<SkillForm />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render SkillForm correctly with expense data', () => {
    const wrapper = shallow(<SkillForm skill={skills[1]} />);
    expect(wrapper).toMatchSnapshot();
});

test('Should render error for invalid form submission', () => {
    const wrapper = shallow(<SkillForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
});

test('Should set name on input change', () => {
    const value = 'New name';
    const wrapper = shallow(<SkillForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('name')).toBe(value);
});

test('Should set experience on select change', () => {
    const value = '< 1 year';
    const wrapper = shallow(<SkillForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('select').simulate('change', {
        target: { value }
    });
    expect(wrapper.state('experience')).toBe(value);
});

test('Should call onSubmit prop for valid form submission', () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<SkillForm skill={skills[0]} onSubmit={onSubmitSpy} />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find('input').simulate('change', {
        target: { value: skills[0].name }
    });
    wrapper.find('select').simulate('change', {
        target: { value: skills[0].experience }
    });
    wrapper.find('form').simulate('submit', {
        preventDefault: () => { }
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        name: skills[0].name,
        experience: skills[0].experience
    });
});