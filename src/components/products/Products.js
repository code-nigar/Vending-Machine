import React, { useState } from 'react'
import {Card} from 'react-bootstrap'
import OrderItem from '../orderItem/OrderItem';

function Products(props) {

  const addToCart=(itemID)=>{
    //alert(itemID);
  }

  return (
    <>
        <Card style={{ width: "15rem"}} className="shadow mb-5 mx-4">
        <Card.Img
          variant="top"
          src={props.imgSource}
        />
        <Card.Body>
          <div className="mb-3 d-flex flex-row justify-content-between align-items-start">
            <div>
              <div className="fs-4">{props.title}</div>
              <Card.Title>${props.price}</Card.Title>
            </div>
            <div className="pt-2">
                <button onClick={()=>{addToCart(props.id)}}>+</button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  )
}

export default Products