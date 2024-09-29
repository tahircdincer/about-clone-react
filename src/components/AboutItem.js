export default function AboutItem(props) {
  return (
    <div className="about__item">
      <div className="about__item--item">
        <img src={props.imgLink} alt="About Image" />
        <div className="about--item__info">
          <h3>{props.name}</h3>
          <p>{props.description}</p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </div>
  );
}
