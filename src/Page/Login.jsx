import React, { useState } from "react";
import { useLocation,  useNavigate  } from "react-router-dom";
import { loginUser } from "../Data/Api";

const Login = () => {
  const [loginFormData, setLoginFormData] = useState({
    email: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [error, setError] = useState(null)



  const location = useLocation()
 console.log(location)

  const navigate = useNavigate();
 //console.log(navigate)

 function handleSubmit(e) {
    e.preventDefault()
    setStatus("submitting")
    loginUser(loginFormData)
        .then(data => {
            setError(null)
            localStorage.setItem("loggedin", true)
            navigate("/host")
        })
        .catch(err => {
            setError(err)
        })
        .finally(() => {
            setStatus("idle")
        })

    /*.then(data => console.log(data))*/
    /// console.log(loginFormData)
  }




  function handleChange(event) {
    const { name, value } = event.target;
    setLoginFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <div>
      <div className="logincontainer">
  
          
            <h1>Sign in to your account</h1>
              {
                location.state?.message &&
                    <h3 className="loginfirst">{location.state.message}</h3>
            }
            {
                error?.message &&
                    <h3 className="loginfirst">{error.message}</h3>
            }
        <form onSubmit={handleSubmit} className="loginform">
          <input
            type="email"
            placeholder="Email address"
            name="email"
            onChange={handleChange}
            value={loginFormData.email}
          />
          <input
            type="password"
            placeholder="password"
            name="password"
            onChange={handleChange}
            value={loginFormData.password}
          />
          <button disabled={status === "submitting"}>
          {status === "submitting"
                        ? "Logging in..."
                        : "Log in"
                    }
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
