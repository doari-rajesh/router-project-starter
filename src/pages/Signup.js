import React from "react";
import signupImg from "../assets/signup.png";
import Template from "../components/Template";
const Signup = ({setIsLoggedIn}) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="Build skills for today, tomorrow, and beyond."
        desc2="Education to future-proof your career."
        formtype="signup"
        image={signupImg}
        setIsLoggedIn={setIsLoggedIn}
        
      />
    </div>
  );
};

export default Signup;
