import classes from "./Faq.module.css";
import { Collapse, Button } from "antd";

const { Panel } = Collapse;

function Faq() {
  return (
    <div className={classes.bgColor}>
      <div id="faq" className={`${classes.block} ${classes.faqBlock}`}>
        <div className={classes.containerFluid}>
          <div className={classes.titleHolder}>
            <h2>Frequently Asked Questions</h2>
          </div>
          <Collapse defaultActiveKey={["1"]} bordered={false} accordion>
            <Panel
              header="General Application Steps"
              className={classes.panelTitle}
              key="1"
            >
              <p className={classes.panelContent}>
                1️. Select the country and course you wish to study in from our
                website Click Here To Browse Programs, you can filter with
                country, degree level and program area at your convenience, or
                you can visit our office in person and we will advice you the
                available options <br /> <br />
                2️. Send a scanned copy of the complete application documents
                using one of the options below <br />
                 Email: hello@skykeys.com  <br />
                Telegram: @SkyKeys_Consultancy <br />
                 Website: <a href="">Click Here to Start</a> <br />
                 Bring Original documents to our office, we will scan them
                <br /> <br /> 3️. Visit our office, make an advance payment /
                application fee and sign the Agreement. If you live far away, we
                can sign contracts online or you can send your representative to
                sign it on your behalf
                <br /> <br /> 4️. Wait for a letter conditional acceptance from
                the university. Some universities/colleges may require a video
                interview before issuing your Conditional Offer letter.
                <br /> <br /> 5️. Upon receipt of the Conditional Offer Letter,
                you may be required to pay an application fee, part of your
                tuition fees, or a deposit to your school account. If you are
                required to do so, the university account details will be
                provided in the offer letter.
                <br /> <br />
                6️. After making the required payment to the university's
                account, you will receive an official acceptance letter along
                with supportive documents I.e accommodation letter & invitations
                to help in applying for a visa
                <br /> <br /> 7️. At this point, it is required to prepare visa
                documents Visa documents may contain  - sponsor's files, i.e.
                your sponsor's bank statement, income verifications, sponsor ID,
                affidavit. Depends on which embassy you are applying for visa,
                Sponsor documents may not be required, contact us to know
                details about it.  - Health Certificates: Some countries may
                require a health certificate( contact us to know whether you
                need to provide a certificate)  - Forms for Embassy visits /
                reservations at the embassy  - Invitations/ Acceptance  -
                Authenticated educational documents  - Travel/Medical/health
                insurance Each country's consulate may require different visa
                documents, please contact us for more information
                <br /> <br /> 8️. We will provide you with orientation about the
                visa interview , if any, and documents you need to prepare.
                <br /> <br /> 9️. Apply for a visa at the appropriate consulate
                / embassy
                <br /> <br /> 10. There can be two visa decisions, The visa can
                be granted or refused if your visa is refused, we will help you
                repeatedly appeal against the decision without any service fees
                If you have received a visa: we will provide you services with
                Pre- departure orientation, book your accommodation or arrange
                an airport pickup service.
              </p>
            </Panel>
            <Panel
              header="How Can I Trust Sky Keys"
              className={classes.panelTitle}
              key="2"
            >
              <p className={classes.panelContent}>
                Confirm Our Authorization and Experience from Our Partner
                Universities <br /> <br /> Visit our office to see company
                registration documents, certificates of authorization and more{" "}
                <br /> <br />
                Sign a legal agreement with us, which in the event of any
                dispute may arise and cannot be resolved through discussion ,
                and which can always be mediated in accordance with national
                law. <br /> <br />
                Should you require any more evidences? Dont hesitate to contact
                us.
              </p>
            </Panel>
            <Panel
              header="Why Should I Choose Sky Keys"
              className={classes.panelTitle}
              key="3"
            >
              <p className={classes.panelContent}>
                1. Punctuality
                <br /> <br />
                2. Low Service Charges
                <br /> <br />
                3. 95% Visa Success Rate
                <br /> <br />
                4. Five Years of Experience
                <br /> <br />
                5. Accreditation
              </p>
            </Panel>
          </Collapse>
          {/* <div className={classes.quickSupport}>
            <Button className={classes.button1} size="large">
              READ MORE FAQs
            </Button>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default Faq;
