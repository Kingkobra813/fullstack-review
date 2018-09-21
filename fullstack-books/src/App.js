import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import NewBookForm from "./components/NewBookForm";
import Books from "./components/Books";

const BASE_URL = "http://localhost:3005";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [],
      title: "",
      author: "",
      year: "",
      language: "",
      country: "",
      pages: "",
      link: ""
    };
  }

  componentDidMount() {
    axios.get(BASE_URL + "/books").then(response => {
      //console.log(response);
      this.setState({
        books: response.data
      });
    });
  }

  handleChange = (event, key) => {
    this.setState({
      [key]: event.target.value
    });
  };

  handleSubmit = () => {
    axios
      .post(BASE_URL + "/add-books", {
        title: this.state.title,
        author: this.state.author,
        year: this.state.year,
        language: this.state.language,
        country: this.state.language,
        pages: this.state.pages,
        link: this.state.link
      })
      .then(response => {
        this.setState({
          books: response.data
        });
      });
  };

  render() {
    console.log(this.state, "this.state");
    const booksToRender = this.state.books.map((book, index) => {
      return (
        <div key={index}>
          <Books book={book} />
        </div>
      );
    });

    return (
      <div>
        <NewBookForm
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        {booksToRender}
      </div>
    );
  }
}

export default App;
