import React, { useEffect, useState } from "react";
import OrderItem from "../orderItem/OrderItem";
import SuggestedOrder from "../suggestedOrder/SuggestedOrder";
import { products, packages } from "../../data.mjs";
import OrderListItem from "../orderListItem/OrderListItem.js";
import Swal from 'sweetalert2'

function OrderSection() {

  var [colaQtty, setColaQtty] = useState(0);
  var [biscuitQtty, setBiscuitQtty] = useState(0);
  var [breadQtty, setBreadQtty] = useState(0);
  var [eggQtty, setEggQtty] = useState(0);
  var [colaPrice, setColaPrice] = useState(0);
  var [biscuitPrice, setBiscuitPrice] = useState(0);
  var [breadPrice, setBreadPrice] = useState(0);
  var [eggPrice, setEggPrice] = useState(0);

  //the orderlist of all items user selected, each along with their quantities and respective total price
  var orderList = {
    cola: { quantity: colaQtty, price: colaPrice, id: products[0].id },
    biscuit: { quantity: biscuitQtty, price: biscuitPrice, id: products[1].id },
    bread: { quantity: breadQtty, price: breadPrice, id: products[2].id },
    egg: { quantity: eggQtty, price: eggPrice, id: products[3].id },
  };

  // add items to orderList
  const addToOrder = (itemid, itemName, itemPrice) => {
    console.log("item " + itemid + " added");
    if (itemid === 1) {
      setColaQtty(colaQtty + 1);
      setColaPrice(colaPrice + 30);
    } else if (itemid === 2) {
      setBiscuitQtty(biscuitQtty + 1);
      setBiscuitPrice(biscuitPrice + 24);
    } else if (itemid === 3) {
      setBreadQtty(breadQtty + 1);
      setBreadPrice(breadPrice + 15);
    } else {
      setEggQtty(eggQtty + 1);
      setEggPrice(eggPrice + 5);
    }
    //console.log(orderList);
  };
  //remove items from OrderList
  const removeFromOrder = (itemid) => {
    console.log("item " + itemid + " removed");
    if (itemid === 1) {
      setColaQtty(colaQtty - 1);
      setColaPrice(colaPrice - 30);
    } else if (itemid === 2) {
      setBiscuitQtty(biscuitQtty - 1);
      setBiscuitPrice(biscuitPrice - 24);
    } else if (itemid === 3) {
      setBreadQtty(breadQtty - 1);
      setBreadPrice(breadPrice - 15);
    } else {
      setEggQtty(eggQtty - 1);
      setEggPrice(eggPrice - 5);
    }
    //console.log(orderList);
  };

  useEffect(() => {
    console.log(orderList);
    //suggestTheOrder(orderList, packages, products, TOTALPRICE);
  }, [orderList]);

  let TOTALQTT = eggQtty + biscuitQtty + breadQtty + eggQtty;
  let TOTALPRICE = colaPrice + eggPrice + breadPrice + biscuitPrice;

  //prepare MEMO of User Order
  const makeOrderList = () => {
    let i1, i2, i3, i4;
    colaQtty
      ? (i1 = (
          <OrderListItem name="cola" quantity={colaQtty} price={colaPrice} />
        ))
      : (i1 = "");
    biscuitQtty
      ? (i2 = (
          <OrderListItem
            name="Biscuit"
            quantity={biscuitQtty}
            price={biscuitPrice}
          />
        ))
      : (i2 = "");
    breadQtty
      ? (i3 = (
          <OrderListItem name="Bread" quantity={breadQtty} price={breadPrice} />
        ))
      : (i3 = "");
    eggQtty
      ? (i4 = <OrderListItem name="Egg" quantity={eggQtty} price={eggPrice} />)
      : (i4 = "");
    return (
      <>
        {i1}
        {i2}
        {i3}
        {i4}
        <hr />
        <OrderListItem name="TOTAL" price={TOTALPRICE} />
      </>
    );
  };

  //================================================================
  //suggested order function
 //===============================================================


  const suggestTheOrder = (orderList, packages, products, tp) => {
    var tpso =0;
  var TotalPriceForSuggOfferA = 0;
  var TotalPriceForSuggOfferB = 0;
  console.log("user order ", orderList);
  let mainSugPack, PA, PB;

  //checking whether package A fits for order

  if (orderList.cola.quantity >= 2 && orderList.biscuit.quantity >= 1) {
    let copiedOL = JSON.parse(JSON.stringify(orderList));
    let sugPackage = [];
    let remainingItems = [];

    sugPackage.push(packages[0]);
    copiedOL.cola.quantity -= 2;
    copiedOL.biscuit.quantity -= 1;
    copiedOL.cola.price -= products[0].price;
    copiedOL.biscuit.price -= products[1].price;
    if (copiedOL.cola.quantity > 0) {
      remainingItems.push(copiedOL.cola);
    }
    if (copiedOL.biscuit.quantity > 0) {
      remainingItems.push(copiedOL.biscuit);
    }
    if (copiedOL.bread.quantity > 0) {
      remainingItems.push(copiedOL.bread);
    }
    if (copiedOL.egg.quantity > 0) {
      remainingItems.push(copiedOL.egg);
    }
    console.log("remainigItems ", remainingItems);

    //adding remaining items after selecting package A
    if (remainingItems) {
      let ol2 = { cola: {}, biscuit: {}, bread: {}, egg: {} };
      remainingItems.map((x) => {
        switch (x.id) {
          case 1: {
            ol2.cola = { qtt: x.quantity, name: "cola", price: x.price };
            break;
          }
          case 2: {
            ol2.biscuit = { qtt: x.quantity, name: "biscuit", price: x.price };
            break;
          }
          case 3: {
            ol2.bread = { qtt: x.quantity, name: "bread", price: x.price };
            break;
          }
          case 4: {
            ol2.egg = { qtt: x.quantity, name: "egg", price: x.price };
            break;
          }
        }
      });

      if (Object.keys(ol2.cola).length === 0) {
        delete ol2.cola;
      } else {
        sugPackage.push(ol2.cola);
      }

      if (Object.keys(ol2.biscuit).length === 0) {
        delete ol2.biscuit;
      } else {
        sugPackage.push(ol2.biscuit);
      }

      if (Object.keys(ol2.bread).length === 0) {
        delete ol2.bread;
      } else {
        sugPackage.push(ol2.bread);
      }

      if (Object.keys(ol2.egg).length === 0) {
        delete ol2.egg;
      } else {
        sugPackage.push(ol2.egg);
      }
    }
    PA = sugPackage;
    console.log("suggeted package is ", sugPackage);

    PA.forEach((x) => {
      TotalPriceForSuggOfferA += x.price;
    });
    console.log("total = " + TotalPriceForSuggOfferA);
    tpso = TotalPriceForSuggOfferA;
  } else {
    console.log("package A does not fit");
  }

  ////checking whether package B fits for order

  if (
    orderList.biscuit.quantity >= 1 &&
    orderList.bread.quantity >= 1 &&
    orderList.egg.quantity >= 6
  ) {
    let copiedOL = JSON.parse(JSON.stringify(orderList));
    let sugPackage = [];
    let remainingItems = [];

    sugPackage.push(packages[1]);
    copiedOL.biscuit.quantity -= 1;
    copiedOL.bread.quantity -= 1;
    copiedOL.egg.quantity -= 6;
    copiedOL.biscuit.price -= products[1].price;
    copiedOL.bread.price -= products[2].price;
    copiedOL.egg.price -= products[3].price;
    if (copiedOL.cola.quantity > 0) {
      remainingItems.push(copiedOL.cola);
    }
    if (copiedOL.biscuit.quantity > 0) {
      remainingItems.push(copiedOL.biscuit);
    }
    if (copiedOL.bread.quantity > 0) {
      remainingItems.push(copiedOL.bread);
    }
    if (copiedOL.egg.quantity > 0) {
      remainingItems.push(copiedOL.egg);
    }
    console.log("remainigItems ", remainingItems);

    //adding remaining items after selecting package A
    if (remainingItems) {
      let ol2 = { cola: {}, biscuit: {}, bread: {}, egg: {} };
      remainingItems.map((x) => {
        switch (x.id) {
          case 1: {
            ol2.cola = { qtt: x.quantity, name: "cola", price: x.price };
            break;
          }
          case 2: {
            ol2.biscuit = { qtt: x.quantity, name: "biscuit", price: x.price };
            break;
          }
          case 3: {
            ol2.bread = { qtt: x.quantity, name: "bread", price: x.price };
            break;
          }
          case 4: {
            ol2.egg = { qtt: x.quantity, name: "egg", price: x.price };
            break;
          }
        }
      });

      if (Object.keys(ol2.cola).length === 0) {
        delete ol2.cola;
      } else {
        sugPackage.push(ol2.cola);
      }

      if (Object.keys(ol2.biscuit).length === 0) {
        delete ol2.biscuit;
      } else {
        sugPackage.push(ol2.biscuit);
      }

      if (Object.keys(ol2.bread).length === 0) {
        delete ol2.bread;
      } else {
        sugPackage.push(ol2.bread);
      }

      if (Object.keys(ol2.egg).length === 0) {
        delete ol2.egg;
      } else {
        sugPackage.push(ol2.egg);
      }
    }
    console.log("suggeted package is ", sugPackage);

    PB = sugPackage;
    PB.forEach((x) => {
      TotalPriceForSuggOfferB += x.price;
    });
    console.log("total = " + TotalPriceForSuggOfferB);
    tpso = TotalPriceForSuggOfferB;
  } else {
    console.log("package B does not fit");
  }

  //compare price of package A with Package 2 and Choosing cost effective one

  if (TotalPriceForSuggOfferB < TotalPriceForSuggOfferA) {
      mainSugPack = PB;
  } else {
      mainSugPack = PA;
  }
  console.log("final result ", mainSugPack);
  console.log("offered price "+ tpso);
  console.log("actual price "+ tp);
  console.log(`save $${tp - tpso}`);

  if(mainSugPack === undefined){
    //alert("no package to be suggested")
    Swal.fire({
      title: 'no package to be suggested',
      confirmButtonText: 'ok'
    })
  }else{
    // let op=[];
    // //let op= JSON.stringify(mainSugPack)
    // for(let i=1; i<mainSugPack.length; i++){
    //   op.push(`${mainSugPack[i].qtt} ${mainSugPack[i].name} -------- ${mainSugPack[i].price}\n`);
    // }
    // JSON.stringify(op);
    // console.log(op)
    // //alert(op);
    // Swal.fire({
    //   title: 'Suggested Offer',
    //   text: mainSugPack[0].name +"--------"+ mainSugPack[0].price +",\n"+ op +",\n"+"TOTAL --------------- "+tpso,
    //   confirmButtonText: 'Choose this Offer',
    //   footer: `save $${tp-tpso}`
    // })
  }

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
      <div className="border rounded p-4 text-center">
        <h4>Your Order</h4>
        {makeOrderList()}
        <hr />
      </div>
      <div className="d-flex flex-row justify-content-center p-3">
        <button className="btn btn-outline-primary"
          onClick={() => {
            suggestTheOrder(orderList, packages, products, TOTALPRICE);
          }}
        >
          Get Cost Effective Suggestion
        </button>
      </div>
    </>
    
  );
}

export default OrderSection; 
