//Importing react for creating new component
import React from 'react';
//Importing connect to dispatch actions and read from store
import { connect } from 'react-redux';
//To remove a skill from store
import { startRemoveSkill } from '../actions/skills';

//Skill list item to represent a single skill
export const SkillListItem = ({ dispatch, id, name, experience, firstFive }) => (

    <div className="skill" >
        {/* Skill details (Aplly first five css class if skill is form top five skills) */}

        <div className={firstFive ? "dv-id firstFive" : "dv-id"}>
            <h5 className="skill-id">{id}</h5>
        </div>

        <div className="dv-name-x-exp">

            <div className="skill-name-x">
                {/* Render skill name */}
                <h3 className="skill-name">{name}</h3>
                {/* Remove skill button */}
                <button
                    className="skill-x"
                    onClick={() => {
                        dispatch(startRemoveSkill({ id }));
                    }}
                >X</button>
            </div>

            <div>
                {/* SKill experience */}
                <h4 className="skill-exp">{experience}</h4>
            </div>

        </div>

        {/* Button to remove a skill */}
    </div>
);

//Expoting the component
export default connect()(SkillListItem);