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
            <>
                <div className="comment-list item-list mb-3">
                    {this.props.comments.map(item => (
                        <div className="row comment-item media py-3" key={item.id}>
                            <div className="col-md-7">{item.comment}</div>
                            <div className="col-md-2">{item.patient_id}</div>
                            <div className="col-md-2">{item.practitioner_id}</div>
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
            </>
        );
    }
}

export default ListComments;
