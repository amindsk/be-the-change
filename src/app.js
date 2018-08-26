//Starting point of the application
//For the components
import React from 'react';
//ReactDOM to render components and JSX
import ReactDOM from 'react-dom';
//Importing react redux to use Provider HOC
import { Provider } from 'react-redux';
//Importing react router
import AppRouter from './routers/AppRouter';
//Importing redux store configuration
import configureStore from './store/configureStore';
//Importing skills actions
import { addSkill } from './actions/skills';
//Importing filters to get sorted data
import getSkillsSortedById from './selectors/skills';
//To normalize CSS
import 'normalize.css/normalize.css';
//Importing base styles
import './styles/styles.scss';

const store = configureStore();

// store.dispatch(addSkill({ id: 3, name: 'ReatJS', experience: '3 years' }));
// store.dispatch(addSkill({ id: 1, name: 'NodeJS', experience: '2 years' }));
// store.dispatch(addSkill({ id: 2, name: 'BabelJS', experience: '1 years' }));
// console.log(store.getState());
// const state = store.getState();
// const sortedSkills = getSkillsSortedById(state.skills, state.filters);
// console.log(sortedSkills);

//Rendering base components through Routers and React DOM
ReactDOM.render(<AppRouter />, document.getElementById('app'));