import data from "../data";
import AboutItem from "./AboutItem";

const dataItems = data.map((item) => {
  return (
    <AboutItem
      name={item.name}
      description={item.description}
      imgLink={item.imgLink}
    />
  );
});
export default function About(props) {
  return <div className="about__section">{dataItems}</div>;
}
