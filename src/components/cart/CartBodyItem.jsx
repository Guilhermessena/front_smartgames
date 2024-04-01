import React from "react";

const CartBodyItem = ({ item, addItem, removeItem }) => {
    return (
        <div key={item.id}>
            <div className="row d-flex align-items-center">
                <div className="col-lg-3 col-md-4">
                    <div
                        className="bg-image rounded"
                        data-mdb-ripple-color="light"
                    >
                        <img
                            src={item.linkImage}
                            alt={item.title}
                            style={{ maxWidth: "100%", height: "auto" }}
                            onError={
                                (e) => {
                                    e.target.src = 'https://demofree.sirv.com/nope-not-here.jpg'
                                }
                            }
                        />
                    </div>
                </div>

                <div className="col-lg-5 col-md-6">
                    <p>
                        <strong>{item.name}</strong>
                    </p>
                </div>

                <div className="col-lg-4 col-md-6">
                    <div
                        className="d-flex mb-4"
                        style={{ maxWidth: "300px" }}
                    >
                        <button
                            className="btn px-3"
                            onClick={() => {
                                removeItem(item);
                            }}
                        >
                            <i className="fas fa-minus"></i>
                        </button>

                        <p className="mx-5">{item.qty}</p>

                        <button
                            className="btn px-3"
                            onClick={() => {
                                addItem(item);
                            }}
                        >
                            <i className="fas fa-plus"></i>
                        </button>
                    </div>

                    <p className="text-start text-md-center">
                        <strong>
                            <span className="text-muted">{item.qty}</span>{" "}
                            x {item.price}
                        </strong>
                    </p>
                </div>
            </div>

            <hr className="my-4" />
        </div>


    );
};

export default CartBodyItem;
