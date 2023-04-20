import { data } from "./Biodata";

const AboutAuthor = () => {
  return (
    <>
      {data.map((item) => {
        return <p key={item}>{`"${item}"`}</p>;
      })}
    </>
  );
};

export default AboutAuthor;
