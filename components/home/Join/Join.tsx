import classes from './Join.module.css'
import Image from 'next/image';
// antd
import { Row, Col, Button } from 'antd';
import { Card } from 'antd';

import image1 from '../../../public/images/logo.png'
import image2 from '../../../public/images/logo.png'
import image3 from '../../../public/images/logo.png'
import image4 from '../../../public/images/logo.png'

const items = [
    {
        key: '1',
        image: image1,
        title: 'Turkey',
    },
    {
        key: '2',
        image: image2,
        title: 'Poland',
    },
    {
        key: '3',
        image: image3,
        title: 'America',
    },
    {
        key: '4',
        image: image4,
        title: 'England',
    },
]

function Join() {
    return (
        <div className={classes.bgColor}>
            <div id="about" className={`${classes.block} ${classes.serviceBlock}`}>
                <div className={classes.containerFluid}>

                    <Row gutter={[24, 24]} justify="center" align="middle" className={classes.aboutCard}>
                        <Col span={12} className={classes.leftSide}>
                            <h3 className={classes.title1}>Your Journey Starts from Here!</h3>
                            <h2 className={classes.title2}>Apply Online</h2>
                            <Button className={classes.joinButton}>APPLY HERE</Button>

                        </Col>
                        <Col span={12} className={classes.rightSide}>
                            <h3 className={classes.title1}>Be Our Agent, Earn A Passive Income!</h3>
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