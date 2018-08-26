export default (skills, { sortBy }) => {
    return skills.sort((a, b) => {
        if(sortBy === 'id') {
            return a.id > b.id ? 1 : -1;
        }
    });
};