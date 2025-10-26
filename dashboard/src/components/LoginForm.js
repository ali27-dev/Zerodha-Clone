/* New-Login-Logic */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "./css/AuthForm.css";

const Login = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });
  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });
  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log(error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="auth-container">
      <h2>Login Account</h2>
      <form onSubmit={handleSubmit} className="auth-form">
        <div className="input-1">
          {/* <label htmlFor="email">Email</label> */}
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />
        </div>
        <div className="input-1">
          {/* <label htmlFor="password">Password</label> */}
          <input
            type="password"
            name="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account? <Link to={"/signup"}>Signup</Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  );
};

export default Login;
/* Old-Login-Logic */
// import React, { useState } from "react";
// import axios from "axios";
// import "./css/AuthForm.css";

// const LoginForm = () => {
//   const [credentials, setCredentials] = useState({
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) =>
//     setCredentials({ ...credentials, [e.target.name]: e.target.value });

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("http://localhost:4000/login", credentials);
//       alert("Login successful!");
//       console.log(res.data);
//     } catch (err) {
//       console.error(err);
//       alert("Login failed!");
//     }
//   };

//   return (
//     <div className="auth-container">
//       <h2>Welcome Back</h2>
//       <form className="auth-form" onSubmit={handleSubmit}>
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={credentials.email}
//           onChange={handleChange}
//           required
//         />

//         <input
//           type="password"
//           name="password"
//           placeholder="Enter Password"
//           value={credentials.password}
//           onChange={handleChange}
//           required
//         />

//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;
