//Redux Selector: To get a sorted skills based on ids
export default (skills, { sortBy }) => {
    return skills ? skills.sort((a, b) => {
        if (sortBy === 'id') {
            return a.id > b.id ? 1 : -1;
        }
    }) : skills;
};