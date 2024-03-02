import { NavLink } from "react-router-dom";

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

                        <p>
                            Mild symptoms usually don't need medical treatment. As the body makes new red blood cells, the anemia will improve. If symptoms are more severe, a child may need care in a hospital.
                        </p>
            
                    </div>

                    <div className="my-[20px]">
                        <h2 className="font-montserrat font-semibold text-xl">What Causes G6PD Deficiency?</h2>
                        <p className="py-2">G6PD deficiency is inherited. Children who have it are born with it because it was passed down in genes from one or both of the parents. The gene responsible for this condition is on the X chromosome .</p>
                       
                    </div>

                    <div className="my-[20px]">
                        <h2 className="font-montserrat font-semibold text-xl">Who Gets G6PD Deficiency?</h2>
                        <p className="py-2">G6PD deficiency is most common in males of African heritage. Many females of African heritage are carriers of G6PD deficiency. This means that they can pass the gene for the deficiency to their children but do not have symptoms.</p>

                    </div>


                    <div className="my-[20px]">
                        <h2 className="font-montserrat font-semibold text-xl">How Is G6PD Deficiency Diagnosed?</h2>
                        <p className="py-2">G6PD deficiency often isn't found until a child gets symptoms. If doctors suspect G6PD deficiency, blood tests usually can confirm the diagnosis and rule out other causes of anemia.</p>
                        <p className="py-2">If you worry that your child might have G6PD deficiency, talk to your doctor about a screening test to check for it.</p>
                    </div>

                    <div className="my-[20px]">
                        <h2 className="font-montserrat font-semibold text-xl">How Is G6PD Deficiency Treated?</h2>
                        <p className="py-2">Treating G6PD deficiency symptoms is usually as simple as removing the trigger. Often, this means treating the infection or stopping the use of a drug. A child with severe anemia may need treatment in the hospital to get oxygen and fluids. Sometimes, a child also needs a transfusion of healthy blood cells.</p>
                    </div>

                    <div className="my-[20px]">
                        <h2 className="font-montserrat font-semibold text-xl">What Can Parents Do?</h2>
                        <p className="py-2">The best way to care for a child with G6PD deficiency is to limit exposure to anything that triggers symptoms. Check with your doctor for instructions, and a list of medicines and other things that could be a problem for a child with G6PD deficiency..</p>
                        <p>With the right care, G6PD deficiency should not keep a child from living a healthy, active life.</p>
                    </div>

                    <div className="my-[20px]">
                        Source:  <NavLink to={"https://kidshealth.org/en/parents/g6pd.html#:~:text=G6PD%20deficiency%20is%20a%20genetic,blood%20that%20could%20harm%20them."}>https://kidshealth.org/</NavLink>
                    </div>
                    
            </div>
         
         </div>    

    );
}
 
export default About;