import React, {useState} from "react";
import './index.css';
import Header from "./Header";
import Searchbar from "./Searchbar";
import Data from "./db.json";


function App() {

  const [searchItem, setSearchItem] = useState("");

  return (

    <> 
      <Header/>
      
      <Searchbar/>

      <div className="item-container">      
      {
        /*
          Data.filter((value) => {
              if(searchItem === ""){
                return value;
              }else if(value.title.toLowerCase().includes(searchItem.toLowerCase())){
                return value;
              }
          })
          
          .map((value) => {
            return(
              <div className="items" key={value.id}>
                <h1>{value.title}</h1>
                <img src={value.image} alt=""  />   
              </div>
            )
          })

          */
        }

        

      </div>
    
    </>
  )
}

export default App
