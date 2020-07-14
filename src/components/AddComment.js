import React, { Component } from 'react';
import { FaPlus } from 'react-icons/fa';
import Select from 'react-select';
import '../css/Comment.css';

class AddComment extends Component {
    constructor() {
        super();
        this.state = {
            comment: 'test.',
            patient_id: '1',
            practitioner_id: '2',
            practitioners: [],
            patients: []
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectPatientChange = this.handleSelectPatientChange.bind(this);
        this.handleSelectPractitionerChange = this.handleSelectPractitionerChange.bind(this);
    }

    componentDidMount() {
        fetch(`/api/practitioners`)
            .then(res => res.json())
            .then(json => {

                const p = json.map(row => ({'value': row.id, 'label': row.name}));

                this.setState({practitioners: p});
            });

        fetch(`/api/patients`)
            .then(res => res.json())
            .then(json => {

                const p = json.map(row => ({'value': row.id, 'label': row.family + ',' + row.given}));

                this.setState({patients: p});
            });
    }

    handleAdd(e) {
        e.preventDefault();

        fetch(`/api/comment`, {
            method: 'post',
            body: JSON.stringify({
                patient_id: this.state.patient_id,
                practitioner_id: this.state.practitioner_id,
                comment: this.state.comment
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(json => {
                this.props.updateComments();
            });

        this.setState({
            comment: 'test...',
            patient_id: '1',
            practitioner_id: '2',
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

    handleSelectPatientChange(e) {
        console.log(e);
        const value = e.value;
        const name = e.label;

        this.setState({
            ['patient_id']: value
        });
    }

    handleSelectPractitionerChange(e) {
        console.log(e);
        const value = e.value;
        const name = e.label;

        this.setState({
            ['practitioner_id']: value
        });
    }

    render() {
        return (
            <div
                className={
                    'card textcenter mt-3 ' +
                    (this.props.formDisplay ? '' : 'add-comment')
                }
            >
                <div
                    className="apt-addheading card-header bg-primary text-white"
                    onClick={this.props.toggleForm}
                >
                    <FaPlus/> Add Comment
                </div>

                <div className="card-body">
                    <form id="commentForm" noValidate onSubmit={this.handleAdd}>
                        <div className="form-group form-row">
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="patient_id"
                            >
                                Patient
                            </label>
                            <div className="col-md-10">
                                <Select
                                    className="select-single"
                                    name="patient_id"
                                    id="patient_id"
                                    options={this.state.patients}
                                    onChange={this.handleSelectPatientChange}/>
                            </div>
                        </div>

                        <div className="form-group form-row">
                            <label
                                className="col-md-2 col-form-label text-md-right"
                                htmlFor="practitioner_id"
                            >
                                Practitioner
                            </label>
                            <div className="col-md-4">
                                <Select
                                    className="select-single"
                                    name="practitioner_id"
                                    id="practitioner_id"
                                    options={this.state.practitioners}
                                    onChange={this.handleSelectPractitionerChange}/>
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
                                    Add Comment
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddComment;
