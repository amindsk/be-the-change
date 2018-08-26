//To create an app component
import React from 'react';
//Importing connect to dispatch actions and read from store
import { connect } from 'react-redux';
//Importing SkillList component
import SkillList from './SkillList';
//Importing SkillForm component
import SkillForm from '../components/SkillForm';
//Importing addSkill action from redux
import { startAddSkill } from '../actions/skills';
//Base component for the app
export const SkillEditorDashboard = (props) => (
    //Component JSX
    <div>
        {/* Embedding SKillForm component to add new skill */}
        <SkillForm onSubmit={(skill) => {
            // Passing skill to add to the store on submit of form
            props.dispatch(startAddSkill(skill));
        }} />
        {/* Embedding SkillList component to render all of th elsit items */}
        <SkillList />
    </div>
);

//Exporting the component with connect to dispatch actions and read from store
export default connect()(SkillEditorDashboard);