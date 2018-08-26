//To create a react component
import React from 'react';
//Importing neccessary react-router functionalities
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//Importing header component
import Header from '../components/Header';
//Importing base component of the application
import SkillEditorDashboard from '../components/SkillEditorDashboard';
//Importing not found page component
import NotFoundPage from '../components/NotFoundPage';
//Defining application routes
const AppRouter = () => (
    <BrowserRouter>
    <div>
        {/* Header component on all of the components */}
        <Header />
        {/* Switching between components based on routes */}
        <Switch>
            {/* Base component on home route (Defining exact so other routes don't render on base component) */}
            <Route path="/" component={SkillEditorDashboard} exact={true} />
            {/* Show this compponent if route not found */}
            <Route component={NotFoundPage} />
        </Switch>
    </div>
    </BrowserRouter>
);
//Exporting AppRouter component
export default AppRouter;