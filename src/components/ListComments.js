import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';

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
                    <div className="comment-item col media py-3" key={item.id}>
                        <div className="mr-3">
                            <button
                                className="comment-delete btn btn-sm btn-danger"
                                onClick={() => this.handleDelete(item.id)}
                            >
                                <FaTimes/>
                            </button>
                            <div>{item.patientId}</div>
                            <div>{item.practitionerId}</div>
                            <div>{item.comment}</div>
                        </div>

                        <div className="comment-info media-body">
                            <div className="comment-head d-flex">
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default ListComments;
