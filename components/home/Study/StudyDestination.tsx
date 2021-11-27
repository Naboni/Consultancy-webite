import classes from './StudyDestination.module.css'
import Image from 'next/image';
// antd
import { Row, Col } from 'antd';
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

function StudyDestination() {
    return (
        <div className={classes.bgColor}>
            <div id="about" className={`${classes.block} ${classes.serviceBlock}`}>
                <div className={classes.containerFluid}>
                    <div className={classes.titleHolder}>
                        <h2>Study Destinations</h2>
                    </div>

                    <Row gutter={[24, 24]}>
                        {items.map(item => {
                            return (
                                <Col md={{ span: 6 }} key={item.key}>
                                    <Image alt="example" src={item.image} height={400} />

                                    <h3 className={classes.metaTitle}> {item.title}</h3>

                                </Col>
                            );
                        })}
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default StudyDestination;