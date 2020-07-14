import React, { Component } from 'react';
import { FaTimes } from 'react-icons/fa';
import AddComment from './AddComment';
import ListComments from './ListComments';
import '../css/Comment.css';

class Comments extends Component {
    constructor() {
        super();
        this.state = {
            comments: [],
            formDisplay: false
        };
        this.toggleForm = this.toggleForm.bind(this);
        this.updateComments = this.updateComments.bind(this);
    }

    toggleForm() {
        this.setState({
            formDisplay: !this.state.formDisplay
        })
    }

    componentDidMount() {
        this.updateComments();
    }

    updateComments() {
        fetch(`/api/comments`)
            .then(res => res.json())
            .then(json => this.setState({comments: json}));
    }

    render() {
        return (
            <>
                <h1>Comments</h1>

                <div className="comment-list item-list mb-3">
                    <AddComment
                        formDisplay={this.state.formDisplay}
                        toggleForm={this.toggleForm}
                        updateComments={this.updateComments}
                    />
                    <ListComments
                        comments={this.state.comments}
                        updateComments={this.updateComments}
                    />
                </div>
            </>
        );
    }
}

export default Comments;
