import React from "react";
import { useSelector } from "react-redux";
import "./OrderScreen.scss";

function OrderScreen() {
	const { orders } = useSelector((state) => state.project);
	console.log(orders.length);

	return (
		<div className='cardContanier'>
			{orders.map((dat) => ({
				/* <OrderCard
          name={dat.ClientName}
          carnumber={dat.CarPirateNumber}
          model={dat.CarName + " " + dat.CarModel}
          date={
            dat.DeliveryDate
              ? dat.DeliveryDate
              : dat.EstimatedDeliveryDateandTime
          }
          time={dat.DeliveryTime ? dat.DeliveryTime : ""}
          arrival={dat.Arrival}
          id={dat._id}
          key={dat._id}
        /> */
			}))}
		</div>
	);
}

export default OrderScreen;
