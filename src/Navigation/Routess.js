import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import AuthScreen from "../Screens/AuthScreen/AuthScreen";
import UserScreen from "../Screens/UserScreen/UserScreen";
import AddUserScreen from "../Screens/AddUserScreen/AddUserScreen";
import { useSelector } from "react-redux";
import SendNotification from "../Screens/SendNotification/SendNotification";
import ErrorPage from "../Screens/ErrorPage/ErrorPage";
import ChatScreen from "../Screens/ChatScreen/ChatScreen";
import ChatListScreen from "../Screens/ChatListScreen/ChatListScreen";
function Routess() {
	return (
		<Routes>
			<Route
				path='/'
				element={
					<AuthRoute>
						<AuthScreen />
					</AuthRoute>
				}
			/>

			<Route
				path='/userList'
				element={
					<ProtectedRoute>
						<UserScreen />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/addusers'
				element={
					<ProtectedRoute>
						<AddUserScreen />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/send_alert'
				element={
					<ProtectedRoute>
						<SendNotification />
					</ProtectedRoute>
				}
			/>
			<Route
				path='/chat'
				element={
					<ProtectedRoute>
						<ChatListScreen />
					</ProtectedRoute>
				}
			/>

			<Route
				path='/chat/:id'
				element={
					<ProtectedRoute>
						<ChatScreen />
					</ProtectedRoute>
				}
			/>
			<Route path='*' element={<ErrorPage />} />
		</Routes>
	);
}
let ProtectedRoute = ({ children }) => {
	const { isAuth } = useSelector((state) => state.auth);
	return isAuth ? children : <Navigate to='/' />;
};
let AuthRoute = ({ children }) => {
	const { isAuth } = useSelector((state) => state.auth);

	return isAuth ? <Navigate to='/userList' /> : children;
};
export default Routess;
