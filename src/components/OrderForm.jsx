import React, { useState } from "react";

const OrderForm = () => {
  const [order, setOrder] = useState({
    fName: "",
    lName: "",
    cakeOpt: "",
    address: ""
  });

  const handleChange = event => {
    const { name, value } = event.target;

    setOrder(prevValue => {
      return {
        ...prevValue,
        [name]: value
      };
    });
  };

  const [isSubmitted, setSub] = useState(false);

  const handleOrder = e => {
    setSub(true);
    e.preventDefault();
  };

  return (
    <div>
      {!isSubmitted ? (
        <form className="form-container">
          <h1>Place your order now!</h1>
          <input
            onChange={handleChange}
            name="fName"
            value={order.fName}
            placeholder="First Name"
          />
          <input
            onChange={handleChange}
            name="lName"
            value={order.lName}
            placeholder="Last Name"
          />
          <input
            onChange={handleChange}
            name="cakeOpt"
            value={order.cakeOpt}
            placeholder="Cake Option"
          />
          <input
            onChange={handleChange}
            name="address"
            value={order.address}
            placeholder="Delivery Address"
          />
          <button type="submit" onClick={handleOrder}>
            Submit your order
          </button>
        </form>
      ) : null}
      {isSubmitted ? (
        <div className="thank-you-note">
          <h1>
            Thank you {order.fName} {order.lName} for ordering the{" "}
            {order.cakeOpt} cake!
          </h1>
        </div>
      ) : null}
    </div>
  );
};

export default OrderForm;
