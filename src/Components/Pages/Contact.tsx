import React, {useState} from "react";
import { TextField, FormControl, Button } from "@mui/material";
import emailjs from '@emailjs/browser';

import "../../index.css";
import NavBar from "../Layout/NavBar";

const Contact = () => {

  const [emailError, setEmailError] = useState(false)
  const [formValues, setFormValues] = useState({
    first_name: "",
    last_name: "",
    email: "",
    event_name: "",	
    company_name: "",
    message: ""
  });

  

  const SubmitForm = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    emailjs.sendForm(
      'service_44jp0t7',
      'template_6vu8u7p',
      event.currentTarget,
      '_pkhRLjCWjjO2C4Sd'
    )
      .then((response) => {
        alert('Thank you for your feedback! We will contact you shortly...');
      })
      .catch((err) => {
        alert('FAILED... Please try again later or contact us directly ' + err);
      });

    setFormValues({
      first_name: "",
      last_name: "",
      email: "",
      event_name: "",	
      company_name: "",
      message: ""
    });
    //alert("Message Sent.");
  };


  return (
    <div id="Contact">
      <NavBar />
      <div className="mainContainer">
      <div className="Container">
        <div className="pageTitle">
          <h1 className="ContactUsHead">
              Contact Us
          </h1> 
          <div className="divider"></div>
        </div>
        <table className="ContactUsTable">
          <tr>
            <td className="ContactUsTableLabel">Phone</td>
            <td className="ContactUsTableText">(1) 848-525-3054</td>
          </tr>
          <tr vertical-align="top">
            <td className="ContactUsTableLabel">Locations</td>
            <td className="ContactUsTableText">Atlantic Highlands, NJ · Freehold Township, NJ · Old Bridge, NJ · Brick Township, NJ · Long Branch, NJ · Jackson, NJ · Red Bank, NJ · Toms River, NJ · Sea Bright, NJ · Ocean Township, NJ</td>
          </tr>
          <tr><td/><td className="RedText">OPEN TO ANY TRAVEL LOCATION</td></tr>
        </table>
 
        <form autoComplete="off" onSubmit={SubmitForm}>
          <div className="letsWorkTogether">
            <h2>Lets Work Together…</h2>
          </div>
          <div className="FirstName field">
            <TextField 
            label="First Name"
            name="first_name" 
            onChange={(e) => setFormValues({...formValues, first_name: e.target.value })}
            required
            variant="outlined"
            color="secondary"
            type="text"
            value={formValues.first_name}
            error={emailError}
          />
          </div>
          <div className="LastName field">
          <TextField 
            label="Last Name"
            name="last_name" 
            onChange={(e) => setFormValues({...formValues, last_name: e.target.value })}
            required
            variant="outlined"
            color="secondary"
            type="text"
            value={formValues.last_name}
            error={emailError}
          />
          </div>
          <div className="field">
          <TextField 
            label="Email"
            name="email" 
            onChange={(e) => setFormValues({...formValues, email: e.target.value })}
            required
            variant="outlined"
            color="secondary"
            type="email"
            fullWidth
            value={formValues.email}
            error={emailError}
          /></div>
          <div className="field">
          <TextField 
            label="Event Name"
            name="event_name" 
            onChange={(e) => setFormValues({...formValues, event_name: e.target.value })}
            required
            variant="outlined"
            color="secondary"
            type="text"
            fullWidth
            value={formValues.event_name}
            error={emailError}
          /></div>
          <div className="field">
          <TextField 
            label="Company Name"
            name="company_name" 
            onChange={(e) => setFormValues({...formValues, company_name: e.target.value })}
            variant="outlined"
            color="secondary"
            type="text"
            fullWidth
            value={formValues. company_name}
            error={emailError}
          /></div>
          <div className="field">
          <TextField 
            label="Message"
            name="message" 
            onChange={(e) => setFormValues({...formValues, message: e.target.value })}
            required
            variant="outlined"
            color="secondary"
            type="text"
            multiline
            rows={4}
            fullWidth
            value={formValues. message}
            error={emailError}
          /></div>
          <div className="button-row">
            <Button variant="outlined" color="secondary" type="submit" className="button"> Submit </Button>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Contact;