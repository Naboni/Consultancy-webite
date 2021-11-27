import classes from './Testimonial.module.css'
import Image from 'next/image';
// antd
import { Row, Col } from 'antd';
import { Card } from 'antd';

const { Meta } = Card;

import image1 from '../../../public/images/advanced-option.jpg'
import image2 from '../../../public/images/clean-design.jpg'
import image3 from '../../../public/images/easy-customise.jpg'

const items = [
    {
        key: '1',
        image: image1,
        name: 'Yoyo Yuyu',
        content: "The consulting firm Line Addis was founded in June 2017 in Addis Ababa, Ethiopia, to provide high-quality higher education options for Ethiopian students and enable prospective applicants to broaden their selection range of universities and colleges around the world."
    },
    {
        key: '2',
        image: image2,
        name: 'Boni Banana',
        content: "The consulting firm Line Addis was founded in June 2017 in Addis Ababa, Ethiopia, to provide high-quality higher education options for Ethiopian students and enable prospective applicants to broaden their selection range of universities and colleges around the world."

    }
]

function Testimonial() {
    return (
        <div className={classes.bgColor}>
            <div id="about" className={`${classes.block} ${classes.serviceBlock}`}>
                <div className={classes.containerFluid}>
                    <div className={classes.titleHolder}>
                        <h2>Testimonies</h2>
                    </div>

                    <Row gutter={[24, 24]} align="middle" justify="space-around">
                        {items.map(item => {
                            return (
                                <Col md={{ span: 10 }} key={item.key} className={classes.content}>
                                    <Image alt="" src={item.image} className={classes.cardImg} width={200} height={200} />
                                    <p className={classes.cardContent}>
                                        {item.content}
                                    </p>
                                    <h3 className={classes.cardName}>
                                        {item.name}
                                    </h3>

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