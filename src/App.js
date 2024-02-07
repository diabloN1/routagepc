import "./App.css";
import Info from "./info";
import { Link, Route, Routes } from "react-router-dom";
import Articles from "./Articles";

function App() {
  const products = [
    {
      id: 1,
      title: "PC Portable Gamer HP VICTUS",
      price: "7490 DH",
      thumbnail: "HP16D0195NF.jpg",
    },
    {
      id: 2,
      title: "PC Portable Gamer ",
      price: "2190 DH",
      thumbnail: "HP14424U3EA.jpg",
    },
    {
      id: 3,
      title: "Pc Portable Chromebook Acer",
      price: "3640 DH",
      thumbnail: "NXATHEF002.jpg",
    },
    {
      id: 4,
      title: "PC Portable - HUAWEI",
      price: "1270 DH",
      thumbnail: "HUA6901443442959.jpg",
    },
  ];
  return (
    <div className="App">
      <Link to="/articles">Browse Articles</Link>
      <Routes>
        <Route path="/info/:id" element={<Info pcs={products} />} />
        <Route path="/articles" element={<Articles products={products} />} />
      </Routes>
    </div>
  );
}

export default App;
