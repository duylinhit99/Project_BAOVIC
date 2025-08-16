// hooks
import { useEffect, useState } from "react";
// utils
import { validateInput } from "../../utils/validate";
// API
import API from "../../API.js";
import API_URL from "../../api/API_URL.js";
function Account() {
  const [error, setError] = useState({});
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    address: "",
    avatar: "",
    level: "",
  });
  const [file, setFile] = useState(null);
  const [avatar, setAvatar] = useState("");
  const [idUser, setIdUser] = useState(null);

  const handleFile = (e) => {
    const file = e.target.files;
    if (file && file.length > 0) {
      // sent file to api server
      let reader = new FileReader();
      reader.onload = (e) => {
        setAvatar(e.target.result);
        setFile(file[0]);
      };
      reader.readAsDataURL(file[0]);
    }
  };

  useEffect(() => {
    let dataUser = JSON.parse(localStorage.getItem("auth"));
    if (dataUser) {
      console.log("dataUser", dataUser);
      setUser({
        name: dataUser.name,
        email: dataUser.email,
        password: dataUser.password,
        phone: dataUser.phone,
        address: dataUser.address,
        avatar: dataUser.avatar,
        level: dataUser.level,
      });
      setIdUser(dataUser.id);
    }
  }, []);

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    console.log("user", user);
    // chặn prevent default form submission
    event.preventDefault();

    const error = validateInput({ input: user, file, type: "updateUser" });

    if (Object.keys(error).length > 0) {
      setError(error);
      console.log("error", error);

      return;
    } else {
      setError({}); // clear errors
      const token = JSON.parse(localStorage.getItem("token"));
      console.log("ID", idUser);

      // Call API to update user information
      API.post(API_URL.UPDATE_USER + idUser, user, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => {
          if (response.data.errors) {
            setError(response.data.errors);
          } else {
            // Update local storage with new user data
            const auth = response.data.Auth;
            const token = response.data.token;
            console.log("response.data", response.data);

            localStorage.setItem("auth", JSON.stringify(auth));
            localStorage.setItem("token", JSON.stringify(token));
            alert("Cập nhật thông tin thành công");
          }
        })
        .catch((error) => {
          console.error("Error updating user:", error);
          setError({ general: "Cập nhật thông tin thất bại" });
        });
    }
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
    <div className="col-sm-9">
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
            value={user.name}
            onChange={handleChangeInput}
          />
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={user.email}
            readOnly
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            placeholder="Phone"
            name="phone"
            value={user.phone}
            onChange={handleChangeInput}
          />
          <input
            type="text"
            placeholder="Address"
            name="address"
            value={user.address}
            onChange={handleChangeInput}
          />
          <input
            type="file"
            placeholder="Avatar"
            name="avatar"
            onChange={handleFile}
          />
          <button type="submit" className="btn btn-default">
            Signup
          </button>
        </form>
      </div>
    </div>
  );
}

export default Account;
