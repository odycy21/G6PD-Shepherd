import './index.css';
import { HiSearch } from "react-icons/hi";

const Searchbar = () => {

    return ( 
        <div className="main-container">
            
            <div className="search-container">
                <input type="text" id="searchInput" placeholder="Input search here. .." onChange={(e) => {
                setSearchItem(e.target.value)
                }}/>
            </div>
       
            <HiSearch id="search" font-size = {28} color = "black" />
            
         </div>
     );
}
 
export default Searchbar;

