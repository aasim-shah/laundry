import React,{useState} from "react";
import { Col, Row, Button, Input, Select, Space , message } from "antd";

function NewsLetterArea() {
  const [subscribeEmail ,SetsubscribeEmail] = useState("")

  const ShowMessage = () => {
    message.success("NewsLetter Subscribed Successfully")
    SetsubscribeEmail("")
  }

  return (
    <Row justify={"center"}>
      <Col xs={22} md={18} lg={16}>
        <div className="newsletterarea" data-aos="flip-up" data-aos-duration="1000">
          <h2>Subscribe For Newsletter</h2>
          <div className="newsletterfield">
            <Space.Compact
              style={{
                width: "100%",
              }}
            >
              <Input placeholder="Enter your email address..." value={subscribeEmail} onChange={(e) => SetsubscribeEmail(e.target.value)}  />
              <Button className="mainbtn" onClick={() => ShowMessage()}>Subscribe NOW!</Button>
            </Space.Compact>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default NewsLetterArea;
