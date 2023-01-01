import React, { useState, useEffect } from "react";
import "./OrderItem.css";

function OrderItem(props) {
  const [qtty, setQtty] = useState(0);
  const [amount, setAmmount] = useState(0);

  const incQtt = () => {
    setQtty(qtty + 1);
    props.addToOrder(props.id,props.name,props.price);
  };
  const decQtt = () => {
    if (qtty > 0) {
      setQtty(qtty - 1);
      props.removeFromOrder(props.id);
    } else {
      alert("no item is selected");
      setQtty(0);
    }
  };
  // const clearQtt = () => {
  //   setQtty(0);
  // };

  useEffect(() => {
    setAmmount(qtty * props.price);
  }, [qtty]);

  return (
    <>
      <div className="items-info d-flex flex-row justify-content-around align-items-center text-capitalize">
        <div>
          <p className="selected-item-name fs-4">{props.name}</p>
        </div>

        <div className="add-minus-quantity">
          {/* <i className="fas fa-minus minus" onClick={() => decrement(id)}></i> */}
          <button onClick={decQtt}>-</button>
          <input
            type="text"
            placeholder={qtty}
            disabled
            className="input-minplus text-center"
          />
          {/* <i className="fas fa-plus add" onClick={() => increment(id)}></i> */}
          <button onClick={incQtt}>+</button>
        </div>

        <div>
          <p className="selected-item-price fs-4">$ {amount}</p>
        </div>

        <div className="remove-item">
          {/* <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i> */}
          {/* <button onClick={clearQtt}>x</button> */}
        </div>
      </div>

      <hr />
    </>
  );
}

export default OrderItem;
