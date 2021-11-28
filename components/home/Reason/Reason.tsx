import classes from "./Reason.module.css";
// antd
import { Row, Col } from "antd";

import {
  AiOutlineClockCircle,
  AiOutlineUsergroupAdd,
  AiOutlineDollar,
  AiOutlineMobile,
  AiOutlineAppstoreAdd,
} from "react-icons/ai";

import { BiMessageCheck, BiLike } from "react-icons/bi";

const items = [
  {
    key: "1",
    icon: <AiOutlineClockCircle />,
    title: "Punctuality",
  },
  {
    key: "2",
    icon: <AiOutlineUsergroupAdd />,
    title: "Honesty",
  },
  {
    key: "3",
    icon: <AiOutlineDollar />,
    title: "Affordable",
  },
  {
    key: "4",
    icon: <AiOutlineMobile />,
    title: "Accessibility",
  },
  {
    key: "5",
    icon: <AiOutlineClockCircle />,
    title: "Experts",
  },
  {
    key: "6",
    icon: <AiOutlineAppstoreAdd />,
    title: "Variety",
  },
  {
    key: "7",
    icon: <BiMessageCheck />,
    title: "Accredited",
  },
  {
    key: "8",
    icon: <BiLike />,
    title: "Convenience",
  },
];

function Reason() {
  return (
    <div>
      <div id="about" className={`${classes.block} ${classes.serviceBlock}`}>
        <div className={classes.containerFluid}>
          <div className={classes.titleHolder}>
            <h2>Why Choose Us</h2>
          </div>

          <Row gutter={[24, 24]} justify="center">
            {items.map((item) => {
              return (
                <Col
                  md={{ span: 6 }}
                  key={item.key}
                  className={classes.content}
                >
                  <div className={classes.cardIcon}>{item.icon}</div>
                  <h3 className={classes.cardTitle}>{item.title}</h3>
                </Col>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Reason;
