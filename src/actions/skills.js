//Redux Action: Add_SKILL
//To add a new skill
export const addSkill = (
    {
        id = 0,
        name = '',
        experience = ''
    } = {}
) => ({
    type: 'ADD_SKILL',
    skill: {
        id,
        name,
        experience
    }
});
//Redux Action: REMOVE_SKILL
//To remove a skill by id
export const removeSkill = ( { id } = {}) => ({
    type: 'REMOVE_SKILL',
    id
});