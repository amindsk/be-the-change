import skillsReducer from '../../reducers/skills';
import skills from '../fixtures/skills';

//If default state values for skills reducer added in the state
test('Should set default state', () => {
    const state = skillsReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual([]);
});

//If default state values for skills reducer updated in the state while removing a skill with valid id
test('Should remove skill by id', () => {
    const action = {
        type: 'REMOVE_SKILL',
        id: skills[1].id
    };
    const state = skillsReducer(skills, action);
    expect(state).toEqual([skills[0], skills[2]]);
});

//If default state values for skills reducer not updated in the state while removing a skill with invalid id
test('Should not remove skill if id not found', () => {
    const action = {
        type: 'REMOVE_SKILL',
        id: -1
    };
    const state = skillsReducer(skills, action);
    expect(state).toEqual(skills);
});

//If default state values for skills reducer not updated in the state while adding a skill
test('Should add a skill with provided values', () => {
    const skill = {
        id: 4,
        name: 'JavaScript',
        experience: '< 1 year'
    };
    const action = {
        type: 'ADD_SKILL',
        skill
    };
    const state = skillsReducer(skills, action);
    expect(state).toEqual([...skills, skill]);
});