import React from "react";

const OrderSummary = ({ subtotal, totalItems }) => {
  return (

    <ul className="list-group list-group-flush">
      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
        Produtos ({totalItems})
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
        <div>
          <strong>Total</strong>
        </div>
        <span>
          <strong>R$ {subtotal.replace(".", ",")}</strong>
        </span>
      </li>
    </ul>
  );
};

export default OrderSummary;