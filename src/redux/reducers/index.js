import { combineReducers } from 'redux';
import Auth from './Auth';
import Theme from './Theme';
import UserList from "./UserList";
import Dashboard from "./Dashboard";

const reducers = combineReducers({
    theme: Theme,
    auth: Auth,
    userList: UserList,
    dashboard: Dashboard
});

export default reducers;
