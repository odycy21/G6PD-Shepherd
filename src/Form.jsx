import React, {useState} from "react";
import { HiSearch } from "react-icons/hi";

const Form = ({data}) => {

const [search, setSearchItem] = useState('');
const [option, setOptionItem] = useState('');

console.log(option)

    return ( 
        
        <div>

            <div className="flex justify-center flex-row text-center">
                
                <div className="searchContainer flex justify-center my-10">
                    <div className="search">
                        <input type="text" id="searchInput" placeholder="Input search here . .." onChange={(e) => {
                        setSearchItem(e.target.value)
                        }}/>
                    </div>

                    <HiSearch id="search" font-size = {20} color = "black" />
                </div>

                <div className="justify-center my-10 ">
                        <select className="dropdown p-2" onChange={(e) => {
                        setOptionItem(e.target.value)
                        }} >
                            <option value="">Select Type</option>
                            <option value="Food">Food</option>
                            <option value="Drug">Drug</option>
                            <option value="Medicine">Medicine</option>
                            <option value="Chemical">Chemical</option>
                        </select>
                </div>
                
            </div>
                
                <div className="max-w-[1080px] flex flex-wrap flex-col justify-center sm:flex-row md:flex-row mx-auto">

                
                    {data.filter((item) => {
                        return search.toLowerCase() === '' && option.toLowerCase() === '' 
                        ? item
                        : item.name.includes(search) &&  item.type.includes(option) 
                        || item.name.toLowerCase().includes(search) && item.type.toLowerCase().includes(option) 
                        || item.name.toUpperCase().includes(search) && item.type.toUpperCase().includes(option);
                    })
                    
                    .map((item) => (
                        
                        <ul className="item-container" key={item.id}>
                            <li><b>Name:</b> {item.name}</li>
                            <li><b>Type:</b> {item.type}</li>
                        </ul>
                    ))}

                    
                </div>
        </div>
     );
}
 
export default Form;