import { useState } from "react";
import { validateInput } from "../../utils/validate";
import API from "../../API.js";
import API_URL from "../../api/API_URL.js";
function Register() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    avatar: "",
    level: 0,
  });

  const [avatar, setAvatar] = useState(null);
  const [file, setFile] = useState(null);
  const [error, setError] = useState({});
  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  const handleFile = (e) => {
    const file = e.target.files;

    // sent file to api server
    let reader = new FileReader();
    reader.onload = (e) => {
      setAvatar(e.target.result);
      setFile(file[0]);
    };
    reader.readAsDataURL(file[0]);
  };

  const showError = (errors) => {
    if (Object.keys(errors).length > 0) {
      return Object.keys(errors).map((key, index) => {
        return <li key={index}>{errors[key]}</li>;
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = validateInput({ input, file });

    if (Object.keys(errors).length > 0) {
      setError(errors);
      return;
    }

    setError({}); // clear errors

    const data = {
      name: input.name,
      email: input.email,
      password: input.password,
      phone: input.phone,
      address: input.address,
      avatar: avatar,
      level: 0,
    };

    console.log(data);
    console.log(API_URL.REGISTER);

    API.post(API_URL.REGISTER, data).then((response) => {
      if (response.data.errors) {
        setError(response.data.errors);
      } else {
        alert("Success");
      }
    });
  };

  const ErrorList = ({ errors }) => {
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
    <div className="col-sm-4">
      <div className="signup-form">
        <h2>New User Signup!</h2>
        <ErrorList errors={error} />
        {avatar && (
          <div style={{ marginBottom: 10 }}>
            <img
              src={avatar}
              alt="preview"
              width="100"
              height="100"
              style={{ objectFit: "cover", borderRadius: "8px" }}
            />
          </div>
        )}
        <form action="#" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleInput}
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            onChange={handleInput}
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={handleInput}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            onChange={handleInput}
          />
          <input
            type="file"
            placeholder="Avatar"
            name="avatar"
            onChange={handleFile}
          />
          <input
            type="number"
            placeholder="Level"
            name="level"
            value={input.level}
            onChange={handleInput}
          />
          <button type="submit" className="btn btn-default">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Register;
