import React, { useState } from "react";
import "./ButtonsDiv.scss";
import DeleteIcon from "@material-ui/icons/Delete";
import CustomModel from "../CustomModel/CustomModel";
function ButtonsDiv({ deltFun, morefunct, sectit }) {
	const [showmodel, setshowmodel] = useState(false);
	return (
		<>
			<div className='btnsDivs'>
				{deltFun && (
					<button onClick={() => setshowmodel(!showmodel)}>
						<DeleteIcon className='iconclas' />
					</button>
				)}
				{morefunct && (
					<button onClick={morefunct}>{sectit ? sectit : "Details"}</button>
				)}
			</div>
			<CustomModel
				showModel={showmodel}
				toggleModel={() => setshowmodel(!showmodel)}>
				<div
					style={{
						width: "100%",
						height: "100%",
						display: "flex",
						alignItems: "center",
						justifyContent: "space-evenly",
						flexDirection: "column",
					}}>
					<h1>Do you want to delete this?</h1>
					<div
						style={{
							width: "100%",
							display: "flex",
							alignItems: "center",
							justifyContent: "space-evenly",
							flexDirection: "row",
						}}>
						<button
							className='deltbtn'
							onClick={() => {
								deltFun();
								setshowmodel(!showmodel);
							}}>
							Yes
						</button>
						<button
							className='nodeltbtn'
							onClick={() => setshowmodel(!showmodel)}>
							No
						</button>
					</div>
				</div>
			</CustomModel>
		</>
	);
}

export default ButtonsDiv;
