import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { deletePost } from '../actions/postActions'

class Post extends Component{
    handleClick = () => {
        this.props.deletePost(this.props.post.id);
        this.props.history.push('/')
    }
    // state = {
    //     post: null
    // }
    // componentDidMount(){
    //     let id = this.props.match.params.post_id;
    //     axios.get('https://jsonplaceholder.typicode.com/posts/'+id)
    //         .then(res =>{
    //             this.setState({
    //                 post: res.data
    //             })
    //         })
    // }
    render(){
        const post = this.props.post ? (
            <div className="post">
                <h4 className="center">{this.props.post.title}</h4>
                <p>{this.props.post.body}</p>
                <div className="center">
                    <button className="btn grey" onClick={this.handleClick}>Delete post</button>
                </div>
            </div>
            ) : (
            <div className="center">Loading post...</div>
        );
        return(
            <div className='container'>
                {post}
            </div>
        )
    }
}
const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
    console.log(ownProps.match.params);
    return {
        post : state.posts.find( post => post.id == id)
    }
}
const dispatchToProps = (dispatch) => {
    return {
        deletePost: (id) => {
            dispatch(deletePost(id))
        }
    }
}

export default connect(mapStateToProps, dispatchToProps)(Post)