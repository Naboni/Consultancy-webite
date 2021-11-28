// antd
import { Button, Col, Row } from "antd";

import classes from "./About.module.css";

function About() {
  return (
    <div id="hero" className={classes.heroBlock}>
      <div className={classes.containerFluid}>
        <Row justify="center" align="middle" className={classes.aboutCard}>
          <Col span={24} className={classes.content}>
            <h3>Who We Are</h3>
            <p>
              The consulting firm Line Addis was founded in June 2017 in Addis
              Ababa, Ethiopia, to provide high-quality higher education options
              for Ethiopian students and enable prospective applicants to
              broaden their selection range of universities and colleges around
              the world.
            </p>
            <p>
              We work in partnership with various international higher education
              institutions and Assist students in counseling, admission, visa
              application, and post-departure services, thus students can
              experience the simplicity and ease in the process of studying
              abroad more than ever.
            </p>
            <div className={classes.btnHolder}>
              <Button className={classes.button1} size="large">
                Find Programs
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default About;
