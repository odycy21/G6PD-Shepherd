import React, {useState} from "react";

const Form = ({data}) => {

const [search, setSearchItem] = useState('');
console.log(search)
    return ( 
        
        <div>
         
                <div className="searchContainer flex justify-center my-10">
                
                    <div className="search">
                        <input type="text" id="searchInput" placeholder="Input search here. .." onChange={(e) => {
                        setSearchItem(e.target.value)
                        }}/>
                    </div>
        
                </div>
                
                <div className="max-w-[1080px] flex flex-wrap flex-col justify-center sm:flex-row md:flex-row mx-auto">
                    {data.filter((item) => {
                        return search.toLowerCase() === '' 
                        ? item
                        : item.name.includes(search) 
                        || item.name.toLowerCase().includes(search) 
                        || item.name.toUpperCase().includes(search);
                    }).map((item) => (
                        
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