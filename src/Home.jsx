
import { NavLink } from 'react-router-dom';
import './index.css';
import Form from './Form.jsx';
import {data} from './db/data.js';



const Home = () => {
    return (
        <div className="max-w-[1000px] py-20 mx-auto my-auto justify-center items-center">
           
            <div className="p-20 lg:py-5 px-10 py-10">
                <h1 className='font-montserrat font-semibold text-xl pb-2'> What is G6PD?</h1>
                <p>
                    G6PD deficiency is a genetic disorder that most often affects males. It happens when the body doesn't have enough of an enzyme called glucose-6-phosphate dehydrogenase (G6PD).
                    G6PD helps red blood cells work. It also protects them from substances in the blood that could harm them. In people with G6PD deficiency, either the red blood cells do not make enough G6PD or what they do make doesn't work as it should. 
                    <NavLink to="/about" className="linkColor"> Learn more about G6PD.</NavLink>
                   
                    <br /> <br />
                    
                    <p> <b>Note:</b> Type the name of food, drug, medicine or chemical and if you see them below, it is not safe for G6PD patients. </p>

                    <div className='my-[50px] flex justify-center'>
                
                        <Form data = {data}/>
                    </div>
                </p>

               
            </div>
        </div> 
     );

    }
 
export default Home;
