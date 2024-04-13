import TextField from "@mui/material/TextField";
function Contact() {
  return (
    <div  id="contact" className="contact-page">
      <h2 >CONTACT ME</h2>
      <p>Get in touch!</p>
      <div className="contact-container">
      <TextField id="standard-basic" label="Full Name" fullWidth variant="standard" />
      <TextField id="standard-basic" label="Subject" fullWidth variant="standard" />
      <TextField id="standard-basic" label="Message" fullWidth multiline minRows={3} maxRows={4} variant="standard" />
      <button type="submit" className="contact-button">Submit</button>
      </div>
    </div>
  );
}
export default Contact;
