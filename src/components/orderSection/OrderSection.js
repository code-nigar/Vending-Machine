import React, { useEffect, useState } from "react";
import OrderItem from "../orderItem/OrderItem";
import SuggestedOrder from "../suggestedOrder/SuggestedOrder";
import { products } from "../../data.mjs";
import OrderListItem from "../orderListItem/OrderListItem.js";

function OrderSection() {
  var [colaQtty, setColaQtty] = useState(0);
  var [biscuitQtty, setBiscuitQtty] = useState(0);
  var [breadQtty, setBreadQtty] = useState(0);
  var [eggQtty, setEggQtty] = useState(0);
  var [colaPrice, setColaPrice] = useState(0);
  var [biscuitPrice, setBiscuitPrice] = useState(0);
  var [breadPrice, setBreadPrice] = useState(0);
  var [eggPrice, setEggPrice] = useState(0);

  var orderList = {
    cola: { quantity: colaQtty, price: colaPrice },
    biscuit: { quantity: biscuitQtty, price: biscuitPrice },
    bread: { quantity: breadQtty, price: breadPrice },
    egg: { quantity: eggQtty, price: eggPrice },
  };

  const addToOrder = (itemid, itemName, itemPrice) => {
    console.log("item " + itemid + " added");
    if (itemid === 1) {
      //orderList.cola.quantity++;
      setColaQtty(colaQtty + 1);
      setColaPrice(colaPrice + 30);
    } else if (itemid === 2) {
      //orderList.biscuit.quantity++;
      setBiscuitQtty(biscuitQtty + 1);
      setBiscuitPrice(biscuitPrice + 24);
    } else if (itemid === 3) {
      //orderList.bread.quantity++;
      setBreadQtty(breadQtty + 1);
      setBreadPrice(breadPrice + 15);
    } else {
      //orderList.egg.quantity++;
      setEggQtty(eggQtty + 1);
      setEggPrice(eggPrice + 5);
    }
    console.log(orderList);
  };
  const removeFromOrder = (itemid) => {
    console.log("item " + itemid + " removed");
    if (itemid === 1) {
      //orderList.cola.quantity--;
      setColaQtty(colaQtty - 1);
      setColaPrice(colaPrice - 30);
    } else if (itemid === 2) {
      //orderList.biscuit.quantity--;
      setBiscuitQtty(biscuitQtty - 1);
      setBiscuitPrice(biscuitPrice - 24);
    } else if (itemid === 3) {
      //orderList.bread.quantity--;
      setBreadQtty(breadQtty - 1);
      setBreadPrice(breadPrice - 15);
    } else {
      //orderList.egg.quantity--;
      setEggQtty(eggQtty - 1);
      setEggPrice(eggPrice - 5);
    }
    console.log(orderList);
  };

  // useEffect(() => {
  //   setColaPrice(colaPrice+30);
  // }, [colaQtty]);

  // useEffect(() => {
  //   setBiscuitPrice(biscuitPrice+24);
  // }, [biscuitQtty]);

  // useEffect(() => {
  //   setBreadPrice(breadPrice+15);
  // }, [colaQtty]);

  // useEffect(() => {
  //   setEggPrice(eggPrice+5);
  // }, [colaQtty]);

  const makeOrderList = (orderList) => {
    return (
      <>
        <OrderListItem name="cola" quantity={colaQtty} price={colaPrice} />
        <OrderListItem
          name="Biscuit"
          quantity={biscuitQtty}
          price={biscuitPrice}
        />
        <OrderListItem name="Bread" quantity={breadQtty} price={breadPrice} />
        <OrderListItem name="Egg" quantity={eggQtty} price={eggPrice} />
        <hr />
        <OrderListItem
          name="TOTAL"
          quantity={eggQtty + biscuitQtty + breadQtty + eggQtty}
          price={colaPrice + eggPrice + breadPrice + biscuitPrice}
        />
      </>
    );
  };

  return (
    <>
      <h3>Selected Items</h3>
      <hr />
      {products.map((itemElement) => {
        return (
          <OrderItem
            name={itemElement.name}
            price={itemElement.price}
            id={itemElement.id}
            addToOrder={addToOrder}
            removeFromOrder={removeFromOrder}
          />
        );
      })}
      <div className="border rounded p-4">
        <h4>Your Order</h4>
        {makeOrderList(orderList)}
        <hr />
      </div>
      <SuggestedOrder />
    </>
  );
}

export default OrderSection;
