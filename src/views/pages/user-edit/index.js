import { UserOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Form, Input, Row, Upload, message } from "antd";
import Flex from "components/shared-components/Flex";
import Loading from "components/shared-components/Loading";
import { ROW_GUTTER } from "constants/ThemeConstant";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const getUserAddress = (address) => {
  const { street, suite } = address;
  return [street, suite].join(", ");
};

const initialUser = {
  name: "",
  email: "",
  username: "",
  phoneNumber: "",
  website: "",
  address: "",
  city: "",
  company: "",
  postcode: "",
};

function EditProfile() {
  const [isLoading, setIsLoading] = useState(false);
  const [form] = Form.useForm();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    form.setFieldsValue();
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/users/${params.userId}`
        );
        const user = await res.json();
        form.setFieldsValue({
          name: user.name,
          email: user.email,
          username: user.username,
          phoneNumber: user.phone,
          website: user.website,
          address: getUserAddress(user.address),
          city: user.address.city,
          company: user.company.name,
          postcode: user.address.zipcode,
        });
      } catch (err) {
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchUser();
  }, [params.userId, form]);

  const onFinish = (values) => {
    const key = "updatable";
    message.loading({ content: "Updating...", key });
    setTimeout(() => {
      navigate("/app/clients/list");
      message.success({ content: "Done!", key, duration: 2 });
    }, 1000);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <Flex
        alignItems="center"
        mobileFlex={false}
        className="text-center text-md-left"
      >
        <Avatar
          size={90}
          src="/img/avatars/thumb-6.jpg"
          icon={<UserOutlined />}
        />
        <div className="ml-3 mt-md-0 mt-3">
          <Upload
            showUploadList={false}
            // action={avatarEndpoint}
          >
            <Button type="primary">Change Avatar</Button>
          </Upload>
          <Button className="ml-2">Remove</Button>
        </div>
      </Flex>
      <div className="mt-4">
        <Form
          form={form}
          name="basicInformation"
          layout="vertical"
          initialValues={initialUser}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row>
            <Col xs={24} sm={24} md={24} lg={16}>
              <Row gutter={ROW_GUTTER}>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Name"
                    name="name"
                    rules={[
                      {
                        required: true,
                        message: "Please input your name!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: "Please input your username!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                      {
                        required: true,
                        type: "email",
                        message: "Please enter a valid email!",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Company" name="company">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Phone Number" name="phoneNumber">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Website" name="website">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <Form.Item label="Address" name="address">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="City" name="city">
                    <Input />
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item label="Post code" name="postcode">
                    <Input />
                  </Form.Item>
                </Col>
              </Row>
              <Button type="primary" htmlType="submit">
                Save Change
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    </>
  );
}

export default EditProfile;
