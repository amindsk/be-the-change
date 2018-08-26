//Starting point of the application

//For the components
import React from 'react';
//ReactDOM to render components and JSX
import ReactDOM from 'react-dom';
//Importing react router
import AppRouter from './routers/AppRouter';
//To normalize CSS
import 'normalize.css/normalize.css';
//Importing base styles
import './styles/styles.scss';

//Rendering base components through Routers and React DOM
ReactDOM.render(<AppRouter />, document.getElementById('app'));