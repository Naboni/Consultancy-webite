// antd
import { Button } from 'antd';

import classes from './Hero.module.css'

function Hero() {
    return (
        <div id="hero" className={classes.heroBlock}>
            <div className={classes.containerFluid}>
                <div className={classes.content}>
                    <h3>LINE ADDIS</h3>
                    <p>Educational Consultancy</p>
                    <div className={classes.btnHolder}>
                        <Button className={classes.button1} size="large">Learn More</Button>
                        <Button className={classes.button2} size="large"> Find Programs</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;