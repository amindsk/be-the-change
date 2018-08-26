//Importing react for creating new component
import React from 'react';
//Importing connect to dispatch actions and read from store
import { connect } from 'react-redux';
//To remove a skill from store
import { removeSkill } from '../actions/skills';
//Skill list item to represent a single skill
export const SkillListItem = ({ dispatch, id, name, experience}) => (
    <div>
        {/* Skill details */}
        <h3>{name}</h3>
        <h4>{experience}</h4>
        <h5>{id}</h5>
        {/* Button to remove a skill */}
        <button
        onClick={() => {
            dispatch(removeSkill({ id }));
        }}
        >Remove</button>
    </div>
);

//Expoting the component
export default connect()(SkillListItem);