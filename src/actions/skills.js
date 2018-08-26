//Add_Expense
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
//Remove_Expense
export const removeSkill = ( { id } = {}) => ({
    type: 'REMOVE_SKILL',
    id
});