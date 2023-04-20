import React from "react";
import Navbar from "./Navbar";
import RandomQuotes from "./RandomQuotes";
import AuthorQuotes from "./AuthorQuotes";
import { Route, Switch, Link } from "react-router-dom";
import AboutAuthor from "./AboutAuthor";

const Interface = (props) => {
  const { randomQuote, randomQuoteAuthor, authorQuotes } = props.interface;
  const { getRandomQuote, getByAuthor } = props;

  return (
    <>
      <div className="container">
        <h1 className="header">
          <Link className="header-text" to="/randomquotes">
            Stoicism Quotes
          </Link>
        </h1>
        <Navbar />
        <Switch>
          <Route
            path="/randomquotes"
            render={(props) => (
              <RandomQuotes
                getRandomQuote={getRandomQuote}
                randomQuote={randomQuote}
                randomQuoteAuthor={randomQuoteAuthor}
              />
            )}
          />
          <Route
            path="/quotes"
            render={(props) => (
              <AuthorQuotes
                authorQuotes={authorQuotes}
                getByAuthor={getByAuthor}
              />
            )}
          />
          <Route path="/about" render={(props) => <AboutAuthor />} />
        </Switch>
      </div>
    </>
  );
};

export default Interface;
