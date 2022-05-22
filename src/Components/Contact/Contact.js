import React, {useState, useContext, Fragment } from "react";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import "./contact.css";
import VisibilitySensor from "react-visibility-sensor";
import { contactSection, socialNetworks } from "../../techfolio";
import { ScrollContext } from "../../Context/scroll";
import Heading from "../common/Heading";
import emailjs from "@emailjs/browser";
import { ToastContainer,toast } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.min.css'; 

function Contact() {

  const [name, setName ] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  
    try {
      if(name === "" || email === "" || message === ""){
        toast?.warn("enter all field ")
      }else if(!email?.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
        toast?.warn("invalid email ")
      }
      else{
        emailjs
        .send(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          
          {
            to_name: "Yusuf",
            from_name: name,
            message: message,
            reply_to: email,
            email: email,
          },
          process.env.REACT_APP_EMAILJS_PUBLIC_KEY
        )
        .then((res) =>
         toast?.success("Thanks for reaching out, response on the way!")
        
         ).catch((err) =>        
         toast?.warn(`error in sending text ${err.message}`)
         
        );
        
      }
    } catch (error) {
      toast?.error(error.message);
      
    }
    setName('')
    setEmail('')
    setMessage('')
  };

  const { scrollChange } = useContext(ScrollContext);
  const { github, linkden, instagram, facebook, twitter } = socialNetworks;
  const contactList = contactSection.contactList.map((contact, i) => {
    return (
      <div className="col-xs-12" key={i}>
    
        <h2 className="contact_section_contact">
          {i === 0 ? (
            <a
              style={{ fontSize: "1rem", color: "#fff" }}
              href="tel:+234866398746"
            >
              <i className={contact?.icon}>{contact?.data}</i>
            </a>
          ) : (
            <a
              style={{ fontSize: ".9rem", color: "#fff" }}
              href="mailto:jimohyusuf7832@yahoo.com"
            >
              <i className={contact?.icon}>{contact?.data}</i>
            </a>
          )}
        </h2>
       
      </div>
    );
  });
  return (
    <Fragment>
      <div className="d-block d-md-none">
        <Heading heading={"Contact"} style={{ marginBottom: "60px" }} />
      </div>

      <section className="section section7" id="contactSection" name="contact">
        <div className="site-container">
          <VisibilitySensor
            onChange={(isVisible) => {
              if (isVisible) {
                scrollChange("contact");
              }
            }}
          >
            <div className="row justify-content-center align-items-center">
              <div className="col-md-6 col-12 ">
                <Flip left>
                  <div className="card w-75 m-auto">
                    <div className="card-header text-white text-center bg-primary py-4">
                      24/7 At Your service
                    </div>
                    <div className="card-body">
                      <div className="container-fluid text-dark">
                        <form onSubmit={handleSubmit}>
                          <div className="row">
                            <div className="col-12 my-1">
                              <input
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Name"
                                className="form-control"
                              />
                            </div>
                            <div className="col-12 my-1">
                              <input
                                name="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="form-control"
                              />
                            </div>
                      
                            <div className="col-12 my-1">
                              <textarea
                                name="message"
                                 value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Message"
                                rows="3"
                                cols=""
                                className="form-control"
                              />
                            </div>
                            <div className="col-12 my-1">
                              <button
                                type="submit"
                                className="btn w-100 btn-secondary"
                              >
                                Send
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </Flip>
              </div>
              <div className="col-md-6 col-12 mt-2 mt-md-0 text-center">
                <Fade bottom cascade>
                  <ul className="text-center d-flex justify-content-center social-networks spin-icon">
                    {linkden && (
                      <li>
                        <a
                          href={linkden}
                          className="ml-5 icon-linkedin social-network-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          LinkedIn
                        </a>
                      </li>
                    )}
                    {twitter && (
                      <li>
                        <a
                          href={twitter}
                          className="icon-twitter social-network-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Twitter
                        </a>
                      </li>
                    )}
                    {facebook && (
                      <li>
                        <a
                          href={facebook}
                          className="icon-facebook social-network-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Facebook
                        </a>
                      </li>
                    )}
                    {github && (
                      <li>
                        <a
                          href={github}
                          className="icon-github social-network-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          GitHub
                        </a>
                      </li>
                    )}
                    {instagram && (
                      <li>
                        <a
                          href={instagram}
                          className="icon-instagram social-network-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Instagram
                        </a>
                      </li>
                    )}
                  </ul>
                  {contactList}
                </Fade>
              </div>
            </div>
          </VisibilitySensor>
        </div>
      </section>
      <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      />
    </Fragment>
  );
}

export default Contact;
