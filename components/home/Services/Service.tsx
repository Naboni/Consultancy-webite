import classes from "./Service.module.css";
import Image from "next/image";

// antd
import { Row, Col } from "antd";
import { Card } from "antd";

const { Meta } = Card;

import image1 from "@/public/images/advanced-option.jpg";
import image2 from "@/public/images/clean-design.jpg";
import image3 from "@/public/images/easy-customise.jpg";

const items = [
  {
    key: "1",
    image: image1,
    title: "Online Education",
  },
  {
    key: "2",
    image: image2,
    title: "Exam Assistance",
  },
  {
    key: "3",
    image: image3,
    title: "Other Services",
  },
];

function Service() {
  return (
    <div className={classes.bgColor}>
      <div id="about" className={`${classes.block} ${classes.serviceBlock}`}>
        <div className={classes.containerFluid}>
          <div className={classes.titleHolder}>
            <h2>Services</h2>
          </div>

          <Row gutter={[24, 24]}>
            {items.map((item) => {
              return (
                <Col md={{ span: 8 }} key={item.key}>
                  <Card
                    bordered={false}
                    hoverable
                    className={classes.serviceCard}
                    cover={<Image alt="example" src={item.image} />}
                  >
                    <Meta
                      title={
                        <h3 className={classes.metaTitle}> {item.title}</h3>
                      }
                    />
                  </Card>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Service;
