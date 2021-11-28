import React, { useState } from "react";

// styles
import classes from "./contactUs.module.css";
// antd
import { Form, Input, Button, notification } from "antd";
const { TextArea } = Input;
export default function ContactUs() {
  const [sending, setSending] = useState(false);
  const onFinish = (values: any) => {
    setSending(true);
    fetch("http://localhost:3005/api/v1/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: values.email, message: values.message }),
    })
      .then((res) => {
        if (res.ok) {
          notification.success({
            duration: 5,
            message: "Success",
            description: "Your message have been successfully sent.",
          });
        } else {
          notification.error({
            duration: 5,
            message: "Failure",
            description: "Something went wrong when sending your message.",
          });
        }
      })
      .catch((e) =>
        notification.error({
          duration: 5,
          message: "Failure",
          description: "Something went wrong when sending your message.",
        })
      )
      .finally(() => setSending(false));
  };
  return (
    <div id="about" className={`${classes.block} ${classes.serviceBlock}`}>
      <div className={classes.containerFluid}>
        <div className={classes.container}>
          <div className={classes.left}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2786.5338233122516!2d38.78381670696867!3d8.99477616806764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b84fdf566b8a9%3A0x3cfc05836ed024a4!2sGulf%20Aziz%20Building!5e0!3m2!1sen!2set!4v1634231070016!5m2!1sen!2set"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
            ></iframe>
          </div>
          <div className={classes.right}>
            <Form
              className={classes.form}
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
              wrapperCol={{ span: 24 }}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { type: "email" },
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input placeholder="Your email address here" size="large" />
              </Form.Item>

              <Form.Item
                label="Message"
                name="message"
                rules={[
                  {
                    required: true,
                    message: "Please write a message!",
                  },
                ]}
              >
                <TextArea
                  rows={7}
                  placeholder="Your message here"
                  size="large"
                  maxLength={500}
                  showCount={true}
                />
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  size="large"
                  htmlType="submit"
                  className={classes.send}
                  loading={sending}
                >
                  Send
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}
