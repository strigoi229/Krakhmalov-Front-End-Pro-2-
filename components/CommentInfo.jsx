import React from "react";



class CommentInfo extends React.Component {

      render() {
       if(!this.props.show) {
        return (
          (this.props.comments).map(item => <div key={item.id} className="comments__content">
            <p>Post id: {item.postId}</p>
            <p>Comment id:{item.id}</p>
            <p>Name: {item.name}</p>
            <p>Title: {item.title}</p>
            <p>Body: {item.body}</p>
            </div>
          )
        )
       } else {
        return null
       }
        
      }
}

export default CommentInfo
