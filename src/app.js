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
import { startSetSkills } from './actions/skills';
//To normalize CSS
import 'normalize.css/normalize.css';
//Importing base styles
import './styles/styles.scss';

const store = configureStore();

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

//Rendering base components through Routers and React DOM
ReactDOM.render(<p>Loading...</p>, document.getElementById('app'));

store.dispatch(startSetSkills()).then(() => {
    ReactDOM.render(jsx, document.getElementById('app'));
});