//To create a new component
import React from 'react';
//Importing connect to dispatch actions and read from store
import { connect } from 'react-redux';
//Importing a SkillListItem component
import SkillListItem from './SkillListItem';
//Importing the select to fetch skills ordered by ids
import selectSkills from '../selectors/skills';
//Component
export const SkillList = (props) => (
    <div>
        {
            props.skills.length === 0 ? (
            <p>No Skills</p>
            ) : (
                props.skills.map((skill) => {
                    return <SkillListItem key={skill.id} {...skill} />
                })
            )
        }
    </div>
);

//Mapping redux store states to this component's props
const mapStateToProps = (state) => {
    return {
        skills: selectSkills(state.skills, state.filters)
    };
};

//Exporting component
export default connect(mapStateToProps)(SkillList);