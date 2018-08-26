//Importing React to make component
import React from 'react';
//Class based component SkillForm to add skill
export default class SkillForm extends React.Component {
    //Local states of the component
    state = {
        name: '',
        experience: '',
        //To show error on wrong inputs/values provided
        error: ''
    };
    //Binding input value of skill name with component's local state 
    onNameChange = (e) => {
        //Get the value of the input to prevent using presist()
        const name = e.target.value;
        //Bind value with slocal state
        this.setState(() => ({ name }));
    }
    //Binding select value of skill experience with component's local state
    onExperienceChange = (e) => {
        //Get the value of the select to prevent using presist()
        const experience = e.target.value;
        //Bind value with slocal state
        this.setState(() => ({ experience }));
    }
    //Handle for submit event
    onSubmit = (e) => {
        //Prevent default behaviour of the form on submit ( Prevent page from refreshing )
        e.preventDefault();
        //If skil name or skill experience are not set (empty)
        if(!this.state.name || !this.state.experience) {
            //Display error to provide values off the skill name and experience
            this.setState(() => ({ error: 'Please provide skill name and experience' }));
            //If name of the skill is less than 4 or greater that 255 characters
        } else if(this.state.name.length < 4 || this.state.name.length > 255) {
            //Display error to provide name of the skill within given range
            this.setState(() => ({ error: 'Please provide a skill name of minimum 4 characters' }));
            //If values of name and experience are correct
        } else {
            //Erase error if any
            this.setState(() => ({ error: '' }));
            //Call the on submit prop to send data back to parent component
            this.props.onSubmit({
                //Set skill object
                name: this.state.name,
                experience: this.state.experience
            });
            //Erase previously entered values
            this.setState({ name: '', experience: '', error: '' });
        }

    }
    //Render the JSX
    render() {
        //Return JSX
        return (
            <div>
                {/* Show error if any */}
                {this.state.error && <p>{this.state.error}</p>}
                {/* Add skill form */}
                <form onSubmit={this.onSubmit}>
                {/* Skill name */}
                    <input
                    type="text"
                    placeholder="Skill Here"
                    autoFocus
                    value={this.state.name}
                    onChange={this.onNameChange}
                    />
                    {/* Skill experience */}
                    <select
                    value={this.state.experience}
                    onChange={this.onExperienceChange}
                    >
                        <option value="" disabled selected>EXPERIENCE</option>
                        <option value="< 1 year">&lt; 1 year</option>
                        <option value="1 - 3 years">1 - 3 years</option>
                        <option value="3 - 5 years">3 - 5 years</option>
                        <option value="5 - 7 years">5 - 7 years</option>
                        <option value="7+ years">7+ years</option>
                    </select>
                    {/* Add skill button */}
                    <button>ADD SKILL</button>
                </form>
            </div>
        );
    }
}