import React from "react";
import styles from "./Footer.module.css";

import { BsFillArrowUpSquareFill } from "react-icons/bs";

import { BackTop, Row, Col, Button } from "antd";

import { BsFacebook } from "react-icons/bs";
import { BsTelegram } from "react-icons/bs";
import { ImInstagram } from "react-icons/im";
// styles
import classes from "../../home/Contact/contactUs.module.css";

function AppFooter() {
  return (
    <div className={styles.containerFluid}>
      <div className="footer">
        <Row justify="start" className="footerLink" gutter={[16, 16]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <div className={styles.footerHeader}>
              <div>
                <h3 className={styles.footerTitle}> Social Media Links </h3>
              </div>
              <p style={{ color: "grey" }}>
                <a
                  href="https://www.facebook.com/SkyKeysEdu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<BsFacebook className={classes.smi} />}
                </a>
                <a
                  href="https://www.instagram.com/sky.keys"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<ImInstagram className={classes.smi} />}
                </a>
                <a
                  href="https://t.me/SkyKeys_Consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {<BsTelegram className={classes.smi} />}
                </a>
              </p>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
            <h3 className={styles.footerTitle}> Address </h3>
            <ul className={styles.footerList}>
              <li>Bole, Gulf Aziz Bldg.</li>
            </ul>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
            <h3 className={styles.footerTitle}> Contact </h3>
            <ul className={styles.footerList}>
              <li>+25194848484</li>
              <li>+25195454545</li>
              <li>hello@skykeys.et</li>
            </ul>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
            <h3 className={styles.footerTitle}> Apply </h3>
            <ul className={styles.footerList}>
              <li>Apply now</li>
            </ul>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 12 }} md={{ span: 4 }}>
            <h3 className={styles.footerTitle}> Feedback </h3>
            <ul className={styles.footerList}>
              <li>Give us your feedbacks</li>
            </ul>
          </Col>
        </Row>

        <BackTop>
          <div className="goTop">
            <BsFillArrowUpSquareFill
              style={{ height: "30px", width: "30px" , color: "#6d79ff"}}
            />
          </div>
        </BackTop>
      </div>
    </div>
  );
}

export default AppFooter;
