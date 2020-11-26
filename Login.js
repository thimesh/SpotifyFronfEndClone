import React from "react";
import "./Login.css";
import { loginUrl } from "./spotify";

function Login() {
  return (
    <div className="login">
      <img
        src="https://encrypted-tbn0.gstatic.com/
      images?q=tbn%3AANd9GcRGGnlhIwkCmk5LNizQJQwg2S4RiogibhC0zQ&usqp=CAU"
        alt="Spotify logo"
      />
      <a href={loginUrl}>LOGIN WITH SPOTIFY</a>
    </div>
  );
}

export default Login;
