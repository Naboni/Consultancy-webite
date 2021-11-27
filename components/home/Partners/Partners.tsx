import classes from './Partners.module.css'
// antd
import { Row, Col } from 'antd';

import { AiOutlineClockCircle, AiOutlineUsergroupAdd, AiOutlineDollar, AiOutlineMobile } from 'react-icons/ai';

const items = [
    {
        key: '1',
        icon: <AiOutlineClockCircle />,
    },
    {
        key: '2',
        icon: <AiOutlineUsergroupAdd />,
    },
    {
        key: '3',
        icon: <AiOutlineDollar />,
    },
    {
        key: '4',
        icon: <AiOutlineMobile />,
    },
    {
        key: '5',
        icon: <AiOutlineClockCircle />,
    },
    {
        key: '6',
        icon: <AiOutlineMobile />,
    },
    {
        key: '7',
        icon: <AiOutlineUsergroupAdd />,
    },
    {
        key: '8',
        icon: <AiOutlineClockCircle />,
    },
    {
        key: '9',
        icon: <AiOutlineUsergroupAdd />,
    },
    {
        key: '10',
        icon: <AiOutlineDollar />,
    },
    {
        key: '11',
        icon: <AiOutlineMobile />,
    },
    {
        key: '12',
        icon: <AiOutlineClockCircle />,
    },
]

function Partners() {
    return (
        <div>
            <div id="about" className={`${classes.block} ${classes.serviceBlock}`}>
                <div className={classes.containerFluid}>
                    <div className={classes.titleHolder}>
                        <h2>Our Partners</h2>
                        <h5>Few of Our Partners Abroad</h5>
                    </div>

                    <Row gutter={[24, 24]} justify="center">
                        {items.map(item => {
                            return (
                                <Col md={{ span: 2 }} key={item.key} className={classes.content}>
                                    <div className={classes.cardIcon}>{item.icon}</div>
                                </Col>

                            );
                        })}
                    </Row>
                    <Row gutter={[24, 24]} justify="center" style={{ paddingTop: "20px" }}>
                        {items.map(item => {
                            return (
                                <Col md={{ span: 4 }} key={item.key} className={classes.content}>
                                    <div className={classes.cardIcon}>{item.icon}</div>
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