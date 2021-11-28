import classes from "./StudyDestination.module.css";
import Image from "next/image";

import Slider from "@ant-design/react-slick";

// antd
import { Row, Col } from "antd";

import canada from "@/public/flags/canada-flag-medium.png";
import poland from "@/public/flags/poland-flag-medium.png";
import cyprus from "@/public/flags/cyprus-flag-medium.png";
import italy from "@/public/flags/italy-flag-medium.png";
import romania from "@/public/flags/romania-flag-medium.png";
import turkey from "@/public/flags/turkey-flag-medium.png";
import netherland from "@/public/flags/netherlands-flag-medium.png";
import russia from "@/public/flags/russia-flag-medium.png";
import usa from "@/public/flags/united-states-of-america-flag-medium.png";

var settings = {
  dots: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 2000,
  cssEase: "linear",
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
        dots: false,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
      },
    },
  ],
};

const items = [
  {
    img: poland,
    label: "POLAND",
  },
  {
    img: usa,
    label: "USA",
  },
  {
    img: italy,
    label: "ITALY",
  },
  {
    img: canada,
    label: "CANADA",
  },
  {
    img: cyprus,
    label: "CYPRUS",
  },
  {
    img: romania,
    label: "ROMANIA",
  },
  {
    img: netherland,
    label: "NETHERLAND",
  },
  {
    img: russia,
    label: "RUSSIA",
  },
  {
    img: turkey,
    label: "Turkey",
  },
];

function StudyDestination() {
  return (
    <div className={classes.bgColor}>
      <div id="about" className={`${classes.block} ${classes.serviceBlock}`}>
        <div className={classes.containerFluid}>
          <div className={classes.titleHolder}>
            <h2>Study Destinations</h2>
          </div>

          <Slider {...settings}>
            {items.map((i) => (
              <div className={classes.wrapper} key={i.label}>
                <Image src={i.img} height="150" width="300" />
                <h3>STUDY IN {i.label}</h3>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default StudyDestination;
