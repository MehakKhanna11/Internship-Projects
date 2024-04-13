// import Appbar from "./Appbar";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="sign-up-page">
      <div className="sign-up-container">
        <div className="image-container">
          <div className="image-text">
            <h1>Create Account</h1>
            <p>
              To be part of our Community, Please sign up using your personal
              information
            </p>
          </div>
          <img
            src="https://image.lexica.art/full_webp/b6fded05-44dc-43a6-8140-47825c1ecd0a"
            alt="bg-img"
          />
        </div>
        <div className="sign-up">
          <div id="sign-up-text">
            <h2>Sign Up</h2>
          </div>
          <div id="user-name-input">
            <TextField
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
              id="standard-basic"
              label="Email"
              variant="standard"
              // margin="dense"
              fullWidth
            />
          </div>
          <div className="password-input"></div>
          <TextField
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
            required
            id="standard-basic"
            label="Password"
            variant="standard"
            type="password"
            // margin="dense"
            fullWidth
          />
          <button id="sign-up-button" onClick={() => {
                  fetch("http://localhost:3000/signup", {
                    method: "POST",
                    body: JSON.stringify({ username:email, password:password}),
                    mode: "cors",
                    headers: { "Content-type": "application/json" },
                  })
                    .then((response) =>{console.log(response); response.json()
                    .then((data) => {
                      localStorage.setItem("token",data.token)
                      window.location="/";
                      console.log(data);
                    })});
                }}>Sign Up</button>
          <div className="link-login">
            <p>Already have an account?</p>
            <a href="/login">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
