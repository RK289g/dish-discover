import { useRef, useState } from "react";
import "./ContactUs.css";
import { Controller, useForm } from "react-hook-form";
import { Button, Col, Input, Row, message } from "antd";
import emailjs from "@emailjs/browser";
import TextArea from "antd/es/input/TextArea";
import { Link } from "react-router-dom";
import FacebookIcon from "../../components/common/logo/FacebookIcon";
import LinkedinIcon from "../../components/common/logo/LinkedInIcon";
import TwitterIcon from "../../components/common/logo/TwitterIcon";

const ContactUs = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  const [isLoading, setIsLoading] = useState(false);

  const form = useRef(null);

  const onSubmit = (data) => {
    console.log(data);
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_9cetc9a",
        "template_z4daixp",
        form.current,
        "qXkCWWJXXy1G1ho97"
      )
      .then(
        (result) => {
          setIsLoading(false);
          console.log(result.text);
          message.success("Got your message, thank you");
          reset();
        },
        (error) => {
          setIsLoading(false);
          console.log(error.text);
          message.success("Email sending failed");
        }
      );
  };

  return (
    <div className="contact-me-wrapper">
      <div className="contact-me-inner-wrapper">
        <Row gutter={{ md: 60 }} align="middle">
          <Col span={24} md={{ span: 12 }}>
            <div className="contact-us-title">
              <h3 className="page-title">Get in touch</h3>
              <p className="page-sub-title">Need to get in touch with us?</p>
              <p className="page-sub-title">
                Use the form or Social Media link below
              </p>
            </div>
            <div className="user-social-media-wrapper">
              <div className="user-social-media">
                <Link
                  to="https://www.linkedin.com/in/raisul-karim-saju/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="user-link"
                >
                  <LinkedinIcon />
                </Link>
              </div>
              <div className="user-social-media">
                <Link
                  to="https://twitter.com/RaisulSaju"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="user-link"
                >
                  <TwitterIcon />
                </Link>
              </div>
              <div className="user-social-media">
                <Link
                  to="https://www.facebook.com/profile.php?id=100086738076898"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="user-link"
                >
                  <FacebookIcon />
                </Link>
              </div>
            </div>
          </Col>
          <Col span={24} md={{ span: 12 }}>
            <div className="form-wrapper">
              <p className="page-sub-title">Fill the form to connect</p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                ref={form}
                className="contact-us-form"
              >
                <div className="margin-bottom-30">
                  <Controller
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Full Name"
                        className="general-input"
                      />
                    )}
                    name="to_name"
                    control={control}
                    rules={{ required: true }}
                  />
                  {errors?.to_name?.type === "required" && (
                    <span className="error-message">
                      Please Enter Your Name
                    </span>
                  )}
                </div>
                <div className="margin-bottom-30">
                  <Controller
                    render={({ field }) => (
                      <Input
                        {...field}
                        placeholder="Email"
                        className="general-input"
                      />
                    )}
                    name="from_email"
                    control={control}
                    // rules={{ required: true, pattern: RegexValidators.EMAIL }}
                  />
                  {errors?.from_email?.type === "required" && (
                    <span className="error-message">
                      Please Enter Your Email
                    </span>
                  )}
                  {errors?.from_email?.type === "pattern" && (
                    <span className="error-message">
                      Please Enter a valid Email Address Name
                    </span>
                  )}
                </div>
                <div className="margin-bottom-30">
                  <Controller
                    render={({ field }) => (
                      <TextArea
                        {...field}
                        placeholder="Message"
                        className="general-input"
                        autoSize={{ minRows: 3, maxRows: 5 }}
                      />
                    )}
                    name="message"
                    control={control}
                    rules={{ required: true }}
                  />

                  {errors?.from_email?.type === "required" && (
                    <span className="error-message">
                      Please Enter Your Message
                    </span>
                  )}
                </div>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="submit-button"
                  loading={isLoading}
                >
                  Send Message
                </Button>
              </form>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ContactUs;
