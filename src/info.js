import { useState, useEffect } from "react";
import React from "react";
import { Link, useParams } from "react-router-dom";
export default function Info(props) {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  useEffect(() => {
    const [pc] = props.pcs.filter((pc) => pc.id == id); 
    console.log(pc);
    setPrice(pc.price);
    setTitle(pc.title);
  }, [id]);

  return (
    <div>
      <h1>{title}</h1>
      <img src="https://picsum.photos/600/400" />
      <h4>{price}</h4>
      <Link to="/articles">Back to catalogue</Link>
    </div>
  );
}
