import React from "react";
import Navbar from "./Navbar";
import './index.css';
import data from "./db.json";

function App() {

  return (

    <> 
      <div className="main-container">
            <div className="search-container">
                <input type="text" id="searchInput" placeholder="Input search here. .."/>
            </div>
      </div>

      <div className="item-container">

      </div>
    
    </>
  )
}

export default App
