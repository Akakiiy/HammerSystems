import React, {useEffect, useState} from 'react';
import {Avatar, Button, Col, Form, Input, message, Row, Upload} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import {ROW_GUTTER} from 'constants/ThemeConstant';
import Flex from 'components/shared-components/Flex'
import {useDispatch, useSelector} from "react-redux";
import {useHistory, useParams, useRouteMatch} from "react-router-dom";
import axios from "axios";
import Loading from "../../../components/shared-components/Loading";
import {setEditedUser} from "../../../redux/actions/UserList";

export const EditClientProfile = () => {

	const [avatarUrl, setAvatarUrl] = useState('')
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [userName, setUserName] = useState('')
	const [phoneNumber, setPhoneNumber] = useState('')
	const [website, setWebsite] = useState('')
	const [address, setAddress] = useState('')
	const [city, setCity] = useState('')
	const [loading, setLoading] = useState(false)

  const editedUser = useSelector(state => state.userList.editedUser)
  const dispatch = useDispatch()

  const history = useHistory();
  const { clientId } = useParams();

  useEffect(() => {
    let isMounted = true;

    if (!editedUser) {
      setLoading(true);
      axios.get(`https://jsonplaceholder.typicode.com/users/${clientId}`)
        .then(res => {
          if (isMounted) {
            dispatch(setEditedUser(res.data));
            setLoading(false);
          }
        });
    } else {
      setName(editedUser.name);
      setEmail(editedUser.email);
      setUserName(editedUser.username);
      setPhoneNumber(editedUser.phone);
      setWebsite(editedUser.website);
      setAddress(editedUser.address.street);
      setCity(editedUser.address.city);
    }

    return () => {
      isMounted = false;
    };
  }, [editedUser]);


  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }

  const onFinish = values => {
    const key = 'updatable';
    message.loading({content: 'Updating...', key});
    setTimeout(() => {
      setName(values.name)
      setEmail(values.email)
      setUserName(values.userName)
      setPhoneNumber(values.phoneNumber)
      setWebsite(values.website)
      setAddress(values.address)
      setCity(values.city)
      message.success({content: 'Done!', key, duration: 1});
      setTimeout(() => {
        history.goBack();
      }, 1000);
    }, 1000);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const onUploadAavater = info => {
    const key = 'updatable';
    if (info.file.status === 'uploading') {
      message.loading({content: 'Uploading...', key, duration: 1000});
      return;
    }
    if (info.file.status === 'done') {
      getBase64(info.file.originFileObj, imageUrl =>
        setAvatarUrl(imageUrl)
      );
      message.success({content: 'Uploaded!', key, duration: 1.5});
    }
  };

  const onRemoveAvater = () => {
    setAvatarUrl('')
  }

  if (loading) {
    return <Loading />
  }
  return (
    <>
      <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
        <Avatar size={90} src={avatarUrl} icon={<UserOutlined/>}/>
        <div className="ml-md-3 mt-md-0 mt-3">
          <Upload onChange={onUploadAavater} showUploadList={false} action={avatarUrl}>
            <Button type="primary">Change Avatar</Button>
          </Upload>
          <Button className="ml-2" onClick={onRemoveAvater}>Remove</Button>
        </div>
      </Flex>
      <div className="mt-4">
        <Form
          key={`${name}${email}`}
          name="basicInformation"
          layout="vertical"
          initialValues={
            {
              'name': name,
              'email': email,
              'username': userName,
              'phoneNumber': phoneNumber,
              'website': website,
              'address': address,
              'city': city,
            }
          }
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
                        message: 'Please input your name!',
                      },
                    ]}
                  >
                    <Input/>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                      {
                        required: true,
                        message: 'Please input your username!'
                      },
                    ]}
                  >
                    <Input/>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Email"
                    name="email"
                    rules={[{
                      required: true,
                      type: 'email',
                      message: 'Please enter a valid email!'
                    }]}
                  >
                    <Input/>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Phone Number"
                    name="phoneNumber"
                  >
                    <Input/>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="Website"
                    name="website"
                  >
                    <Input/>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={12}>
                  <Form.Item
                    label="City"
                    name="city"
                  >
                    <Input/>
                  </Form.Item>
                </Col>
                <Col xs={24} sm={24} md={24}>
                  <Form.Item
                    label="Address"
                    name="address"
                  >
                    <Input/>
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
  )
}

export default EditClientProfile
