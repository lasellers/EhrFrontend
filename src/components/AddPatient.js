import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import '../css/Patient.css';

class AddPatient extends Component {
    constructor() {
        super();
        this.state = {
            patient: {}
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
    }

    handleAdd(e) {
        e.preventDefault();

        fetch(`/api/patient`, {
            method: 'post',
            body: JSON.stringify({
                patientId: this.state.patientId,
                practitionerId: this.state.practitionerId,
                given: this.state.given,
                family: this.state.family
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(json => {
                this.props.updatePatients();
            });

        this.setState({
            patient: {}
        });

        this.props.toggleForm();
    }

    handleChange(e) {
        const target = e.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <div
                className={
                    'card textcenter mt-3 ' +
                    (this.props.formDisplay ? '' : 'add-patient')
                }
            >
                <div
                    className="apt-addheading card-header bg-primary text-white"
                    onClick={this.props.toggleForm}
                >
                    <FaPlus/> Add Patient
                </div>

                <div className="card-body">
                    <form id="patientForm" noValidate onSubmit={this.handleAdd}>
                        <div className="form-group form-row">
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="patientId"
                            >
                                patientId
                            </label>
                            <div className="col-md-10">
                                <input
                                    type="text"
                                    className="form-control"
                                    name="patientId"
                                    placeholder="patientId"
                                    value={this.state.patientId}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="practitionerId"
                            >
                                practitionerId
                            </label>
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="practitionerId"
                                    name="practitionerId"
                                    id="practitionerId"
                                    value={this.state.practitionerId}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="Given"
                            >Given</label>
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Given"
                                    name="given"
                                    id="given"
                                    value={this.state.given}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="Family"
                            >Given</label>
                            <div className="col-md-4">
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Family"
                                    name="family"
                                    id="family"
                                    value={this.state.family}
                                    onChange={this.handleChange}
                                />
                            </div>
                        </div>


                        <div className="form-group form-row">
                            <label className="col-md-2 text-md-right" htmlFor="Comment">
                                Comment
                            </label>
                            <div className="col-md-10">
                <textarea
                    className="form-control"
                    rows="4"
                    cols="50"
                    name="comment"
                    id="comment"
                    placeholder="Comment"
                    value={this.state.comment}
                    onChange={this.handleChange}
                />
                            </div>
                        </div>

                        <div className="form-group form-row mb-0">
                            <div className="offset-md-2 col-md-10">
                                <button
                                    type="submit"
                                    className="btn btn-primary d-block ml-auto"
                                >
                                    Add Patient
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddPatient;
