import { useState } from "react";
import { validateInput } from "../../utils/validate";
import { validateImg } from "../../utils/validateImg";

function Register() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
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

  const handleSubmit = (e) => {
    e.preventDefault();
    let isCheck = true;

    const errors = validateInput({ input });

    // set error vào state
    setError(errors);

    if (Object.keys(errors).length === 0) {
      console.log("Form hợp lệ. Gửi dữ liệu:", input);
      // TODO: Gửi API hoặc xử lý tiếp
    } else {
      console.log("Form không hợp lệ", errors);
    }

    const validateFile = validateImg(file);

    console.log(validateFile);
  };

  return (
    <div className="col-sm-4">
      <div className="signup-form">
        <h2>New User Signup!</h2>
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
