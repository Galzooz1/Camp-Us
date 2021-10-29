import React, { useState } from 'react';
import {
  Form,
  Input,
  Row,
  Col,
  Button,
} from 'antd';
import { doApiMethod, URL_API } from '../services/apiService';
import { toast } from 'react-toastify';

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const RegistrationForm = () => {
  const [form] = Form.useForm();
  const [randomNum, setRandomNum] = useState(String(Math.floor(Math.random() * 1000000)));
  const [captcha, setCaptcha] = useState();

  const onSignupRequested = async (SignupArgs) => {
    delete SignupArgs['captcha'];
    console.log(12414, SignupArgs)
    let url = URL_API + "/";
    let data = await doApiMethod(url, "POST", SignupArgs);
    console.log(data);
    if (data.add === 1) {
      toast.success("Signed up successful!");
    } else {
      toast.error("A problem occuried");
    }
  }

  const onFinish = (values) => {
    console.log("randomNum",randomNum)
    console.log("captcha",captcha)
    if(captcha === randomNum){
      console.log('Received values of form: ', values);
      delete values['confirm'];
      onSignupRequested(values)
    }else{
      toast.error("Captcha is not correct, try again")
      changeCaptcha();
    }
  };

  const changeCaptcha = () => {
    setRandomNum(String(Math.floor(Math.random() * 1000000)));
  }

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      scrollToFirstError
    >
      <Form.Item
        name="email"
        label="E-mail"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Confirm Password"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }

              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="first_name"
        label="First Name"
        rules={[
          {
            required: true,
            message: 'Please input your first name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="last_name"
        label="Last Name"
        tooltip="What do you want others to call you?"
        rules={[
          {
            required: true,
            message: 'Please input your last name!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="city"
        label="City"
        rules={[
          {
            required: true,
            message: 'Please select your city!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="address"
        label="Address"
        rules={[
          {
            required: true,
            message: 'Please select your address!',
            whitespace: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="house_number"
        label="House Number"
        rules={[
          {
            // pattern: new RegExp(/^[0-9]+$/),
            required: false
          },
        ]}
      >
        <Input
          style={{ width: '30%' }}
        />
      </Form.Item>

      <Form.Item
        name="phone"
        label="Phone Number"
        rules={[
          {
            required: true,
            message: 'Please input your phone number!',
          },
        ]}
      >
        <Input
          style={{
            width: '100%',
          }}
        />
      </Form.Item>

      <Form.Item label="Captcha" extra="We must make sure that your are a human.">
        <Row gutter={8}>
          <Col span={12}>
            <Form.Item
              name="captcha"
              noStyle
              rules={[
                {
                  required: true,
                  message: 'Please input the captcha you got!',
                },
              ]}
            >
              <Input onChange={e => setCaptcha(e.target.value)} />
            </Form.Item>
          </Col>
          <Col span={6}>
            <div onClick={changeCaptcha} className="border border-success text-center py-1 fw-bold" style={{ letterSpacing: "2px", fontStyle:"italic" }}>{randomNum}</div>
          </Col>
          <div className="mt-2 d-flex justify-content-around">
            <Col span={12}>
              {/* <span className="text-danger" style={{display:captcha !== randomNum ? "block" : "none"}}>aaaaa</span> */}
              {/* <Button className="border border-primary text-primary" onClick={checkCaptcha(captcha)}>Check Captcha</Button> */}
            </Col>
            <Col span={12}>
              {/* <Button className="border border-danger text-danger" onClick={changeCaptcha}>Change Captcha</Button> */}
            </Col>
          </div>
        </Row>
      </Form.Item>

      {/* <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
      </Form.Item> */}
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default RegistrationForm;