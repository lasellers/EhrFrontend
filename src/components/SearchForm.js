import React from 'react';

class SearchForm extends React.Component {
    constructor(props) {
        console.log(' SearchForm');
        console.log(props);
        super(props);
        this.state = {family: '', given: '', '_id': ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        console.log(' handleChange');
        console.log(this.props);
        const target = event.target;
        const value = target.value;
        //const value = target.name === 'isGoing' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
//        this.setState({value: event.target.value});
      //  this.props.onChangeValue();
        this.props.onChangeValue(name, value);
    }

    handleSubmit(event) {
        console.log(' handleSubmit');
        console.log(this.state);
        console.log(event);
        // update(this.state);
        event.preventDefault();
    }

    render() {
//        const {birthDate, gender, name, id, careProvider, address, telecom, maritalStatus, communication, extension, deceasedBoolean} = this.props.state;

        return (
            <form onSubmit={this.props.onSubmitValues}>
                <label>
                    Family:
                    <input type="text" name="family" value={this.state.family} onChange={this.handleChange}/>
                </label>
                <label>
                    Given:
                    <input type="text" name="given" value={this.state.given} onChange={this.handleChange}/>
                </label>
                <label>
                    Patient Id:
                    <input type="text" name="_id" value={this.state._id} onChange={this.props.onChangeValue}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default SearchForm;
