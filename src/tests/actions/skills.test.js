//Test case for testing actions related to skills
import { addSkill, removeSkill } from '../../actions/skills';

//If action REMOVE_SKILL generated
test('Should setup remove skill action object', () => {
    const action = removeSkill( { id: 123 } );
    expect(action).toEqual({
        type: 'REMOVE_SKILL',
        id: 123
    });
});

//If action ADD_SKILL generated if skill values provided
test('Should setup add skill action object with provided values', () => {
    const skillData = {
        id: 123,
        name: 'NodeJS',
        experience: '< 1 year'
    };
    const action = addSkill(skillData);
    expect(action).toEqual({
        type: 'ADD_SKILL',
        skill: {
            ...skillData
        }
    });
});

//If action ADD_SKILLS generated if no skill values provided
test('Should setup add skill action object with default values', () => {
    const action = addSkill();
    expect(action).toEqual({
        type: 'ADD_SKILL',
        skill: {
            id: 0,
            name: '',
            experience: ''
        }
    });
});