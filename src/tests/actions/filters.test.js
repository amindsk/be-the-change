import { sortById } from '../../actions/filters';

//If action SORT_BY_ID generated
test('Should generate action object for sort by id', () => {
    expect(sortById()).toEqual({ type: 'SORT_BY_ID' });
});