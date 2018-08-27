//Test case for testing actions related to skills
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { addSkill, startRemoveSkill, startSetSkills, startAddSkill, removeSkill, setSkills } from '../../actions/skills';
import skills from '../fixtures/skills';
import axios from 'axios';

//Creating mock store for testing asynchronous actions
const createMockStore = configureMockStore([thunk]);

//If action REMOVE_SKILL generated
test('Should setup remove skill action object', () => {
    const action = removeSkill( { id: 123 } );
    expect(action).toEqual({
        type: 'REMOVE_SKILL',
        id: 123
    });
});

//If action emoves skill from database
test('Should remove skill from database and store', (done) => {
    const store = createMockStore({});
    const id = 128;
    store.dispatch(startRemoveSkill({ id })).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'REMOVE_SKILL',
            id
        });
        const instance = axios.create({
            baseURL: 'http://localhost:3000/'
        });
        return instance.delete(`/skills/${id}`);
    }).then((data) => {
        expect(data).toEqual({});
        done();
    });
    done();
});

//If action ADD_SKILL generated if skill values provided
test('Should setup add skill action object with provided values', () => {
    const action = addSkill(skills[2]);
    expect(action).toEqual({
        type: 'ADD_SKILL',
        skill: skills[2]
    });
});

//If action adds skill to database
test('Should add skill to database and store', (done) => {
    const store = createMockStore({});
    const skillData = {
        name: 'Java',
        experience: '3 - 5 years'
    };
    store.dispatch(startAddSkill(skillData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_SKILL',
            skill: {
                id: expect.any(Number),
                ...skillData
            }
        });
        const instance = axios.create({
            baseURL: 'http://localhost:3000/'
        });
        return instance.get(`/skills?id=${actions[0].skill.id}`);
    }).then((data) => {
        expect(data).toEqual(skillData);
        done();
    });
    done();
});

//If action adds skill in the database
test('Should add skill with defaults to database and store', (done) => {
    const store = createMockStore({});
    const skillDefaults = {
        name: '',
        experience: ''
    };
    store.dispatch(startAddSkill({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_SKILL',
            skill: {
                id: expect.any(Number),
                ...skillDefaults
            }
        });
        const instance = axios.create({
            baseURL: 'http://localhost:3000/'
        });
        return instance.get(`/skills?id=${actions[0].skill.id}`);
    }).then((data) => {
        expect(data).toEqual(skillDefaults);
        done();
    });
    done();
});

//If action Get Skills from store
test('Should setup set skills action object with data', () => {
    const action = setSkills(skills);
    expect(action).toEqual({
        type: 'SET_SKILLS',
        skills
    });
});

//If action Get Skills from database
test('Should fetch the skills from database', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetSkills()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_SKILL',
            skills
        });
        const instance = axios.create({
            baseURL: 'http://localhost:3000/'
        });
        return instance.get(`/skills`);
    }).then((data) => {
        expect(data.data).toEqual(Array);
        done();
    });
    done();
});