import React from 'react';

class Patient extends React.Component {

    render() {
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
