import React, { Component } from "react";

class NewBookForm extends Component {
  render() {
    const { handleChange, handleSubmit } = this.props;
    return (
      <div>
        <input
          onChange={event => handleChange(event, "title")}
          placeholder="title"
        />
        <input
          onChange={event => handleChange(event, "author")}
          placeholder="author"
        />
        <input
          onChange={event => handleChange(event, "year")}
          placeholder="year"
        />
        <input
          onChange={event => handleChange(event, "language")}
          placeholder="language"
        />
        <input
          onChange={event => handleChange(event, "country")}
          placeholder="country"
        />
        <input
          onChange={event => handleChange(event, "pages")}
          placeholder="pages"
        />
        <input
          onChange={event => handleChange(event, "link")}
          placeholder="link"
        />
        <button onClick={handleSubmit}>Add Book</button>
      </div>
    );
  }
}

export default NewBookForm;
