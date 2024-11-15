import React from "react";
import Navbar from "./Navbar";
import RandomQuotes from "./RandomQuotes";
import AuthorQuotes from "./AuthorQuotes";
import { Route, Switch, Link, Redirect } from "react-router-dom";
import AboutAuthor from "./AboutAuthor";
import Footer from "./Footer";

const Interface = (props) => {
  const { randomQuote, randomQuoteAuthor, authorQuotes } = props.interface;
  const { getRandomQuote, getByAuthor } = props;

  return (
    <>
      <div className="container">
        <h1 className="header">
          <Link className="header-text" to="/home">
            Stoicism Quotes
          </Link>
        </h1>
        <Navbar />
        <Switch>
          {<Redirect exact from="/" to="/home" />}
          <Route
            path="/home"
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
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default Interface;
