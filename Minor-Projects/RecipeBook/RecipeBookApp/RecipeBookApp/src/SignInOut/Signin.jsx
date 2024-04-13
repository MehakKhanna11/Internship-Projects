import TextField from "@mui/material/TextField";
import { useState } from "react";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="sign-in-page">
      <div className="sign-in-container">
        <div className="image-container">
          <div className="image-text">
            <h1>Welcome Back</h1>
            <p>
              Please login your personal information to stay connected with Us!
            </p>
          </div>
          <img
            src="https://image.lexica.art/full_webp/b6fded05-44dc-43a6-8140-47825c1ecd0a"
            alt="bg-img"
          />
        </div>
        <div className="sign-in">
          <div id="sign-in-text">
            <h2>Login</h2>
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
            type="password"
            label="Password"
            variant="standard"
            // margin="dense"
            fullWidth
          />
          <button id="sign-in-button" onClick={() => {
                  fetch("http://localhost:3000/login", {
                    method: "POST",
                    body: JSON.stringify({ username:email, password:password}),
                    mode: "cors",
                    headers: { "Content-type": "application/json" },
                  })
                    .then((response) =>{console.log(response); response.json()
                    .then((data) => {
                      localStorage.setItem("token",data.token)
                      window.location="/";
                      console.log(data.token)
                      console.log(data);
                    })});
                }}>Login</button>
          <div className="link-sign-in">
            <p>Don't have an account?</p>
            <a href="/signup">Signup</a>
          </div>
        </div>
      </div>
    </div>
    )
}
export default SignIn;
