import React from 'react';
import { FaTimes } from "react-icons/fa";
import AddPatient from "./AddPatient";
import ListPatients from "./ListPatients";

class Patients extends React.Component {
    constructor() {
        console.log('Patients');
        super();
        this.state = {
            patients: [],
            formDisplay: false
        };
        this.toggleForm = this.toggleForm.bind(this);
        this.updatePatients = this.updatePatients.bind(this);
    }

    toggleForm() {
        this.setState({
            formDisplay: !this.state.formDisplay
        })
    }

    componentDidMount() {
        console.log('componentDidMount');
        this.updatePatients();
    }

    updatePatients() {
        console.log('updatePatients');
        fetch(`/api/patients`)
            .then(res => res.json())
            .then(json => {
                console.log(json);
                this.setState({patients: json})
            });
    }

    render() {
        return (
            <div className="patient-list item-list mb-3">
                <AddPatient
                    formDisplay={this.state.formDisplay}
                    toggleForm={this.toggleForm}
                    updatePatients={this.updatePatients}
                />
                <ListPatients
                    patients={this.state.patients}
                    updatePatients={this.updatePatients}
                />

            </div>
        );
    }
}

/*


 */
export default Patients;
