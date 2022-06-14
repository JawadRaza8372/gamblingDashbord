import React from "react";

function CustomerTableData({ id, name, email, number, identityNumbr }) {
	return (
		<>
			<tr key={id}>
				<td>{name}</td>
				<td>{email}</td>
				<td>{number}</td>
				<td>{identityNumbr}</td>
			</tr>
		</>
	);
}

export default CustomerTableData;
