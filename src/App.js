import Navigation from "./Navigation/Navigation";
import { useEffect } from "react";
import { db } from "./Database/FirebseConfig";
import { useDispatch } from "react-redux";
import { setEmploys, setChat, setmyTokens } from "./store/projectSlice";
import { setAuth } from "./store/authSlice";
const apiurl = "https://rentalsystem1998.herokuapp.com";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		const cat = localStorage.getItem("gamblingDasbord");
		if (cat) {
			dispatch(setAuth({ isAuth: "avalble" }));
		}
		db.collection("chatSupport").onSnapshot((snapshot) => {
			dispatch(
				setChat({
					mesg: snapshot.docs.map((doc) => ({
						id: doc.id,
						customer: doc.data().customer,
						email: doc.data().email,
						admin: doc.data().admin,
						messages: doc.data().messages,
					})),
				})
			);
		});
		db.collection("Token").onSnapshot((snapshot) => {
			let mysometoken = snapshot.docs.map((doc) => doc.data().Token);
			dispatch(
				setmyTokens({
					tokens: mysometoken,
				})
			);
		});
		db.collection("users").onSnapshot((snapshot) => {
			dispatch(
				setEmploys({
					employs: snapshot.docs.map((doc) => ({
						id: doc.id,
						userid: doc.data().UserID,
						phone: doc.data().Phone,
						name: doc.data().name,
						email: doc.data().email,
						imglink: doc.data().image,
					})),
				})
			);
		});
	}, [dispatch]);

	return (
		<>
			<Navigation />
		</>
	);
}

export default App;
export { apiurl };
