import Filterbar from "../Filterbar/Filterbar";
import ProductList from "../ProductList/ProductList";
import Sidebar from "./Sidebar";

import "./style.css";

const Main = () => {
  return (
    <>
      <div className="mainContentContainer">
        <hr />
        <div>
          <Filterbar />
        </div>
        <div className="baseContainer">
          <div className="sidebar">
            <Sidebar />
          </div>
          <div className="productlist">
            <ProductList />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;