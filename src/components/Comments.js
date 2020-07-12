import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { without } from 'lodash';

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            patientId: '1',
            practitionerId: '2',
        };
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        fetch(`/api/comments`)
            .then(res => res.json())
            .then(json => this.setState({ comments: json }));
    }

    handleAdd(e) {
        e.preventDefault();
        let tempComment = {
            patientId: this.state.patientId,
            practitionerId: this.state.practitionerId,
            text: e.target.value
        };

        this.props.addComment(tempComment);

        this.setState({
            comments: this.state.comments
        });
//        this.props.toggleForm();
    }

    handleDelete(commentId) {
        fetch(`/api/comment/${commentId}`, {method: 'delete'})
            .then(res => res.json())
            .then(json => {

                fetch(`/api/comments`)
                    .then(res => res.json())
                    .then(json => this.setState({ comments: json }));

            });

    }

    render() {
        return (
            <div className="comment-list item-list mb-3">
                {this.state.comments.map(item => (
                    <div className="comment-item col media py-3" key={item.id}>
                        <div className="mr-3">
                            <button
                                className="comment-delete btn btn-sm btn-danger"
                                onClick={() => this.handleDelete(item.id)}
                            >
                                <FaTimes />
                            </button>
                            <div>{item.text}</div>
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

export default Comments;
