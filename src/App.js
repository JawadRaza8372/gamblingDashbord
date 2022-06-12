import Navigation from "./Navigation/Navigation";
import { useEffect } from "react";
import { auth, db } from "./Database/FirebseConfig";
import { useDispatch, useSelector } from "react-redux";
import { setEmploys } from "./store/projectSlice";
import { setAuth } from "./store/authSlice";
const apiurl = "https://rentalsystem1998.herokuapp.com";

function App() {
	const dispatch = useDispatch();
	const { isAuth } = useSelector((state) => state.auth);
	console.log(isAuth);
	useEffect(() => {
		const cat = localStorage.getItem("gamblingDasbord");
		if (cat) {
			dispatch(setAuth({ isAuth: "avalble" }));
		}
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
	}, []);

	return (
		<>
			<Navigation />
		</>
	);
}

export default App;
export { apiurl };
