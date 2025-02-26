import React from "react";
import InnerBanner from "../../components/innerBanner";
import { Col, Row, Form, Input, Button, theme } from "antd";
import { useNavigate, useParams } from "react-router";
import { FaMapLocation } from "react-icons/fa6";
import { TiContacts } from "react-icons/ti";
import { FiFacebook, FiYoutube } from "react-icons/fi";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { IoMdMailOpen } from "react-icons/io";
import { Link } from "react-router-dom";
import ReCAPTCHA from "react-google-recaptcha";
import { createQuery } from '../../redux/thunk/querySlice'
import { useDispatch } from 'react-redux'
// import swal from "sweetalert";
const { TextArea } = Input;
function ContactUs() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const     onFinish = (values) => {
    // Handle form submission
    console.log("Received values:", values);
    const data = {
      firstName :  values.FullName.split(' ')[0],
      lastName :  values.FullName.split(' ')[1],
      email : values.Email,
      subject : values.Subject,
      message : values.Message ,
    }
    dispatch(createQuery(data))
    navigate("/")
  };
  const { TextArea } = Input;
  //   const handleChange = () => {
  //     swal("system Alert", "Your Message has been Send", "success");
  //   };
  const { token } = theme.useToken();
  const panelStyle = {
    marginBottom: 24,
    background: token.colorFillAlter,
    borderRadius: token.borderRadiusLG,
    border: "none",
  };
  function onChange(value) {
    console.log("Captcha value:", value);
  }
  return (
    <div>
      <InnerBanner
        heading={"Contact Us"}
        para={"Please let us know how we can improve your experience"}
      />
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col lg={24}>
          <Row justify="center">
            <Col xl={18} lg={20} xs={23}>
              <div className="details-card my-4 contact-page">
                <Row gutter={[16, 16]}>
                  <Col xl={15} lg={14} md={14} xs={24} className="for-order-1">
                    <Form
                      className="row g-3"
                      name="basic"
                      layout="vertical"
                      initialValues={{
                        remember: true,
                      }}
                      onFinish={onFinish}
                      autoComplete="off"
                    >
                      <Row style={{ width: "100%" }} gutter={[16, 16]}>
                        <Col lg={24} md={24} xs={24}>
                          <Form.Item
                            label="Full Name"
                            name="FullName"
                            rules={[
                              {
                                required: true,
                                message: "Please enter your Full Name!",
                              },
                            ]}
                          >
                            <Input
                              size="large"
                              placeholder="Enter First Name"
                              className="web-input"
                            />
                          </Form.Item>
                        </Col>
                        <Col lg={24} md={24} xs={24}>
                          <Form.Item
                            label="Email Address"
                            name="Email"
                            rules={[
                              {
                                required: true,
                                message: "Please enter your Email!",
                              },
                            ]}
                          >
                            <Input
                              size="large"
                              placeholder="Enter Email address"
                              className="web-input"
                            />
                          </Form.Item>
                        </Col>
                        <Col lg={24} md={24} xs={24}>
                          <Form.Item
                            label="Subject"
                            name="Subject"
                            rules={[
                              {
                                required: true,
                                message: "Please enter your Subject!",
                              },
                            ]}
                          >
                            <Input
                              size="large"
                              placeholder="Enter Subject"
                              className="web-input"
                            />
                          </Form.Item>
                        </Col>
                        <Col lg={24} md={24} xs={24}>
                          <Form.Item
                            label="Message"
                            name="Message"
                            rules={[
                              {
                                required: true,
                                message: "Please enter your Message!",
                              },
                            ]}
                          >
                            <TextArea
                              rows={4}
                              placeholder="Write your message.."
                              maxLength={100}
                              className="web-textarea"
                            />
                          </Form.Item>
                        </Col>
                        <div className="" style={{ textAlign: "center" }}>
                          <Button
                            type=""
                            htmlType="submit"
                            className="btn web-btn px-5"
                          >
                            SEND NOW!
                          </Button>
                        </div>
                      </Row>
                    </Form>
                  </Col>
                  <Col xl={9} lg={10} md={10} xs={24} className="for-order-2">
                    <div className="help-frame">
                      <div>
                        <h6>Contact Information</h6>
                        <Link className="contact-links">
                          <FaMapLocation /> ABC road, 123 street New York
                        </Link>
                        <Link className="contact-links">
                          <TiContacts /> +64 958 248 966
                        </Link>
                        <Link className="contact-links">
                          <IoMdMailOpen /> example@email.com
                        </Link>
                      </div>
                      <div className="social-icons-box">
                        <h5 className="f-24">Social Media</h5>
                        <Link>
                          <FiFacebook />
                        </Link>
                        <Link>
                          <FaInstagram />
                        </Link>
                        <Link>
                          <FaTwitter />
                        </Link>
                        <Link>
                          <FiYoutube />
                        </Link>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <ReCAPTCHA sitekey="Your client site key" onChange={onChange} />,
            </Col>
          </Row>
        </Col>
      </Row>

      <Row justify={"center"}>
        <Col xs={22}>
          {" "}
          <hr />
        </Col>
      </Row>
    </div>
  );
}

export default ContactUs;
