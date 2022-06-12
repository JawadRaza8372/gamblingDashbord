import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import ButtonsDiv from "../ButtonsDiv/ButtonsDiv";
import CustomModel from "../CustomModel/CustomModel";
import OrderCard from "../OrderCard/OrderCard";
import { useLoadingWithRefreash } from "../../CustomHooks/LoadingData";
import "./EmployeCard.scss";
import { apiurl } from "../../App";
function EmployeCard({ Name, Email, pNumber, IdentityNumber, Address, id }) {
  const [show, setShow] = useState(false);
  const { orders } = useSelector((state) => state.project);
  const completed = orders.filter(
    (dat) => dat.Arrival === true && dat.EmployeeID === id
  );
  const notcompleted = orders.filter(
    (dat) => dat.Arrival === false && dat.EmployeeID === id
  );
  const { setisLoading } = useLoadingWithRefreash();

  const [showtype, setshowtype] = useState("1");
  const employdeltfunc = async () => {
    await axios.post(`${apiurl}/Employee/deleteUser`, {
      Email: Email,
    });
    setisLoading(true);
  };
  return (
    <>
      <div className="employCard">
        <p>
          <span>Name:</span>
          {Name}
        </p>
        <p>
          <span>Email:</span>
          {Email}
        </p>
        <p>
          <span>Phone Number:</span>
          {pNumber}
        </p>
        <p>
          <span>CNIC:</span>
          {IdentityNumber}
        </p>
        <p>
          <span>Address:</span>
          {Address}
        </p>
        <ButtonsDiv deltFun={employdeltfunc} morefunct={() => setShow(!show)} />
      </div>
      <CustomModel showModel={show} toggleModel={() => setShow(!show)}>
        <div className="btndiv">
          {showtype === "1" ? (
            <>
              <span>Completed Orders</span>
              <button onClick={() => setshowtype("2")}>Pending Orders</button>
            </>
          ) : (
            <>
              <span>Pending Orders</span>

              <button onClick={() => setshowtype("1")}>Completed Orders</button>
            </>
          )}
        </div>
        <div className="mainContain">
          {showtype === "1" ? (
            completed.length > 0 ? (
              <div className="ordercontain">
                {completed.map((dat) => (
                  <OrderCard
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
                  />
                ))}
              </div>
            ) : (
              <div className="notfound">not found</div>
            )
          ) : null}
          {showtype === "2" ? (
            notcompleted.length > 0 ? (
              <div className="ordercontain">
                {notcompleted.map((dat) => (
                  <OrderCard
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
                  />
                ))}
              </div>
            ) : (
              <div className="notfound">not found</div>
            )
          ) : null}
        </div>
      </CustomModel>
    </>
  );
}

export default EmployeCard;
