import React from "react";
import "./ChatListScreen.scss";
import ChatIcon from "@material-ui/icons/Chat";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import DataUnavl from "../Data Unavilble/DataUnavl";
function ChatListScreen() {
	const navigate = useNavigate();

	const { mesg } = useSelector((state) => state.project);
	return (
		<>
			{mesg?.length > 0 ? (
				<>
					<div className='exportdiv'>
						<h1 className='tableheading'>Live Support</h1>
					</div>
					<div className='chatlistcont'>
						<br />
						{mesg?.map((dat) => (
							<div
								onClick={() => navigate(`/chat/${dat.id}`)}
								key={dat.id}
								className='chatitem'>
								<ChatIcon id='msgicon' />
								<span>{dat.email}</span>
							</div>
						))}

						<br />
					</div>
				</>
			) : (
				<DataUnavl />
			)}
		</>
	);
}

export default ChatListScreen;
