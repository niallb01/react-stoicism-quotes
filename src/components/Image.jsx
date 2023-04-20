import Cato_png from "../images/Cato.png";
import Epictetus_png from "../images/Epictetus.png";
import Marcusaurelius_png from "../images/Marcusaurelius.png";
import Seneca_png from "../images/Seneca.png";
import Zeno_png from "../images/Zeno.png";

const Image = (props) => {
  const { author } = props;
  switch (author) {
    case "Seneca":
      return <img src={Seneca_png} alt="quote pic"></img>;
    case "Epictetus":
      return <img src={Epictetus_png} alt="quote pic"></img>;
    case "Marcus Aurelius":
      return <img src={Marcusaurelius_png} alt="quote pic"></img>;
    case "Cato":
      return <img src={Cato_png} alt="quote pic"></img>;
    case "Zeno":
      return <img src={Zeno_png} alt="quote pic"></img>;
    default:
      return <p>No image available</p>;
  }
};

export default Image;
