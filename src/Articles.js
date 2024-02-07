import React from "react";
import Article from "./Article";
import { Link } from "react-router-dom";

export default function Articles(props) {
  return (
    <div className="App">
      <div id="pcs">
        {props.products.map((product) => {
          return (
            <Link to={`/info/${product.id}`}>
              <Article
                id={product.id}
                title={product.title}
                price={product.price}
                thumbnail={product.thumbnail}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
