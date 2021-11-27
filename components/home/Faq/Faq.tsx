import classes from './Faq.module.css'
import { Collapse, Button } from 'antd';

const { Panel } = Collapse;

function Faq() {
    return (
        <div className={classes.bgColor}>
            <div id="faq" className={`${classes.block} ${classes.faqBlock}`}>
                <div className={classes.containerFluid}>
                    <div className={classes.titleHolder}>
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <Collapse
                        defaultActiveKey={['1']}
                        bordered={false}
                    >
                        <Panel header="General Application Steps" className={classes.panelTitle} key="1">
                            <p className={classes.panelContent}>Ut per tempor latine fuisset, cu quod posidonium vix. Mei cu erant bonorum, te ius vide maiorum hendrerit. In alii instructior vix, vis et elit maluisset, usu recusabo atomorum ut. Nibh diceret dolores vix et, id omnis adhuc maiestatis vim, ei mel legendos mnesarchum argumentum. Semper nusquam urbanitas sea te.</p>
                        </Panel>
                        <Panel header="How Can I Trust Line Addis" className={classes.panelTitle} key="2">
                            <p className={classes.panelContent}>Postea ceteros corrumpit ius te, eos epicuri intellegebat consequuntur et. Sint quot suscipiantur ea nam. Nam pericula evertitur ut, per et quod nostro, autem augue id has. Virtute epicurei quo te, pri et novum essent senserit.</p>
                        </Panel>
                        <Panel header="Why Should I Choose Line Addis" className={classes.panelTitle} key="3">
                            <p className={classes.panelContent}>Eu veritus ancillae suavitate per, cum in appellantur efficiantur. Eum cu clita ponderum lobortis, usu dicat exerci et, eam alii oblique interesset ea. Suas quidam volumus id eam, id populo euripidis temporibus pri. At eum quas putent iriure, fugit tritani sed ad. Per ad magna possim aliquam, est aeque exerci verear an, qui cu modus audire detraxit. Duo ne nostro rationibus, nam mutat omittam evertitur ad, meliore gubergren voluptatum at mel.</p>
                        </Panel>

                    </Collapse>
                    <div className={classes.quickSupport}>
                        <Button className={classes.button1} size="large"> READ MORE FAQs</Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Faq;