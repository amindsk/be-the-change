//To create an app component
import React from 'react';
//To create a link back to Home page
import { NavLink } from 'react-router-dom';

//Page not found component for invalid URLs
const NotFoundPage = () => (
    //Component JSX
    <div>
        404 Not Found<NavLink activeClassName="home" to="/">Home</NavLink>
    </div>
);

//Exporting the component
export default NotFoundPage;