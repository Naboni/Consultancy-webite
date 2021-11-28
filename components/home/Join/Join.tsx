import classes from "./Join.module.css";
import Image from "next/image";
// antd
import { Row, Col, Button } from "antd";

function Join() {
  return (
    <div className={classes.bgColor}>
      <div id="about" className={`${classes.block} ${classes.serviceBlock}`}>
        <div className={classes.containerFluid}>
          <Row
            gutter={[24, 24]}
            justify="center"
            align="middle"
            className={classes.aboutCard}
          >
            <Col sm={24} md={12} lg={12} className={classes.leftSide}>
              <h3 className={classes.title1}>Your Journey Starts from Here!</h3>
              <h2 className={classes.title2}>APPLY NOW</h2>
              <Button className={classes.joinButton}>APPLY HERE</Button>
            </Col>
            <Col sm={24} md={12} lg={12} className={classes.rightSide}>
              <h3 className={classes.title1}>
                Be Our Agent, Earn A Passive Income!
              </h3>
              <h2 className={classes.title2}>WORK WITH US!</h2>
              <Button className={classes.joinButton}>REGISTER HERE</Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Join;
