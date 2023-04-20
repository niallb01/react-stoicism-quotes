import Image from "./Image";

const RandomQuotes = (props) => {
  const { randomQuote, getRandomQuote } = props;

  if (props.randomQuote === undefined) return <p>Loading API data</p>;
  return (
    <>
      <button className="random-button" onClick={getRandomQuote}>
        Get Random Quote
      </button>
      <p className="random-quote-text">"{randomQuote && randomQuote.body}"</p>
      <div className="quote-author">
        <p className="author-text">- {randomQuote && randomQuote.author}</p>
        <div className="random-image">
          <Image author={randomQuote.author} />
        </div>
      </div>
    </>
  );
};

export default RandomQuotes;
