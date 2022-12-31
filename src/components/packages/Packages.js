import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Packages(props) {

  return (
    <>
      <Card style={{ width: "15rem"}}  className="shadow mb-5 mx-4 text-capitalize">
        <Card.Header className="text-center font-weight-bold">{props.name}</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <div className="d-flex flex-row justify-content-around">
              <div className="font-weight-semibold text-center">Name</div>
              <div className="font-weight-semibold text-center">Qtt</div>
            </div>
          </ListGroup.Item>
          {props.items.map((listElement) => (
            <ListGroup.Item>
              <div className="d-flex flex-row justify-content-between">
                <div>{getNamebyID(listElement.id)}</div>
                <div>{listElement.qty}</div>
              </div>
            </ListGroup.Item>
          ))}
        </ListGroup>
        <div className="text-center font-weight-bold">price: {props.price}</div>
      </Card>
    </>
  );
}

var getNamebyID=(id)=>{
    let op;
    switch (id){
        case 1: 
            op= "Cold Drink";
            break;
        case 2:
            op= "Biscuit";
            break;
        case 3:
            op= "Bread";
            break;
        case 4:
            op= "Egg";
            break;
        default:
            op= `product id ${id}`
    }
    return op;
}
export default Packages;
