import React from "react";
import "./App.css";
import PostInfo from "./components/PostInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: [],
    };
  }

  gettingId = (e) => {
    e.preventDefault();
    let id = e.target.elements[0].value;
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          post: result,
        })
      );
  };

  render() {
    return (
      <div className="main">
        <p></p>
        <form className="form__post" onSubmit={this.gettingId}>
          <input
            className="input-id"
            placeholder="Enter post id"
            type="number"
            min="1"
            max="100"
          ></input>
          <button type="submit" className="button-id">
            Get post
          </button>
        </form>
        <PostInfo post={this.state.post} />
      </div>
    );
  }
}

export default App;
