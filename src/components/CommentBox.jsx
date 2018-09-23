import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../store/actions/index';


class CommentBox extends React.Component{
    state={ comment:'' }


    handleChange = (event) =>{
        this.setState({ comment: event.target.value})
    }

    handleSubmit = event =>{
        event.preventDefault();
        this.props.saveComment(this.state.comment)
        this.setState({ comment:''})
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment </h4>
                <textarea onChange={this.handleChange} value={this.state.comment} id="" cols="30" rows="10"></textarea>
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default connect(null, actions) (CommentBox);