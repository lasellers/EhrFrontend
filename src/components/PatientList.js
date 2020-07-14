import React, { Component, useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import '../css/Patient.css';

const PatientList = ({match}) => {
    const patientId = match.params.patientId;
    const article = ''; // articleContent.find(article => article.name === name);

    const [articleInfo, setArticleInfo] = useState({patientId: 0});

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(`/api/patients`);
            const body = await result.json();
            setPatients(body);
        }
        fetchData();
    }, [name]);

    if (!article) return <NotFoundPage/>

    return (
        <div className="patient-list item-list mb-3">
            {this.props.patients.map(item => (
                <div className="patient-item col media py-3" key={item.patientId}>
                    <div className="mr-3">
                        <button
                            className="pet-delete btn btn-sm btn-danger"
                            onClick={() => this.props.deletePatient(item)}
                        >
                            <FaTimes/>
                        </button>
                    </div>

                    <div className="patient-info media-body">
                        <div className="patient-head d-flex">
                <span
                    className="given"
                    contentEditable
                    suppressContentEditableWarning
                    onBlur={e =>
                        this.props.updateInfo(
                            'given',
                            e.target.innerText,
                            item.patientId
                        )
                    }
                >
                  {item.patientId}--{item.given}
                </span>
                        </div>

                        <div className="family">
                            <span className="label-item">family: </span>
                            <span
                                contentEditable
                                suppressContentEditableWarning
                                onBlur={e =>
                                    this.props.updateInfo(
                                        'family',
                                        e.target.innerText,
                                        item.patientId
                                    )
                                }
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
