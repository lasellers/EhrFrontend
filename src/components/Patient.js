import React from 'react';
import '../css/Patient.css';
import SearchForm from "./SearchForm";

class Patient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchForm: {},
            patient: {}
        };

        //this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
        //this.handleSearchFormChangeValue = this.handleSearchFormChangeValue.bind(this);
    }

    render() {
        return (
            <div>Todo -- rework to pull EPIC into...</div>
        );


        const {birthDate, gender, name, id, careProvider, address, telecom, maritalStatus, communication, extension, deceasedBoolean} = this.props.state;

        if (id.length === 0) {
            return (
                <div>No record.</div>
            );
        }
        let careString;
        if (careProvider) {
            careString = <p><b>careProvider</b>: {careProvider[0].display}</p>
        } else {
            careString = ""
        }

        let deceasedString;
        if (deceasedBoolean) {
            deceasedString = <p><b>deceased</b></p>
        } else {
            deceasedString = ""
        }

        let addressString;
        if (address && address.length > 0) {
            addressString = <p><b>address</b>: {address[0].line} {address[0].city} {address[0].state}</p>
        } else {
            addressString = ""
        }

        let communicationString;
        if (communication && communication.length > 0) {
            communicationString = <p><b>communication</b>: {communication[0].language.text}</p>
        } else {
            communicationString = ""
        }

        let telecomString;
        if (telecom && telecom.length > 0) {
            telecomString = <p><b>telecom</b>: {telecom[0].value}</p>
        } else {
            telecomString = ""
        }

        let nameString;
        if (name && name.length > 0) {
            nameString = <p>{name[0].family} , {name[0].given}</p>
        } else {
            nameString = ""
        }

        let maritalStatusString;
        if (maritalStatus && maritalStatus.length > 0) {
            maritalStatusString =  <p><b>maritalStatus</b>: {maritalStatus.text}</p>
        } else {
            maritalStatusString = ""
        }

        return (
            <div className="App-body">
                <div>{deceasedString}</div>
                <p>id = {id}</p>
                <div>{nameString}</div>
                <p><b>gender</b>: {gender}</p>
                <p><b>birthDate</b>: {birthDate}</p>
                <div>{maritalStatusString}</div>
                <div>{telecomString}</div>
                <div>{communicationString}</div>
                <div>{addressString}</div>
                <div>{careString}</div>
            </div>
        );
    }
}

export default Patient;

/*
class App2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            searchForm: {},
            patient: {}
        };

        this.handleSearchFormSubmit = this.handleSearchFormSubmit.bind(this);
        this.handleSearchFormChangeValue = this.handleSearchFormChangeValue.bind(this);
    }

    update(props) {
        const {family, given} = this.state.searchForm;
        const url = `${apiUrl}patients?family=${family}&given=${given}`;
        console.log('update fetch:', family, given, url);
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({['patient']: result});
                },
                (error) => {
                    console.log(error);
                    this.setState({['error']: error});
                }
            )
    }

    componentDidMount() {
        this.update({});
    };

    handleSearchFormChangeValue = (name, value) => {
        console.log(' handleSearchFormChangeValue', name, value, this.state.searchForm);

        this.setState({
            searchForm: {...this.state.searchForm, [name]: value}
        });

        console.log(' handleSearchFormChangeValue end', name, value, this.state.searchForm);
    }

    handleSearchFormSubmit(event) {
        console.log(' handleSearchFormSubmit');
        console.log('state', this.state);
        console.log('event', event);
        this.update(this.state);
        event.preventDefault();
    }

    render() {
        const patients = Object.values(this.state.patient);
        return (
            <>
                <div className="App">
                    <SearchForm value={this.state.searchForm}
                                onChangeValue={this.handleSearchFormChangeValue}
                                onSubmitValues={this.handleSearchFormSubmit}/>

                    <header className="App-header">
                        <div>
                            Name: {this.state.searchForm.family} , {this.state.searchForm.given}
                        </div>
                        {
                            patients.map(function (patient) {
                                return <Patient state={patient} key={patient.id}/>
                            })
                        }
                    </header>

                </div>
            </>
        );
    }
}

*/
