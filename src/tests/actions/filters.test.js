import { sortById } from '../../actions/filters';

test('Should generate action object for sort by id', () => {
    expect(sortById()).toEqual({ type: 'SORT_BY_ID' });
});