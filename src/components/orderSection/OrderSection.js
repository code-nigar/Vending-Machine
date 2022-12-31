import React from 'react'
import OrderItem from '../orderItem/OrderItem'
import SuggestedOrder from '../suggestedOrder/SuggestedOrder'

function OrderSection() {
  return (
    <>
    <h3>Selected Items</h3>
    <hr />
        <OrderItem name="cold drink" id="1"/>
        <OrderItem name="Biscuit" id="2"/>
        <OrderItem name="Bread" id="3"/>
        <OrderItem name="Egg" id="4"/>
        <SuggestedOrder/>
    </>
  )
}

export default OrderSection