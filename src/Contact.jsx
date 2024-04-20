
import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {

  const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const fullName = document.querySelector("#fullName").value;
        const email = document.querySelector("#email").value;
        const message = document.querySelector("#message").value;


        if(fullName.length === 0){
            alert("Please Input something. ..");
            return false;
        }else if(email.length === 0){
            alert("Please Input something. ..");
            return false;
        }else if(message.length === 0){
            alert("Please Input something. ..");
            return false;
        }else{

        emailjs.sendForm('service_k0qdrpq', 'template_3788e6p', form.current, 's4wwLmtU6tc-DJo7N')
          .then((result) => {
              console.log(result.text);
              alert("Message Sent!");
              form.current.reset();
          }, (error) => {
              console.log(error.text);
          });
        }
      };

  
    return ( 

      <div className="max-w-[1000px] min-h-screen py-20 mx-auto my-auto justify-center items-center">
           
      <div className="p-20 lg:py-5 px-10 py-10 text-center">
        
              <h2 className='font-montserrat font-semibold text-[28px] pb-2'>Get In Touch with us!</h2>

              <p className="text-sm leading-7 pb-10">
              How can we help? We love to here from you.<br />
              </p>

           
              <div className='max-w-[680px] mx-auto'>
                  <form ref={form} onSubmit={sendEmail}>
                  <label>Full Name</label>
                  <input type="text" name="user_name" id='fullName'/>
                  <label>Email Address</label>
                  <input type="email" name="user_email" id='email' />
                  <label>Message</label>
                  <textarea name="message" id='message'/>
                  <input type="submit" value="Submit" className="mt-5 w-[20%] h-[32px] border border-b-4 border-[gray] rounded-md font-normal text-black text-center text-xs hover:bg-[#9fc5e8;]" />
                  </form>
              </div>
      </div>

      
      <div>


      </div>
      

     </div> 

      
  

     );
}
 
export default ContactUs;

<h2>Contact</h2>
