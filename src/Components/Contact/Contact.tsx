import React from 'react'
import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.svg';
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Contact = () => {
    const [result, setResult] = React.useState("");
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a3897625-65fa-48de-a407-1febe6e0b31c");
    try{
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          setResult("Form Submitted Successfully");
          toast.success("Email sent successfully!");
          event.target.reset();
        } else {
          console.log("Error", data);
          setResult(data.message);
          toast.error(`Error: ${data.message}`);
        }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    }catch(error) {
        setResult("Failed to send email.");
        toast.error("Error: Unable to send email.");
      }
      };
    return (
        <div id='CONTACT' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Lets talk</h1>
                    <p>I'm Currently available to take new projects ppppppppppppppppppppppppppp</p>

                    <div className="contact-details">
                        <div className="contact-detail">
                            <img src={mail_icon} alt="" /> <p>amaljithpm1999@gmail.com</p>
                        </div>
                        <div className="contact-detail">
                            <img src={call_icon} alt="" /> <p>+971 524248384</p>
                        </div>
                        <div className="contact-detail">
                            <img src={location_icon} alt="" /> <p>Dubai, United arab Emirates</p>
                        </div>
                    </div>

                </div>
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your Name</label>
                    <input type="text" placeholder='Enter Your Name' name='name' />
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder='Enter Your Email' name='email' />
                    <label htmlFor="">Write your message here</label>
                    <textarea name="messgae" rows={8} placeholder='Enter your message'></textarea>
                    <button type='submit' className="contact-submit">Submit Now</button>
                </form>
            </div>
            <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
        </div>
    )
}

export default Contact
