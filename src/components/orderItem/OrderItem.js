import React from 'react'
import './OrderItem.css'

function OrderItem(props) {
  return (
    <>
        <div className="items-info d-flex flex-row justify-content-start align-items-center">

        <div>
          <h3 className="selected-item-name">{props.name}</h3>
        </div>

        <div className="add-minus-quantity">
          {/* <i className="fas fa-minus minus" onClick={() => decrement(id)}></i> */}
          <button>-</button>
          <input type="text" placeholder="00" disabled  className='input-minplus'/>
          {/* <i className="fas fa-plus add" onClick={() => increment(id)}></i> */}
          <button>+</button>
        </div>

        <div>
          <h3 className="selected-item-price">$00</h3>
        </div>

        <div className="remove-item">
          {/* <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i> */}
            <button>x</button>
        </div>
      </div>

      <hr />
    </>
  )
}

export default OrderItem