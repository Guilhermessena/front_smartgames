import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import EmptyCart from "../components/cart/EmptyCart";
import OrderSummary from "../components/cart/OrderSummary";
import { calculateTotal } from "../components/utils";
import FormCheckout from "../components/checkout/FormCheckout";

const Checkout = () => {
    const state = useSelector((state) => state.handleCart);
    const { subtotal, totalItems } = calculateTotal(state);



    const ShowCheckout = () => {
        return (
            <>
                <div className="container py-5">
                    <div className="row my-4">
                        <div className="col-md-5 col-lg-4 order-md-last">
                            <div className="card mb-4">
                                <div className="card-header py-3 bg-light">
                                    <h5 className="mb-0">Pedidos</h5>
                                </div>
                                <div className="card-body">
                                    <OrderSummary subtotal={subtotal} totalItems={totalItems} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7 col-lg-8">
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <h4 className="mb-0">Dados de cobrança</h4>
                                </div>
                                <FormCheckout />
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    };
    return (
        <>
            <Navbar />
            <div className="container my-3 py-3">
                <h1 className="text-center">Checkout</h1>
                <hr />
                {state.length ? <ShowCheckout /> : <EmptyCart />}
            </div>
            <Footer />
        </>
    );
};

export default Checkout;