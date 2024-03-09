
import { NavLink } from 'react-router-dom';
import './index.css';
import Searchbar from './Searchbar';
import MainContainer from './MainContainer';




const Home = () => {
    
    return (
        <div className="max-w-[1000px] mt-[-5px] py-10  h-screen mx-auto  justify-center items-center">
           
            <div className="p-20 lg:py-5 px-10 py-10">
                <h1 className='font-montserrat font-semibold text-xl pb-2'> What is G6PD?</h1>
                <p>
                    G6PD deficiency is a genetic disorder that most often affects males. It happens when the body doesn't have enough of an enzyme called glucose-6-phosphate dehydrogenase (G6PD).
                    G6PD helps red blood cells work. It also protects them from substances in the blood that could harm them. In people with G6PD deficiency, either the red blood cells do not make enough G6PD or what they do make doesn't work as it should. 
                    <br /> <br />
                    When many red blood cells are destroyed, a person can develop hemolytic (hee-meh-LIH-tik) anemia. This can cause tiredness, dizziness, and other symptoms. 
                
                    <NavLink to="/about" className="linkColor"> Learn more about G6PD.</NavLink>
                    <br /> <br />
                    
                    <p> Note: Type the name of food or medicine below to check if it's safe for G6PD patients. </p>

                    <div className='flex justify-center'>
                        <Searchbar/>
                    </div>

                    <div className='my-[50px] flex justify-center'>
                        <MainContainer/>
                    </div>
                </p>

               
            </div>
        </div> 
     );

    }
 
export default Home;
