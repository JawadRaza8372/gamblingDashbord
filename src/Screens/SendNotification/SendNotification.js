import React, { useState } from "react";
import "./SendNotification.scss";
import axios from "axios";
import { apiurl } from "../../App";

function SendNotification() {
	const [formSubmit, setformSubmit] = useState({
		title: "",
		msg: "",
	});
	const adduserfunc = async (e) => {
		e.preventDefault();
		const rest = await axios.post(`${apiurl}/Notifications/`, {
			...formSubmit,
			id: "627b481fd842dce8deeaa59f",
		});
		console.log(rest);
		if (rest.data.status === 200) {
			alert("Notification sent");
			setformSubmit({
				title: "",
				msg: "",
			});
		}
	};
	const handleChange = (e) => {
		const name = e.target.id;
		const value = e.target.value;
		setformSubmit((prevalue) => {
			return {
				...prevalue,
				[name]: value,
			};
		});
	};
	return (
		<div className='sendNotification'>
			<form className='adduserform' onSubmit={adduserfunc}>
				<h1 className='formHeading'>Send Notification</h1>
				<input
					autoCapitalize='off'
					autoComplete='off'
					autoCorrect='off'
					type={"text"}
					placeholder='Title'
					minLength={5}
					id='title'
					value={formSubmit.title}
					onChange={handleChange}
				/>
				<input
					autoCapitalize='off'
					autoComplete='off'
					autoCorrect='off'
					type={"text"}
					placeholder='Message'
					minLength={5}
					id='msg'
					value={formSubmit.msg}
					onChange={handleChange}
				/>
				<button type='submit'>Send</button>
			</form>
		</div>
	);
}

export default SendNotification;
