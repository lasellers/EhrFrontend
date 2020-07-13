import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';

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

    render() {
        const patients = this.props.patients;
        return (
            <div className="patient-list item-list mb-3">
                {patients.map(item => (
                    <div className="patient-item col media py-3" key={item.id}>
                        <div className="mr-3">
                            <button
                                className="patient-delete btn btn-sm btn-danger"
                                onClick={() => this.handleDelete(item.id)}
                            >
                                <FaTimes/>
                            </button>
                            <div>{item.patientId}</div>
                            <div>{item.family}</div>
                            <div>{item.given}</div>
                        </div>

                        <div className="patient-info media-body">
                            <div className="patient-head d-flex">
                            </div>
                        </div>
                    </div>
                ))}

            </div>
        );
    }
}

/*
 */

export default ListPatients;
