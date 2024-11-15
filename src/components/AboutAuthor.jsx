import { data } from "./Biodata";

const AboutAuthor = () => {
  return (
    <>
      {data.map((item) => {
        return (
          <p className="about-auth" key={item}>
            <img className="about-img" src={item.image} alt="Philosopher" />
            {`"${item.text}"`}
          </p>
        );
      })}
    </>
  );
};

export default AboutAuthor;
