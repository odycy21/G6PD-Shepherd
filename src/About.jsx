const About = () => {
    
    return (
        <div className="max-w-[800px] mt-[-5px] py-10   mx-auto flex flex-col justify-center items-center">
           
             <div className="p-20 lg:py-5 px-10 py-10">
                   <h1 className='font-montserrat font-semibold text-xl pb-2'> What Is G6PD Deficiency? </h1>
                    <p className="py-2">
                        G6PD deficiency is a genetic disorder that most often affects males. It happens when the body doesn't have enough of an enzyme called glucose-6-phosphate dehydrogenase (G6PD).
                        G6PD helps red blood cells work. It also protects them from substances in the blood that could harm them. In people with G6PD deficiency, either the red blood cells do not make enough G6PD or what they do make doesn't work as it should. <br /> 
                        Without enough G6PD to protect them, the red blood cells break apart. This is called hemolysis (hih-MOL-ih-sis). <br /> <br />
                        When many red blood cells are destroyed, a person can develop hemolytic (hee-meh-LIH-tik) anemia. This can cause tiredness, dizziness, and other symptoms. <br />
                        Red blood cells that don't have enough G6PD are sensitive to some medicines, foods, and infections. <br />
                        When these things trigger a quick loss of red blood cells over a short time, it's called a hemolytic crisis. In these cases, the symptoms stop when the cause is gone. In rare cases, G6PD deficiency leads to chronic anemia regardless of exposure to triggers. <a href='#'>Learn more</a>
                    </p>

                    <div className="my-[20px]">
                        <h2 className="font-montserrat font-semibold text-xl">Triggers of hemolysis in kids with G6PD deficiency include:</h2>
                    <ul className="list-disc p-5">
                        <li> illness, such as bacterial and viral infections</li>
                        <li> some painkillers and fever-lowering drugs</li>
                        <li> some antibiotics (most often those with "sulf" in their names)</li>
                        <li> some antimalarial drugs (most often those with "quine" in their names)</li>
                        <li> fava beans (also called broad beans)</li>
                        <li> naphthalene (a chemical found in mothballs and moth crystals). Mothballs can be very harmful if a child swallows one.</li>
                    </ul>
               
                       
                    
                    </div>

                    <div className="my-[20px]">
                        <h2 className="font-montserrat font-semibold text-xl">What Are the Signs & Symptoms of G6PD Deficiency?</h2>
                        <p className="py-2">Most people with G6PD deficiency don't have any symptoms. Others might have symptoms of hemolytic anemia if many RBCs are destroyed.</p>
                        <p>These can include:</p>
                    <ul className="list-disc p-5">
                        <li> extreme tiredness or dizziness</li>
                        <li> fast heartbeat</li>
                        <li>fast breathing or shortness of breath</li>
                        <li>jaundice (the skin and eyes look yellow)</li>
                        <li> an enlarged spleen</li>
                        <li>dark, tea-colored pee</li>
                    </ul>
               
                       
                    
                    </div>
            </div>
         
         </div>    

    );
}
 
export default About;