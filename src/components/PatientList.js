import React, { Component, useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import { without } from 'lodash';

/*
deletePatient(apt) {
    let tempPatients = this.state.Patients;
    tempPatients = without(tempPatients, patient);

    this.setState({
        Patients: tempPatients
    });
}*/

const PatientList = ({match, deletePatient}) => {
    const patientId = match.params.patientId;
   // const patients = []; // articleContent.find(article => article.name === name);

    const [patients, getPatients] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/patients`);
            const body = await result.json();
            getPatients(body);
        }
        fetchData();
    }, [patientId]);

/*
    function deletePatient = (apt) => {
        let tempPatients = this.state.Patients;
        tempPatients = without(tempPatients, patient);

        this.setState({
            Patients: tempPatients
        });
    };*/

    if (!patients) return <NotFoundPage/>

    /*   onClick={() => this.props.deletePatient(item)} */
    return (
        <div className="patient-list item-list mb-3">
            {patients.map(item => (
                <div className="patient-item col media py-3" key={item.id}>
                    <div className="mr-3">
                        <button
                            className="patient-delete btn btn-sm btn-danger"

                        >
                            <FaTimes/>
                        </button>
                    </div>

                    <div className="patient-info media-body">
                        <div className="patient-head d-flex">
                <span
                    className="given"
                >
                  {item.given}
                </span>
                        </div>

                        <div className="family">
                            <span className="label-item">family: </span>
                            <span
                            >
                  {item.family}
                </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default PatientList;
