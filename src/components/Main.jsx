import React from "react";
import "./Main.css";
export default function Main({ data }) {
  return (
    <div>
      <div className="div5">
        {data.map((item) => {
          return (
            <div>
              <div className="div1">
                <div className="div">
                  <img src={item.img} alt="" />
                  <h1>{item.name}</h1>
                  <button>Add To Cart</button>
                  <h2>{item.price}⭐️⭐️⭐️⭐️⭐️</h2>
                  <h3>{item.reting}</h3>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
