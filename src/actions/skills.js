import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:3000/'
});

//Redux Action: Add_SKILL
//To add a new skill
export const addSkill = (skill) => ({
    type: 'ADD_SKILL',
    skill
});

export const startAddSkill = (skillData = {}) => {
    return (dispatch) => {
        const {
            name = '',
            experience = ''
        } = skillData;
        const skill = { name, experience };
        return instance.post('/skills', skill ).then(({ data }) => {
            dispatch(addSkill(data));
        });

    };
};

//Redux Action: REMOVE_SKILL
//To remove a skill by id
export const removeSkill = ( { id } = {}) => ({
    type: 'REMOVE_SKILL',
    id
});

export const startRemoveSkill = ( { id } = { } ) => {
    return (dispatch) => {
        return instance.delete(`/skills/${id}`).then(() => {
            dispatch(removeSkill( { id } ));
        });
    };
};

export const setSkills = (skills) => ({
    type: 'SET_SKILLS',
    skills
});

export const startSetSkills = () => {
    return (dispatch) => {
        return instance.get('/skills').then((data) => {
            const skills = data.data;
            dispatch(setSkills(skills));
        });
    };
};