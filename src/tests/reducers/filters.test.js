import filterReducer from '../../reducers/filters';

test('Should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        sortBy: 'id'
    });
});

test('Should set sortBy id', () => {
    const state = filterReducer(undefined, { type: 'SORT_BY_ID' });
    expect(state.sortBy).toBe('id');
});