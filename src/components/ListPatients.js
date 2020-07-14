import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import '../css/Patient.css';

class ListPatients extends Component {
    constructor() {
        super();
        this.state = {
            orderBy: 'id',
            orderDir: 'desc',
            queryText: ''
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(patientId) {
        fetch(`/api/patient/${patientId}`, {method: 'delete'})
            .then(res => res.json())
            .then(json => {
                this.props.updatePatients();
            });
    }

    //
    render() {
        const patients = this.props.patients;
        return (
            <table className="table table-striped patient-list item-list">
                <thead className="thead-dark">
                    <th>PatientId</th>
                    <th>Family</th>
                    <th>Given</th>
                    <th>x</th>
                </thead>
                <tbody>
                {patients.map(item => (
                    <tr className="patient-item py-3" key={item.id}>
                        <td className="col-md-5">{item.patientId}</td>
                        <td className="col-md-3">{item.family}</td>
                        <td className="col-md-3">{item.given}</td>
                        <td className="col-md-1">
                            <button
                                className="delete-patient btn btn-sm btn-danger"
                                onClick={() => this.handleDelete(item.id)}
                            >
                                <FaTimes/>
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        );
    }
}

export default ListPatients;
