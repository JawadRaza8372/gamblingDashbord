import React, { useState } from "react";
import "./AddUserScreen.scss";
import axios from "axios";
import { apiurl } from "../../App";
import { db } from "../../Database/FirebseConfig";

function AddUserScreen() {
	const [formSubmit, setformSubmit] = useState({
		agentId: "",
		cropId: "",
		draw: "",
		lotteryNumber: "",
		custId: "",
	});
	const adduserfunc = async (e) => {
		e.preventDefault();
		await db
			.collection("lotterydata")
			.add(formSubmit)
			.then(() => {
				setformSubmit({
					agentId: "",
					cropId: "",
					draw: "",
					lotteryNumber: "",
					custId: "",
				});
				alert("Data Uploaded.");
			})
			.catch((e) => alert(e.message));
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
		<div className='adduserdiv'>
			<form className='adduserform' onSubmit={adduserfunc}>
				<h1 className='formHeading'>Add Agent</h1>
				<input
					autoCapitalize='off'
					autoComplete='off'
					autoCorrect='off'
					type={"text"}
					placeholder='Agent ID'
					minLength={6}
					maxLength={6}
					id='agentId'
					value={formSubmit.agentId}
					onChange={handleChange}
				/>
				<input
					autoCapitalize='off'
					autoComplete='off'
					autoCorrect='off'
					type={"text"}
					placeholder='Cust ID'
					minLength={6}
					maxLength={6}
					id='custId'
					value={formSubmit.custId}
					onChange={handleChange}
				/>
				<input
					autoCapitalize='off'
					autoComplete='off'
					autoCorrect='off'
					type={"text"}
					minLength={6}
					maxLength={6}
					placeholder='Draw'
					id='draw'
					value={formSubmit.draw}
					onChange={handleChange}
				/>
				<input
					autoCapitalize='off'
					autoComplete='off'
					autoCorrect='off'
					type={"text"}
					id='cropId'
					minLength={2}
					maxLength={2}
					placeholder='Crop ID'
					value={formSubmit.cropId}
					onChange={handleChange}
				/>
				<input
					autoCapitalize='off'
					autoComplete='off'
					autoCorrect='off'
					type={"text"}
					placeholder='lottery Number'
					id='lotteryNumber'
					minLength={5}
					maxLength={5}
					value={formSubmit.lotteryNumber}
					onChange={handleChange}
				/>

				<button type='submit'>Register</button>
			</form>
		</div>
	);
}

export default AddUserScreen;
