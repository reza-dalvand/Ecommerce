import "./styles.css";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@material-ui/core";

export default function Slider() {
  var items = [
    {
      name: "Pizza Begin",
      link: "pizza-begin.co.il",
    },
    {
      name: "Mia Luz",
      link: "mia-luz.com",
    },
    {
      name: "Nuda Swim",
      link: "nudaswim.com",
    },
  ];

  return (
    <>
      <Carousel
        navButtonsAlwaysInvisible={true}
        animation="slide"
        activeIndicatorIconButtonProps={{ className: "activeIndicator" }}
      >
        {items.map((item, i) => (
          <Item key={i} item={item} />
        ))}
      </Carousel>
    </>
  );

  function Item(props) {
    return (
      <Paper className="item">
        <img
          className="imageCarousel"
          src={props.item.image}
          alt={props.item.name}
        />
        <h2
          onClick={() => {
            window.location.href = props.item.link;
          }}
        >
          {props.item.name}
        </h2>
      </Paper>
    );
  }
}
