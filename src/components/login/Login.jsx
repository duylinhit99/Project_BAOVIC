import { useState } from "react";
import { validateInput } from "../../utils/validate";
import API from "../../API";
import API_URL from "../../api/API_URL";
import { useNavigate } from "react-router-dom";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const navigation = useNavigate();

  const [errors, setError] = useState({});

  const handleInput = (event) => {
    const { name, value } = event.target;

    setInput((state) => ({ ...state, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const errors = validateInput({ input });

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    setError({});

    const data = {
      email: input.email,
      password: input.password,
    };

    API.post(API_URL.LOGIN, data)
      .then((response) => {
        const auth = response.data.Auth;
        const token = response.data.token;

        if (auth) {
          localStorage.setItem("token", JSON.stringify(token));
          localStorage.setItem("auth", JSON.stringify(auth));
          localStorage.setItem("login", true);

          navigation("/");
        }
      })
      .catch((errors) => console.log(errors));
  };

  const ErrorsList = ({ errors }) => {
    if (!errors || Object.keys(errors).length === 0) return null;
    return (
      <ul style={{ color: "red", paddingLeft: 20 }}>
        {Object.entries(errors).map(([key, msg], i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    );
  };
  return (
    <div className="col-sm-4 col-sm-offset-1">
      <div className="login-form">
        <h2>Login to your account</h2>
        <ErrorsList errors={errors} />
        <form action="#" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            onChange={handleInput}
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleInput}
          />
          <span>
            <input type="checkbox" className="checkbox" />
            Keep me signed in
          </span>
          <button type="submit" className="btn btn-default">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
