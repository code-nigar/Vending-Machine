import React from "react";
import { products, packages } from "../../data.mjs";
import Products from "../products/Products";
import Packages from "../packages/Packages.js";

function ItemSection() {
  return (
    <>
    <h3>Products:</h3>
    <hr />
      <div className="d-flex flex-row flex-wrap text-capitalize justify-content-center py-3">
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
      <hr />
      <div className="d-flex flex-row flex-wrap justify-content-center py-3">
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
