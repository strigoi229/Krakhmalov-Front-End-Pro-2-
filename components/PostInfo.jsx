import React from "react";
import CommentInfo from "./CommentInfo";


class PostInfo extends React.Component {
constructor(props) {
    super(props);
    this.state = {
        comments: [],
        show: true,
    }
}


gettingComments = (e) => {
    if(!this.state.comments.id) {
    fetch(`https://jsonplaceholder.typicode.com/posts/${this.props.post.id}/comments`)
    .then((response) => response.json())
    .then((result) =>
      this.setState({
        comments: result,
      })
    );
    }

    this.setState(state => ({
        show: !state.show
      }));

}



render() {
    if(this.props.post.id) {
    return(
        <div className="post__content">
            <p>User id : {this.props.post.userId}</p>
            <p>Post id: {this.props.post.id}</p>
            <p>Post title: {this.props.post.title}</p>
            <p>Post body : {this.props.post.body}</p> 
            <button className="button-comment" onClick={this.gettingComments}>{this.state.show ? 'Show comments' : 'Hide comments'}</button>
            <CommentInfo
            comments={this.state.comments}
            show={this.state.show}
            ></CommentInfo>
        </div>
    )
    }
}
}

export default PostInfo;