import classes from "./Testimonial.module.css";
import Image from "next/image";
// antd
import { Row, Col } from "antd";
import { Card } from "antd";

const { Meta } = Card;

import image1 from "../../../public/images/advanced-option.jpg";
import image2 from "../../../public/images/clean-design.jpg";
import image3 from "../../../public/images/easy-customise.jpg";

const items = [
  {
    key: "1",
    name: "Yonatan",
    content:
      "Hello, this is Yonatan. I'm doing my master's in civil engineering in Poland, and I have applied for the education and all other processes through Sky Keys",
  },
  {
    key: "2",
    name: "Naboni",
    content:
      "I just found line Addis at a fair price and a guaranteed service. I have seen many other agencies providing the same service at three times higher prices than Sky Keys",
  },
];

function Testimonial() {
  return (
    <div className={classes.bgColor}>
      <div id="about" className={`${classes.block} ${classes.serviceBlock}`}>
        <div className={classes.containerFluid}>
          <div className={classes.titleHolder}>
            <h2>Testimonies</h2>
          </div>

          <Row gutter={[24, 24]} align="middle" justify="space-around">
            {items.map((item) => {
              return (
                <Col
                  md={{ span: 10 }}
                  key={item.key}
                  className={classes.content}
                >
                  <h5 className={classes.cardName}>{item.name}</h5>
                  <p className={classes.cardContent}>{item.content}</p>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
