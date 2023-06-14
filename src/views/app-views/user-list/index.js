import React, {useEffect, useState} from 'react'
import {Button, Card, message, Table, Tooltip} from 'antd';
import {DeleteOutlined, EyeOutlined} from '@ant-design/icons';
import UserView from './UserView';
import AvatarStatus from 'components/shared-components/AvatarStatus';
import axios from "axios";
import Loading from "../../../components/shared-components/Loading";
import {Link} from "react-router-dom";
import {APP_PREFIX_PATH} from "../../../configs/AppConfig";
import {deleteUser, setEditedUser, setUsers} from "../../../redux/actions/UserList";
import {useDispatch, useSelector} from "react-redux";

export const UserList = () => {

	const [userProfileVisible, setUserProfileVisible] = useState(false)
	const [selectedUser, setSelectedUser] = useState(null)
	const users = useSelector(state => state.userList.users)

	const dispatch = useDispatch()

	useEffect(() => {
		axios.get('https://jsonplaceholder.typicode.com/users')
			.then(res => dispatch(setUsers(res.data)))
	}, [])

	const deleteUserHandler = userId => {
		dispatch(deleteUser(userId))
		message.success({ content: `Deleted user ${userId}`, duration: 2 });
	}

	const showUserProfile = userInfo => {
		setUserProfileVisible(true)
		setSelectedUser(userInfo)
	};

	const closeUserProfile = () => {
		setUserProfileVisible(false)
		setSelectedUser(null);
	}

	const setEditUserHandler = (userId) => {
		const editedUser = users.find(user => user.id === userId)
		dispatch(setEditedUser(editedUser))
	}

	const tableColumns = [
		{
			title: 'User',
			dataIndex: 'name',
			render: (_, record) => (
				<Link onClick={() => setEditUserHandler(record.id)} to={`${APP_PREFIX_PATH}/home/clients/list/${record.id}`} >
					<div className="d-flex">
						<AvatarStatus src={record.img} name={record.name} subTitle={record.email}/>
					</div>
				</Link>
			),
			sorter: {
				compare: (a, b) => {
					a = a.name.toLowerCase();
					b = b.name.toLowerCase();
					return a > b ? -1 : b > a ? 1 : 0;
				},
			},
		},
		{
			title: 'Address',
			dataIndex: 'address',
			render: (_, record) => {
				return (
					<div className="d-flex flex-column">
						<div>Улица: {record.address.street}</div>
						<div>Город: {record.address.city}</div>
					</div>
				)
			},
		},
		{
			title: 'Phone',
			dataIndex: 'phone',
		},
		{
			title: 'Website',
			dataIndex: 'website',
		},
		{
			title: 'Company',
			dataIndex: 'company',
			render: (_, record) => {
				return (
					<div>{record.company.name}</div>
				)
			},
		},
		{
			title: '',
			dataIndex: 'actions',
			render: (_, elm) => (
				<div className="text-right">
					<Tooltip title="View">
						<Button type="primary" className="mr-2" icon={<EyeOutlined />} onClick={() => {showUserProfile(elm)}} size="small"/>
					</Tooltip>
					<Tooltip title="Delete">
						<Button danger icon={<DeleteOutlined />} onClick={()=> {deleteUserHandler(elm.id)}} size="small"/>
					</Tooltip>
				</div>
			)
		}
	];


	return (
		<Card bodyStyle={{'padding': '0px'}}>
			<Table columns={tableColumns} dataSource={users} locale={{ emptyText: <Loading />}} rowKey='id' />
			<UserView data={selectedUser} visible={userProfileVisible} close={()=> {closeUserProfile()}}/>
		</Card>
	)
}

export default UserList
