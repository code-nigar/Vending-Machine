import React, { useState } from 'react'
import ItemSection from "./components/itemsSection/ItemSection";
import OrderSection from "./components/orderSection/OrderSection";
import './App.css'

function App() {
  return (
    <div className="App">
        <h1 className=" nav bg-light shadow-sm justify-content-center p-3 mb-4 lead font-size-lg">Welcome to Smart Vending Machine</h1>
        <div className="d-flex flex-row justify-content-around flex-wrap">
            <div className="item-column">
              <ItemSection/>
            </div>
            <div className="order-column">
              <OrderSection/>
            </div>
        </div>
    </div>
  );
}

export default App;
