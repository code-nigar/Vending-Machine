import React from 'react'

function OrderListItem(props) {
  return (
    <>
        <div className='d-flex flex-row justify-content-between'>
            <p>{props.quantity} {props.name}</p>
            <p>${props.price}</p>
        </div>
    </>
  )
}

export default OrderListItem