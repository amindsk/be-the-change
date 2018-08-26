import sortById from '../../selectors/skills';
import skills from '../fixtures/skills';

//If selector sort the array by Ids
test('Should sort skills by Ids', () => {
    const filters = {
        sortBy: 'id'
    };
    const result = sortById(skills, filters);
    expect(result).toEqual([skills[0], skills[1], skills[2]]);
})