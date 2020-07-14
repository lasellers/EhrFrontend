import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import '../css/Comment.css';

class ListComments extends Component {
    constructor() {
        super();
        this.state = {
            orderBy: 'id',
            orderDir: 'desc',
            queryText: ''
        };
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete(commentId) {
        fetch(`/api/comment/${commentId}`, {method: 'delete'})
            .then(res => res.json())
            .then(json => {
                this.props.updateComments();
            });
    }

    render() {
        return (
                <div className="comment-list item-list mb-3">
                    {this.props.comments.map(item => (
                        <div className="row comment-item media" key={item.id}>
                            <div className="col-md-11">
                                <div className="">Care Provider: <i>{item.patient.family},{item.patient.given}</i></div>
                                <div className="">Name: <b>{item.practitioner.name}</b></div>
                                <div className="py-3">{item.comment}</div>
                            </div>
                            <div className="col-md-1">
                                <button
                                    className="comment-delete btn btn-sm btn-danger"
                                    onClick={() => this.handleDelete(item.id)}
                                >
                                    <FaTimes/>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
        );
    }
}

export default ListComments;
