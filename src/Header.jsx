
import './index.css';
import headerLogo from "./assets/g6pd-shepherd-logo-black-trans.png";

const Header = () => {
    
    return (
    <>
        <div className="header-container flex justify-center">
            <img class='mx-0 px-0 object-scale-down h-48 w-96 object-center' src={headerLogo}  alt="" />
        </div>
        
         <div className='px-20'>
               <h1 className='font-bold text-xl'> What Is G6PD Deficiency? </h1>
                <p>
                G6PD deficiency is a genetic disorder that most often affects males. It happens when the body doesn't have enough of an enzyme called glucose-6-phosphate dehydrogenase (G6PD). <br />
                G6PD helps red blood cells work. It also protects them from substances in the blood that could harm them. In people with G6PD deficiency, either the red blood cells do not make enough G6PD or what they do make doesn't work as it should. <br /> 
                Without enough G6PD to protect them, the red blood cells break apart. This is called hemolysis (hih-MOL-ih-sis). <br /> <br />
                When many red blood cells are destroyed, a person can develop hemolytic (hee-meh-LIH-tik) anemia. This can cause tiredness, dizziness, and other symptoms. <br />
                Red blood cells that don't have enough G6PD are sensitive to some medicines, foods, and infections. <br />
                When these things trigger a quick loss of red blood cells over a short time, it's called a hemolytic crisis. In these cases, the symptoms stop when the cause is gone. In rare cases, G6PD deficiency leads to chronic anemia regardless of exposure to triggers.
                </p>
        </div>
     
     </>    
     );

    }
 
export default Header;
