import { useEffect, useState } from "react";
function Appbar() {
  const [userInfo, setUserInfo] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/userinfo", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        authorization: "Bearer " + localStorage.getItem("token"),
      },
      mode: "cors",
    }).then((response) => {
      response.json().then((data) => {
        setUserInfo(data.username);
      });
    });
  }, []);

  if (userInfo) {
    return (
      <div className="nav-bar">
        <div
          className="logo"
          onClick={() => {
            window.location = "/";
          }}
        >
          <img src="https://w7.pngwing.com/pngs/19/480/png-transparent-cooking-chef-hand-painted-cook-logo-watercolor-painting-free-logo-design-template-hand.png" />
        </div>

        <div className="nav-items">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="recipes">Recipes</a>
          </li>
          <li>
            <a href="/addrecipe">Add Recipe</a>
          </li>
          <li>
            <a
              onClick={() => {
                window.location = "http://localhost:5173/#contact-page";
              }}
            >
              Contact Us
            </a>
          </li>
        </div>
        <div className="nav-functions">
          <div className="User-information-container">
            <div
              className="user-icon"
              onClick={() => {
                const userMenu = document.querySelector(".user-menu");
                userMenu.classList.toggle("active-user-menu");
              }}
            >
              <i className="fa-regular fa-user"></i>
            </div>
            <div className="user-menu">
              <h4>{userInfo}</h4>
              <button onClick={()=>{
                localStorage.setItem("token","");
                window.location="/"
              }}>Logout</button>
            </div>
          </div>

          <div className="menu-bar">
            <div className="bars" onClick={()=>{
              const bars=document.querySelector(".bars")
              bars.classList.toggle("change");
              const navItems = document.querySelector(".nav-items");
              navItems.classList.toggle("nav-display");
            }}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="nav-bar">
      <div
        className="logo"
        onClick={() => {
          window.location = "/";
        }}
      >
        <img srcSet="https://w7.pngwing.com/pngs/19/480/png-transparent-cooking-chef-hand-painted-cook-logo-watercolor-painting-free-logo-design-template-hand.png" alt="" />
      </div>

      <div className="nav-items">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="recipes">Recipes</a>
        </li>
        <li>
          <a href="/addrecipe">Add Recipe</a>
        </li>
        <li>
          <a
            onClick={() => {
              window.location = "http://localhost:5173/#contact-page";
            }}
          >
            Contact Us
          </a>
        </li>
      </div>
      <div className="nav-functions">
        <div className="signin-signup-buttons">
          <button
            className="sign-in-btn"
            onClick={() => {
              window.location = "/login";
            }}
          >
            Sign In
          </button>
          <button
            className="signup-btn"
            onClick={() => {
              window.location = "/signup";
            }}
          >
            Sign Up
          </button>
        </div>
        <div className="menu-bar">
          <div className="bars" onClick={()=>{
              const bars=document.querySelector(".bars")
              bars.classList.toggle("change");
              const navItems = document.querySelector(".nav-items");
              navItems.classList.toggle("nav-display");
            }}>
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
        </div>
      </div>
    </div>
  );
}
export default Appbar;




            {/* <button
              className="menu-icon-btn"
              onClick={() => {
                const navItems = document.querySelector(".nav-items");
                navItems.classList.toggle("nav-display");
              }}
            >
              <i className="fa-solid fa-bars"></i>
            </button> */}
                      {/* <div className="signin-signup-buttons">
          <button
            className="sign-in-btn"
            onClick={() => {
              window.location = "/login";
            }}
          >
            Sign In
          </button>
          <button
            className="signup-btn"
            onClick={() => {
              window.location = "/signup";
            }}
          >
            Sign Up
          </button>
        </div> */}

        
      //   <div className="search-bar">
      //   <input
      //     type="text"
      //     name="search-input"
      //     id="search-input"
      //     placeholder="Search Recipes..."
      //   />
      //   <button className="search-button">
          // <i
          //   className="fa-solid fa-magnifying-glass"
          // ></i>
      //   </button>
      // </div>
      // <div className="search-bar">
      //     <input
      //       type="text"
      //       name="search-input"
      //       id="search-input"
      //       placeholder="Search Recipes..."
      //     />
      //     <button className="search-button">
      //       <i className="fa-solid fa-magnifying-glass" onClick={() => {}}></i>
      //     </button>
      //   </div>
                {/* <button
            className="menu-icon-btn"
            onClick={() => {
              const navItems = document.querySelector(".nav-items");
              navItems.classList.toggle("nav-display");
            }}
          >
            <i className="fa-solid fa-bars"></i>
          </button> */}
          