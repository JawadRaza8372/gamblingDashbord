import React from "react";
import axios from "axios";
import { apiurl } from "../../App";
import { useNavigate } from "react-router-dom";
import ButtonsDiv from "../ButtonsDiv/ButtonsDiv";
function OrderTableData({ name, email, number, carNumber, id }) {
	const navigate = useNavigate();

	const orderdeltfunc = async () => {
		await axios.post(`${apiurl}/Order/delete`, { _id: id });
	};
	return (
		<>
			<tr key={id}>
				<td>{name}</td>
				<td>{email}</td>
				<td>{number}</td>
				<td>{carNumber}</td>
				<td>
					<ButtonsDiv
						morefunct={() => navigate(`/order/${id}`)}
						deltFun={orderdeltfunc}
					/>
				</td>
			</tr>
		</>
	);
}

export default OrderTableData;
