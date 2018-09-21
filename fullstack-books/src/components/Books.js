import React, { Component } from "react";

class Book extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.book.title}</h1>
        <h2>{this.props.book.author}</h2>
        <h2>{this.props.book.year}</h2>
        <h2>{this.props.book.language}</h2>
        <h2>{this.props.book.country}</h2>
        <h2>{this.props.book.pages}</h2>
        <h2>{this.props.book.link}</h2>
      </div>
    );
  }
}

export default Book;
