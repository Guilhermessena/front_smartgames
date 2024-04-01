import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { addCart, delCart } from "../redux/action";
import { Link } from "react-router-dom";
import EmptyCart from "../components/cart/EmptyCart";
import OrderSummary from "../components/cart/OrderSummary";
import { calculateTotal } from "../components/utils";
import CartBodyItem from "../components/cart/CartBodyItem";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();
  const { subtotal, totalItems } = calculateTotal(state);

  const addItem = (product) => {
    dispatch(addCart(product));
  };
  const removeItem = (product) => {
    dispatch(delCart(product));
  };

  const ShowCart = () => {

    return (
      <>
        <section className="h-100 gradient-custom">
          <div className="container py-5">
            <div className="row d-flex justify-content-center my-4">
              <div className="col-md-8">
                <div className="card mb-4">
                  <div className="card-header py-3">
                    <h5 className="mb-0">Itens da Lista</h5>
                  </div>
                  <div className="card-body">
                    {state.map((item) => {
                      return (
                        <div key={item.id}>
                          <div className="row d-flex align-items-center">
                            <CartBodyItem
                              key={item.id}
                              item={item}
                              addItem={addItem}
                              removeItem={removeItem}
                            />
                          </div>
                          <hr className="my-4" />
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card mb-4">
                  <div className="card-header py-3 bg-light">
                    <h5 className="mb-0">Pedidos</h5>
                  </div>
                  <div className="card-body">
                    <OrderSummary subtotal={subtotal} totalItems={totalItems} />
                    <Link to="/checkout" className="btn btn-dark btn-lg btn-block">
                      Finalizar compra
                    </Link>
                  </div>
                </div>
                <Link to="/" className="btn  btn-outline-dark">
                  <i className="fa fa-arrow-left"></i> Continue comprando
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Carrinho</h1>
        <hr />
        {state.length > 0 ? <ShowCart /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default Cart;
