import React from 'react';

class Patient extends React.Component {

    render() {
        const {birthDate, gender, name, id, careProvider, address, telecom, maritalStatus, communication, extension, deceasedBoolean} = this.props.state;

        let care;
        if (careProvider) {
            care = <p><b>careProvider</b>: {careProvider[0].display}</p>
        } else {
            care = ""
        }

        let deceased;
        if (deceasedBoolean) {
            deceased = <p><b>deceased</b></p>
        } else {
            deceased = ""
        }

        return (
            <div className="App-body">
                <div>{deceased}</div>
                <p>id = {id}</p>
                <p>{name[0].family} , {name[0].given}</p>
                <p><b>gender</b>: {gender}</p>
                <p><b>birthDate</b>: {birthDate}</p>
                <p><b>maritalStatus</b>: {maritalStatus.text}</p>
                <p><b>telecom</b>: {telecom[0].value}</p>
                <p><b>communication</b>: {communication[0].language.text}</p>
                <p><b>address</b>: {address[0].line} {address[0].city} {address[0].state}</p>
                <div>{care}</div>
            </div>
        );
    }
}

export default Patient;
