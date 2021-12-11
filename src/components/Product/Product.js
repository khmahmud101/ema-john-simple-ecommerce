import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import "./Product.css";
const Product = (props) => {
  const { img, name, seller, price, stock } = props.product;
  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div className="product-name">
        <h4>This is {name}</h4>
        <p>
          <small>by: {seller}</small>
        </p>
        <br />
        <p>$ {price}</p>
        <br />
        <p>
          <small>Only {stock} in stock </small>
          <button onClick={ () => props.handleAddProduct(props.product)}
           className="main-button"><FontAwesomeIcon icon={faShoppingCart} /> add to cart</button>
        </p>
      </div>
    </div>
  );
};

export default Product;
