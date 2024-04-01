import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addCart } from "../redux/action";
import { gameById } from "../service/GameService.js"
import { defaultSaoPaulo, storeIguatemi, storeTambore, storeUniao } from "../components/product/LocationStore.jsx"

import { Footer, Navbar } from "../components";
import Loading from "../components/product/Loading.jsx";
import { splitStores } from "../components/utils.js"

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedStore, setSelectedStore] = useState();
  const handleSelect = (store) => {
    setSelectedStore(store.target.value);
  };

  const dispatch = useDispatch();

  const addProduct = (product) => {
    dispatch(addCart(product));
  };

  useEffect(() => {
    setLoading(true);
    if (id) {
      gameById(id).then((response) => {
        setProduct(response.data)
      }).catch(error => {
        console.error(error)
      })
    }

    setLoading(false);

  }, [id]);

  const Map = () => {
    let content;

    switch (selectedStore) {
      case "Loja Iguatemi":
        content = storeIguatemi;
        break;
      case "Loja União":
        content = storeUniao;
        break;
      case "Loja tambóre":
        content = storeTambore;
        break;
      default:
        content = defaultSaoPaulo;
    }
    return (
      <>{content}</>
    );
  }

  const ShowSelectStore = () => {
    const stores = splitStores(product);

    if (!stores) {
      return null;
    }
    return (
      <>
        <div className="App mb-3" data-bs-theme="dark">
          <select className="form-select w-50" name='item-selected' value={selectedStore} onChange={handleSelect}>
            <option value="" disabled selected>Selecione uma loja</option>
            {stores.map((store) => (
              <option value={store.trim()}>
                {store.trim()}
              </option>
            ))}
          </select>
        </div>
      </>
    );
  };

  const ShowProduct = () => {
    return (
      <>
        <div className="container my-5">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <img
                className="img-fluid"
                alt={product.name}
                src={product.linkImage}
                width="400px"
                height="400px"
                onError={
                  (e) => {
                    e.target.src = 'https://demofree.sirv.com/nope-not-here.jpg'
                  }
                }
              />
            </div>
            <div className="col-md-6 col-md-6">
              <h6 className="text-uppercase text-muted">{product.platforms}</h6>
              <h4 className="display-5">{product.name}</h4>
              <h3 className="display-6  my-4">{product.price}</h3>
              <p className="lead text-justify my-4">{product.description}</p>
              <ShowSelectStore />
              <Map />
              <button
                className="btn btn-outline-dark mr-3"
                onClick={() => addProduct(product)}
              >
                Adiconar ao carrinho
              </button>


              <Link to="/cart" className="btn btn-dark">
                Ir ao carrinho
              </Link>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">{loading ? <Loading /> : <ShowProduct />}</div>
        <div className="row my-2 py-2">
          <div className="d-none d-md-block">
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
