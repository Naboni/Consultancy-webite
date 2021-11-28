import Image from "next/image";

import classes from "./Partners.module.css";
// antd
import { Row, Col } from "antd";

import {
  AiOutlineClockCircle,
  AiOutlineUsergroupAdd,
  AiOutlineDollar,
  AiOutlineMobile,
} from "react-icons/ai";

import a from "@/public/images/partners/a.jpg";
import b from "@/public/images/partners/b.png";
import c from "@/public/images/partners/c.png";
import d from "@/public/images/partners/d.jpg";
import e from "@/public/images/partners/e.png";
import f from "@/public/images/partners/f.png";

const items = [
  {
    key: "1",
    image: a,
  },
  {
    key: "2",
    image: b,
  },
  {
    key: "3",
    image: c,
  },
  {
    key: "4",
    image: d,
  },
  {
    key: "5",
    image: e,
  },
  {
    key: "6",
    image: f,
  },
];

function Partners() {
  return (
    <div>
      <div id="about" className={`${classes.block} ${classes.serviceBlock}`}>
        <div className={classes.containerFluid}>
          <div className={classes.titleHolder}>
            <h2>Few of Our Partners Abroad</h2>
          </div>

          <Row gutter={[24, 24]} justify="center">
            {items.map((item) => {
              return (
                <Col
                  md={{ span: 2 }}
                  key={item.key}
                  className={classes.content}
                >
                  <div className={classes.cardIcon}>
                    <Image alt="example" src={item.image} />
                  </div>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Partners;
