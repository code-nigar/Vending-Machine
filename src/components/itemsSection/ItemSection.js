import React from "react";
import { products, packages } from "../../data.mjs";
import Products from "../products/Products";
import Packages from "../packages/Packages.js";

function ItemSection() {
  return (
    <>
    <h3>Products:</h3>
      <div className="d-flex flex-row flex-wrap text-capitalize">
        {products.map((cardElement) => {
          return (
            <Products
              title={cardElement.name}
              price={cardElement.price}
              imgSource={cardElement.imgSrc}
              id={cardElement.id}
            />
          );
        })}
      </div>
      <h3>Packages:</h3>
      <div className="d-flex flex-row flex-wrap">
        {packages.map((cardElement) => {
          return (
            <Packages
              name={cardElement.name}
              price={cardElement.price}
              items={cardElement.items}
            />
          );
        })}
      </div>

    </>
  );
}

export default ItemSection;
