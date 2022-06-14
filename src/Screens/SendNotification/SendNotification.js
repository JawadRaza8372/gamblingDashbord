import React, { useState } from "react";
import "./SendNotification.scss";
import axios from "axios";
import { useSelector } from "react-redux";

function SendNotification() {
	const [formSubmit, setformSubmit] = useState({
		title: "",
		msg: "",
	});
	const { mytokens } = useSelector((state) => state.project);
	const adduserfunc = async (e) => {
		e.preventDefault();
		const rest = await axios.post(`/send`, {
			to: mytokens,
			title: formSubmit.title,
			body: formSubmit.msg,
		});
		console.log(rest);
		if (rest.status === 200) {
			alert("Notification sent");
			setformSubmit({
				title: "",
				msg: "",
			});
		} else {
			alert("Server Error");
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
