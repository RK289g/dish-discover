import {
  ArrowRightOutlined,
  FacebookOutlined,
  MailOutlined,
} from "@ant-design/icons";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <section>
      <div className="contact-header">
        <h2 className="section-title">Get in touch</h2>
        <h3 className="section-subtitle">Contact Us</h3>
      </div>

      <div className="contact-info">
        <div className="contact-card">
          <MailOutlined />
          <h3 className="contact-card-title">Email</h3>
          <p className="contact-card-data">rksaju80@gmail.com</p>
          <a href="mailto:rksaju809@gmail.com.com" className="contact-button">
            Write me <ArrowRightOutlined />
          </a>
        </div>

        <div className="contact-info">
          <div className="contact-card">
            <FacebookOutlined />
            <h3 className="contact-card-title">Facebook</h3>
            <a
              href="https://www.facebook.com/profile.php?id=100086738076898"
              className="contact-button"
            >
              Connect me <ArrowRightOutlined />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
