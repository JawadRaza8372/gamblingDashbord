import React, { useState, useEffect } from "react";
import "./AnimatedSideBar.scss";
import MenuIcon from "@material-ui/icons/Menu";
import { useNavigate } from "react-router-dom";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import PersonIcon from "@material-ui/icons/Person";
import LogoutIcon from "@material-ui/icons/ExitToApp";
import CloseIcon from "@material-ui/icons/Close";
import DirectionsCar from "@material-ui/icons/DirectionsCar";
import LinkButton from "./LinkButton";
import { setAuth } from "../../store/authSlice";
import { useDispatch } from "react-redux";
import PlaylistAddCheckIcon from "@material-ui/icons/PlaylistAddCheck";
import PlaylistRemoveIcon from "@material-ui/icons/DepartureBoard";
import Loader from "../Loader/Loader";
import NotificationsIcon from "@material-ui/icons/Notifications";
function AnimatedSideBar({ children }) {
	const navigate = useNavigate();
	const [expand, setexpand] = useState(false);
	const dispatch = useDispatch();
	const [activeLogo, setactiveLogo] = useState(false);
	const [screenSize, setscreenSize] = useState(null);
	const navArry = [
		{ title: "Users", icon: <PersonIcon id='navIcon' />, link: "/userList" },
		// { title: "Orders", icon: <MenuBook id="navIcon" />, link: "/orders" },
		{
			title: "Completed",
			icon: <PlaylistAddCheckIcon id='navIcon' />,
			link: "/completed_order",
		},
		{
			title: "Pending",
			icon: <PlaylistRemoveIcon id='navIcon' />,
			link: "/pending_orders",
		},

		{
			title: "Add Employe",
			icon: <PersonAddIcon id='navIcon' />,
			link: "/addusers",
		},
		{
			title: "Notification",
			icon: <NotificationsIcon id='navIcon' />,
			link: "/send_alert",
		},
	];

	useEffect(() => {
		const handleResize = () => {
			setscreenSize(window.innerWidth);
			window.addEventListener("resize", handleResize);
		};
		handleResize();

		return () => window.removeEventListener("resize", handleResize);
	}, []);
	useEffect(() => {
		if (screenSize < 480) {
			setactiveLogo(true);
		} else {
			setactiveLogo(false);
		}
	}, [screenSize]);

	// if (isLoading === true) {
	// 	<Loader />;
	// }
	return (
		<section className='mainContainer'>
			<div className={expand ? "sidebar active" : "sidebar"}>
				<div className='logoContent'>
					<div className='logo'>
						<DirectionsCar id='logoicon' />
						<div className='logoName'>Admin Panel</div>
					</div>
					{expand && !activeLogo ? (
						<CloseIcon id='menuIcon' onClick={() => setexpand(false)} />
					) : !expand && !activeLogo ? (
						<MenuIcon id='menuIcon' onClick={() => setexpand(true)} />
					) : activeLogo ? (
						<DirectionsCar id='logoImg' onClick={() => navigate("/")} />
					) : null}
				</div>
				<ul className='navList'>
					{navArry.map((dat, index) => (
						<li key={index}>
							<LinkButton title={dat.title} link={dat.link}>
								{dat.icon}
							</LinkButton>
						</li>
					))}
				</ul>
				<div className='profileContent'>
					<div
						onClick={() => {
							localStorage.removeItem("gamblingDasbord");
							dispatch(setAuth({ isAuth: null }));
						}}
						className='profile'>
						<LogoutIcon id='logoutbutton' />

						<span className='username'>Logout</span>
					</div>
				</div>
			</div>
			<div
				className={
					expand ? "mainContentContainer active" : "mainContentContainer"
				}>
				{children}
			</div>
		</section>
	);
}

export default AnimatedSideBar;
