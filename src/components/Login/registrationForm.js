import React, { useState } from 'react';
import {
  Form,
  Input,
  Row,
  Col,
  Button,
} from 'antd';
import { URL_API } from '../../services/apiService';
import { toast } from 'react-toastify';
import { observer } from 'mobx-react';
import storeLogin from '../../stores/loginStore';

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

const RegistrationForm = ({handleOk}) => {
  const [form] = Form.useForm();
  const [captcha, setCaptcha] = useState();

  const onFinish = async(SignupArgs) => {
    console.log(SignupArgs);
    if(captcha === storeLogin.randomNum){
      let url = URL_API + "/";
      delete SignupArgs['confirm'];
      let res = await storeLogin.onSignupRequest(SignupArgs, url);
      console.log(res);
      if(res === "success") handleOk();
    }else{
      toast.error("Captcha is not correct, try again")
      storeLogin.changeRandomNum();
    }
  };

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
            type:'string'
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
            type:'string'
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
            <div onClick={() => storeLogin.changeRandomNum()} className="border border-success text-center py-1 fw-bold" style={{ letterSpacing: "2px", fontStyle:"italic" }}>{storeLogin.randomNum}</div>
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

export default observer(RegistrationForm);