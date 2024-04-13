import TextField from "@mui/material/TextField";
import { useState } from "react";

function ContactUs() {
  const [fullname,setFullname]=useState("");
  const [email,setEmail]=useState("");
  const [phoneNumber,setPhoneNumber]=useState(0);
  return (
    <div id="contact-page" className="contact-page">
      <div className="contact-container">
        <form id="contact-form">
        <h1>Contact Us</h1>
          <div className="contact-Name">
            <TextField
              required
              id="standard-basic"
              label="Fullname"
              variant="standard"
              margin="dense"
              fullWidth
              onChange={(e)=>{
                setFullname(e.target.value)
              }}
            />
          </div>
          <div className="contact-email">
            <TextField
              id="standard-basic"
              required
              fullWidth
              margin="dense"
              label="Email"
              variant="standard"
              onChange={(e)=>{
                setEmail(e.target.value)
              }}
            />
          </div>
          <div className="contact-phone">
            <TextField
              margin="dense"
              id="standard-basic"
              label="Phone Number"
              variant="standard"
              fullWidth
              onChange={(e)=>{
                setPhoneNumber(e.target.value)
              }}
            />
          </div>
          <button type="submit" id="contact-submit" onClick={()=>{
            if(fullname!="" && email!="" && phoneNumber!=""){
              fetch("http://localhost:3000/contact",{
                method:"POST",
                body:JSON.stringify({fullname:fullname,email:email,phoneNumber:phoneNumber}),
                mode: "cors",
                headers: { "Content-type": "application/json",
                "authorization" : "Bearer " + localStorage.getItem("token")
              }
              }).then((response)=>{
                response.json().then((data)=>{
                  console.log(data);
                })
              })
            }
            else{
              console.log("Invalid Data");
            }
            
          }}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default ContactUs;
