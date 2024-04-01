import React, { useState, useEffect } from "react";
import { listGames } from "../../service/GameService.js"
import { Link } from "react-router-dom";
import Loading from "./Loading.jsx";

import "react-loading-skeleton/dist/skeleton.css";


const Products = () => {
  const [games, setGame] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    listGames().then((response) => {
      setLoading(true)
      setGame(response.data);
      setLoading(false)
    }).catch(error => {
      console.error(error)
    })

  }, []);

  const ShowProducts = () => {
    return (
      <>
        {games.map((game) => {
          return (
            <div id={game.id} key={game.id} className="col-md-3 col-sm-5 col-xs-7 col-11 mb-4">
              <div className="card text-center">
                <div className="card-body d-flex align-items-center">
                  <h5 className="card-title">{game.name}</h5>
                </div>
                <Link to={"/" + game.id} className="btn  btn-light">
                  <img
                    className="card-img-top img-fluid"
                    src={game.linkImage}
                    alt="Card"
                    onError={
                      (e) => {
                        e.target.src = 'https://demofree.sirv.com/nope-not-here.jpg'
                      }
                    }
                  />
                </Link>
                <ul className="list-group list-group-flush">
                  <h5 className="card-title">{game.name}</h5>
                  <li className="list-group-item lead">{game.price}</li>
                </ul>
              </div>
            </div>
          );
        })}
      </>
    );
  };
  return (
    <>
      <div className="container my-1 py-4">
        <div className="row justify-content-center">
          {loading ? <Loading /> : <ShowProducts />}
        </div>
      </div>
    </>
  );
};

export default Products;