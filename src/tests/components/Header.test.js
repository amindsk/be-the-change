//Importing react for component rendering
import React from 'react';
//Importing shallow renderer to create snapshot of component
import { shallow } from 'enzyme';
//Importing Header component
import Header from '../../components/Header';

//Matches with snapshot and findout if component render correctly
test('Should render Header correctly', () => {
    //Creates snapshot of hte component
    const wrapper = shallow(<Header />);
    //If snapshots matches
    expect(wrapper).toMatchSnapshot();
});