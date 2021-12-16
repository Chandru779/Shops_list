import React, { useState } from "react";
import { Link } from "react-router-dom";
import { deleteShop } from "../../redux";
import "./shoplist.css";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function ShopList() {
  const dispatch = useDispatch();

  const store = useSelector((state) => state.store);

  const [filterOptnSelected, setFilterOptnSelected] = useState("");
  const [filterValue, setFilterValue] = useState(null);

  function handleFilterChange(e) {
    setFilterValue(e.target.value);
  }

  const handleOnchange = (e) => {
    setFilterOptnSelected(e.target.value);
    setFilterValue(null);
  };

  return (
    <div className="outerPanel">
      <h1 className="heading">
        <span className="firstLetter">S</span>hop{" "}
        <span className="firstLetter">L</span>ists
      </h1>
      <Link to="/">
        <button className="addShopInside">Add Shop</button>
      </Link>
      <ul>
        <div className="radioButtons">
          <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
            <input
              type="radio"
              name="filter"
              value="area"
              //   className="radioBar"
              onChange={handleOnchange}
              checked={filterOptnSelected === "area"}
              id="area"
            />
            <label htmlFor="area">Area</label>
          </div>
          <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
            <input
              type="radio"
              name="filter"
              value="category"
              //   className="radioBar"
              onChange={handleOnchange}
              checked={filterOptnSelected === "category"}
              id="category"
            />
            <label htmlFor="category">Category</label>
          </div>
          <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
            <input
              type="radio"
              name="filter"
              value="status"
              //   className="radioBar"
              onChange={handleOnchange}
              checked={filterOptnSelected === "status"}
              id="status"
            />
            <label htmlFor="status">Status</label>
          </div>
        </div>

        {filterOptnSelected === "area" && (
          <select
            id="shoparea"
            className="area"
            onChange={handleFilterChange}
            name="area"
          >
            <option value="Bangalore">Bangalore</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Nashik">Nashik</option>
            <option value="Nagpur">Nagpur</option>
            <option value="Ahmedapur">Ahmedapur</option>
            <option value="solapur">solapur</option>
          </select>
        )}

        {filterOptnSelected === "category" && (
          <select
            id="category"
            className="category"
            //  value={shopName.category}
            onChange={handleFilterChange}
            name="category"
          >
            <option value="Grocery">Grocery</option>
            <option value="Butcher">Butcher</option>
            <option value="Baker">Baker</option>
            <option value="Chemist">Chemist</option>
            <option value="Stationary">Stationary</option>
            <option value="Cloths">Cloths</option>
            <option value="Handlooms">handlooms</option>
          </select>
        )}

        {filterOptnSelected === "status" && (
          <select
            id="status"
            onChange={handleFilterChange}
            name="status"
            className="area"
          >
            <option value="Open">Open</option>
            <option value="Close">Close</option>
          </select>
        )}

        {(filterOptnSelected === "area" || filterOptnSelected === "category") &&
          store
            .filter((item) => item[filterOptnSelected] === filterValue)
            .map((shop) => {
              return (
                <div className="innerPanel">
                  <li key={uuidv4()} className="eachShop">
                    <h1 className="shopTitle">
                      <span className="head">Name:</span>
                      {shop.name}
                    </h1>
                    <h1 className="shopTitle">
                      <span className="head">Place:</span>
                      {shop.area}
                    </h1>
                    <h2 className="shopTitle">
                      <span className="head">Category:</span>
                      {shop.category}
                    </h2>
                    <h2 className="shopTitle">
                      <span className="head">Open At:</span>
                      {shop.openingDate}
                    </h2>
                    <h2 className="shopTitle">
                      <span className="head">Close At:</span>
                      {shop.closingDate}
                    </h2>

                    <button
                      className="deleteBtn"
                      onClick={() => dispatch(deleteShop(shop.shopId))}
                    >
                      Delete
                    </button>
                  </li>
                </div>
              );
            })}

        {filterOptnSelected === "status" &&
          store
            .filter((item) =>{
                let today = new Date().getTime()
                let startDate = new Date(item.openingDate).getTime()
                let endDate = new Date(item.closingDate).getTime()
                if(filterValue === 'Open'){
                return startDate <= today && endDate >= today 
            }else{
                return startDate >= today || endDate <= today 
            }


            } )
            .map((shop) => {
              return (
                <div className="innerPanel">
                  <li key={uuidv4()} className="eachShop">
                    <h1 className="shopTitle">
                      <span className="head">Name:</span>
                      {shop.name}
                    </h1>
                    <h1 className="shopTitle">
                      <span className="head">Place:</span>
                      {shop.area}
                    </h1>
                    <h2 className="shopTitle">
                      <span className="head">Category:</span>
                      {shop.category}
                    </h2>
                    <h2 className="shopTitle">
                      <span className="head">Open At:</span>
                      {shop.openingDate}
                    </h2>
                    <h2 className="shopTitle">
                      <span className="head">Close At:</span>
                      {shop.closingDate}
                    </h2>

                    <button
                      className="deleteBtn"
                      onClick={() => dispatch(deleteShop(shop.shopId))}
                    >
                      Delete
                    </button>
                  </li>
                </div>
              );
            })}

        {filterOptnSelected === "" &&
          store.map((shop) => {
            return (
              <div className="innerPanel">
                <li key={uuidv4()} className="eachShop">
                  <h1 className="shopTitle">
                    <span className="head">Name:</span>
                    {shop.name}
                  </h1>
                  <h1 className="shopTitle">
                    <span className="head">Place:</span>
                    {shop.area}
                  </h1>
                  <h2 className="shopTitle">
                    <span className="head">Category:</span>
                    {shop.category}
                  </h2>
                  <h2 className="shopTitle">
                    <span className="head">Open At:</span>
                    {shop.openingDate}
                  </h2>
                  <h2 className="shopTitle">
                    <span className="head">Close At:</span>
                    {shop.closingDate}
                  </h2>

                  <button
                    className="deleteBtn"
                    onClick={() => dispatch(deleteShop(shop.shopId))}
                  >
                    Delete
                  </button>
                </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default ShopList;
