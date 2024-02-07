import React from "react";

export default function Article(props) {
  return (
    <div>
      <div id="pc">
        <img src="https://picsum.photos/300/200" />
        <h3>{props.title}</h3>
        <h5>{props.price}</h5>
        <button>Ajouter au panier</button>
        <br />
      </div>

    </div>
  );
}
