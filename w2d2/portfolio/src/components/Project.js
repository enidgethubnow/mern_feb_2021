import React, { Component } from 'react';
import './Project.css';

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.likes,
      title: this.props.title
    };
  }

  like = () => {
    this.setState( { 'likes': this.state.likes + 1 } );
  }

  render() {
    // this.props is created when we render the component
    //    all jsx attributes that are passed in from App.js become
    //    key / value pairs inside of the props object
    // props = { title: "project title", desc: "project description" }
    // const { desc } = this.props;
    const { desc: description } = this.props;

    return (
      <div className="ProjectStyle">
        <h4>{ this.state.title }</h4>
        <button onClick={ this.like }>Like Project</button>
        <p>Likes: { this.state.likes }</p>
        <p>Description:</p>
        <p>{ description }</p>
      </div>
    )
  }
}

export default Project;
