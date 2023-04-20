const AuthorQuotes = (props) => {
  const goToTop = () => {
    window.scrollTo(0, 0);
  };
  const { getByAuthor, authorQuotes } = props;
  console.log(props);
  return (
    <>
      <select onChange={getByAuthor}>
        <option>Choose Author</option>
        <option value="Marcus Aurelius">Marcus Aurelius</option>
        <option value="Seneca">Seneca</option>
        <option value="Epictetus">Epictetus</option>
        <option value="Cato">Cato</option>
        <option value="Zeno">Zeno</option>
      </select>
      {authorQuotes &&
        authorQuotes.map((item) => {
          return <p key={item.body}>{`"${item.body}"`}</p>;
        })}
      <p>
        <button className="choose-author-btn" onClick={goToTop}>
          Back To Top
        </button>
      </p>
    </>
  );
};

export default AuthorQuotes;
