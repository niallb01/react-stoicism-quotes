import React, { Component } from "react";
import Interface from "./components/Interface";
import QuotesData from "./QuotesData.json";

class App extends Component {
  state = {};

  componentDidMount() {
    this.getRandomQuote();
  }

  getRandomQuote = async () => {
    const random = Math.round(Math.random() * 58);
    this.setState({ randomQuote: QuotesData[random] });
  };

  getByAuthor = async (e) => {
    if (e.target.value === "") return;
    const quotes = QuotesData.filter((item) => {
      return item.author === e.target.value;
    });
    console.log(quotes);
    this.setState({ authorQuotes: quotes });
  };

  render() {
    return (
      <>
        <Interface
          interface={this.state}
          getRandomQuote={this.getRandomQuote}
          getByAuthor={this.getByAuthor}
        />
      </>
    );
  }
}

export default App;
