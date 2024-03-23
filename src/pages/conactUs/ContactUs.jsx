import { Button, Checkbox, Col, Image, Input, Row } from "antd";
import "./ContactUs.css";
import contactImage from "./../../assets/contactUs/contactImage.jpg";

const ContactUs = () => {
  return (
    <div className="home-wrapper">
      <div className="recipe-category-inner-wrapper contact-inner-wrapper">
        <Row>
          <Col span={12}>
            <Image
              className="contact-image"
              src={contactImage}
              preview={false}
            />
          </Col>
          <Col span={12} className="contact-message-wrapper">
            <div className="contact-message-inner-wrapper">
              <div className="name-wrapper">
                <div className="first-name-wrapper">
                  <p className="first-name font-inter">First name</p>
                  <Input placeholder="First name" className="name-box" />
                </div>
                <div className="first-name-wrapper">
                  <p className="first-name font-inter">Last name</p>
                  <Input placeholder="Last name" className="name-box" />
                </div>
              </div>
              <div className="mail-wrapper">
                <p className="first-name font-inter">Email</p>
                <Input placeholder="you@company.com" />
              </div>
              <div className="message-wrapper">
                <p className="first-name font-inter">Message</p>
                <Input placeholder="" className="message-box" />
              </div>
              <Checkbox className="checkbox-container">You agree to our friendly privacy policy.</Checkbox>
              <Button className="message-button font-inter" block>
                Send message
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};
export default ContactUs;
