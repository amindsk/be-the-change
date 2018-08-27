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
//To get initial skills already in the database
import { startSetSkills } from './actions/skills';
//To normalize CSS
import 'normalize.css/normalize.css';
//Importing base styles
import './styles/styles.scss';

//Setting up redux store
const store = configureStore();

//Setting up Provider HOC
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

//Rendering loading until ction fetches all of the skills from database
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

//Rendering base component throught Provider HOC on action fetches skills
store.dispatch(startSetSkills()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});