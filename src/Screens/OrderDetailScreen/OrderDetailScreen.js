import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./OrderDetailScreen.scss";
import Loader from "../../Components/Loader/Loader";
import moment from "moment";
import { jsPDF } from "jspdf";

function OrderDetailScreen() {
	const { id } = useParams();
	const [showImg, setshowImg] = useState(false);
	const toggleFuc = () => {
		setshowImg(!showImg);
	};
	const { orders } = useSelector((state) => state.project);
	useEffect(() => {
		// if (orders.length <= 0) {
		// 	setisLoading(true);
		// }
	}, [orders]);

	const data = orders.filter((dat) => dat._id === id);
	const {
		ClientName,
		ClientNumber,
		ClientIdentityNumber,
		ClientEmail,
		ClientFrontIDcard,
		ClientBackIDcard,
		CarName,
		CarModel,
		CarPirateNumber,
		CarCurrentFuel,
		CarCurrentKMS,
		CarFrontSideImage,
		CarLeftSideImage,
		CarRightSideImage,
		CarBackSideImage,
		CarNumberPlateImage,
		CarFrontLeftTypeImage,
		CarFrontRightTypeImage,
		CarBackRightTypeImage,
		CarBackLeftTypeImage,
		DeliveryTime,
		DeliveryDate,
		EstimatedDeliveryDateandTime,
		Signature,
		EmployeeEmail,
		EmployeeName,
		Arrival,
	} = data[0];
	const downloadpdfinfo = () => {
		const doc = new jsPDF();
		doc.text(`Client Name: ${ClientName}`, 25, 25);
		doc.text(`Client Phone Number: ${ClientNumber}`, 25, 35);
		doc.text(`Client CNIC: ${ClientIdentityNumber}`, 25, 45);
		doc.text(`Client Emial: ${ClientEmail}`, 25, 55);
		doc.text(`Car Name: ${CarName}`, 25, 65);
		doc.text(`Car Model: ${CarModel}`, 25, 75);
		doc.text(`Car Pirate Number: ${CarPirateNumber}`, 25, 85);
		doc.text(`Car Current Fuel: ${CarCurrentFuel}`, 25, 95);
		doc.text(`Car Current KMS: ${CarCurrentKMS}`, 25, 105);
		doc.text(`Delivery Time: ${DeliveryTime}`, 25, 115);
		doc.text(`Delivery Date: ${DeliveryDate}`, 25, 125);
		doc.text(
			`Estimated Delivery Date and Time: ${EstimatedDeliveryDateandTime}`,
			25,
			135
		);
		doc.text(`Employee Email: ${EmployeeEmail}`, 25, 145);
		doc.text(`Employee Name: ${EmployeeName}`, 25, 155);
		doc.text(`Arrival :${Arrival}`, 25, 165);

		doc.save(`order_${id}_info`);
	};
	// if (isLoading) {
	// 	return <Loader />;
	// }

	return (
		<div className='orderdeltscreen'>
			<div className='ordernumber'>
				<h1>Order Details</h1>
				<span>{id}</span>
			</div>
			<div
				style={{
					width: "100%",
					display: "flex",
					alignItems: "center",
					justifyContent: "space-evenly",
					flexDirection: "row",
				}}>
				<button
					style={{
						width: "100%",
						maxWidth: "150px",
						height: "60px",
						color: "#282a33",
						fontSize: "20px",
						fontWeight: "bold",
						margin: "10px 0",
						border: "2px solid #282a33",
					}}
					onClick={downloadpdfinfo}>
					downlod pdf
				</button>
				<button
					style={{
						width: "100%",
						maxWidth: "150px",
						height: "60px",
						color: "#e94c3d",
						fontSize: "20px",
						fontWeight: "bold",
						margin: "10px 0",
						border: "2px solid #e94c3d",
					}}
					onClick={toggleFuc}>
					{showImg ? "Hide Images" : "Show Images"}
				</button>
			</div>
			{ClientName && (
				<p>
					<span>Client Name:</span>
					{ClientName ? ClientName : "Not Available"}
				</p>
			)}
			{ClientNumber && (
				<p>
					<span>Client Phone:</span>
					{ClientNumber ? ClientNumber : "Not Available"}
				</p>
			)}
			{ClientIdentityNumber && (
				<p>
					<span>Client CNIC:</span>
					{ClientIdentityNumber ? ClientIdentityNumber : "Not Available"}
				</p>
			)}
			{ClientEmail && (
				<p>
					<span>Client Email:</span>
					{ClientEmail ? ClientEmail : "Not Available"}
				</p>
			)}
			{EmployeeEmail && (
				<p>
					<span>Employe Email:</span>
					{EmployeeEmail ? EmployeeEmail : "Not Available"}
				</p>
			)}
			{EmployeeName && (
				<p>
					<span>Employe Name:</span>
					{EmployeeName ? EmployeeName : "Not Available"}
				</p>
			)}
			<p>
				<span>Completed:</span>
				{Arrival ? "True" : "False"}
			</p>
			{CarName && (
				<p>
					<span>Car Name:</span>
					{CarName ? CarName : "Not Available"}
				</p>
			)}

			{CarModel && (
				<p>
					<span>Car Model:</span>
					{CarModel ? CarModel : "Not Available"}
				</p>
			)}
			{CarPirateNumber && (
				<p>
					<span>Car Pirate Number:</span>
					{CarPirateNumber ? CarPirateNumber : "Not Available"}
				</p>
			)}
			{CarCurrentFuel && (
				<p>
					<span>Car Current Fuel:</span>
					{CarCurrentFuel ? CarCurrentFuel : "Not Available"}
				</p>
			)}
			{CarCurrentKMS && (
				<p>
					<span>Car Current KMS:</span>
					{CarCurrentKMS ? CarCurrentKMS : "Not Available"}
				</p>
			)}
			{DeliveryTime ||
				(DeliveryDate && (
					<p>
						<span>Delivery :</span>
						{DeliveryTime} {DeliveryDate}
					</p>
				))}
			{EstimatedDeliveryDateandTime && (
				<p>
					<span>Estimated Delivery Date and Time:</span>
					{moment(EstimatedDeliveryDateandTime).format("D MMM , h:mm a")}
				</p>
			)}
			{ClientFrontIDcard && showImg && (
				<>
					<p>
						<span>Client Front side CNIC:</span>
					</p>
					<img src={`${ClientFrontIDcard}`} alt='Client Front side CNIC' />
				</>
			)}
			{ClientBackIDcard && showImg && (
				<>
					<p>
						<span>Client Back side CNIC:</span>
					</p>
					<img src={`${ClientBackIDcard}`} alt='Client Back side CNIC' />
				</>
			)}
			{CarFrontSideImage && showImg && (
				<>
					<p>
						<span>Car Front Side Image:</span>
					</p>
					<img src={`${CarFrontSideImage}`} alt='Car Front Side ' />
				</>
			)}
			{CarLeftSideImage && showImg && (
				<>
					<p>
						<span>Car Left Side Image:</span>
					</p>
					<img src={`${CarLeftSideImage}`} alt='Car Left Side ' />
				</>
			)}
			{CarRightSideImage && showImg && (
				<>
					<p>
						<span>Car Right Side Image:</span>
					</p>
					<img src={`${CarRightSideImage}`} alt='Car Right Side ' />
				</>
			)}

			{CarRightSideImage && showImg && (
				<>
					<p>
						<span>Car Right Side Image:</span>
					</p>
					<img src={`${CarRightSideImage}`} alt='Car Right Side ' />
				</>
			)}
			{CarBackSideImage && showImg && (
				<>
					<p>
						<span>Car Back Side Image:</span>
					</p>
					<img src={`${CarBackSideImage}`} alt='Car Back Side ' />
				</>
			)}
			{CarNumberPlateImage && showImg && (
				<>
					<p>
						<span>Car Number Plate Image:</span>
					</p>
					<img src={`${CarNumberPlateImage}`} alt='Car Number Plate ' />
				</>
			)}
			{CarFrontLeftTypeImage && showImg && (
				<>
					<p>
						<span>Car Front Left Type Image:</span>
					</p>
					<img src={`${CarFrontLeftTypeImage}`} alt='Car Front Left Type ' />
				</>
			)}
			{CarFrontRightTypeImage && showImg && (
				<>
					<p>
						<span>Car Front Right Type Image:</span>
					</p>
					<img src={`${CarFrontRightTypeImage}`} alt='Car Front Right Type' />
				</>
			)}
			{CarBackRightTypeImage && showImg && (
				<>
					<p>
						<span>Car Back Right Type Image:</span>
					</p>
					<img src={`${CarBackRightTypeImage}`} alt='Car Back Right Type' />
				</>
			)}
			{CarBackLeftTypeImage && showImg && (
				<>
					<p>
						<span>Car Back Left Type Image:</span>
					</p>
					<img src={`${CarBackLeftTypeImage}`} alt='Car Back Left Type' />
				</>
			)}

			{Signature && showImg && (
				<>
					<p>
						<span>Signature:</span>
					</p>
					<img src={`${Signature}`} alt='Signature' />
				</>
			)}
		</div>
	);
}

export default OrderDetailScreen;
