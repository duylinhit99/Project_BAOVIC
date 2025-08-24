import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../../API";
import API_URL from "../../api/API_URL";
import { toast } from "react-toastify";
import { validateInputProd } from "../../utils/validateProduct";

function AddProduct() {
  const [input, setInput] = useState({
    name: "",
    price: "",
    category: "",
    brand: "",
    status: 1,
    sale: 0,
    companyProfile: "",
    detail: "",
    avatars: [],
    salePrice: "",
  });

  const [brand, setBrand] = useState([]);
  const [category, setCategory] = useState([]);
  const [file, setFile] = useState([]);
  const [error, setError] = useState({});
  const typeFile = ["png", "jpg", "jpeg"];

  const navigate = useNavigate();

  // get api brand and category
  useEffect(() => {
    API.get(API_URL.CATEGORY_PRODUCT).then((response) => {
      if (response) {
        const { data } = response;
        setBrand(data.brand);
        setCategory(data.category);
      }
    });
  }, []);

  const renderCategory = () => {
    if (category.length > 0) {
      return category.map((value, key) => {
        return (
          <option value={value.id} key={key}>
            {value.category}
          </option>
        );
      });
    }
  };

  const renderBrand = () => {
    if (brand.length > 0) {
      return brand.map((value, key) => {
        return (
          <option value={value.id} key={key}>
            {value.brand}
          </option>
        );
      });
    }
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  function renderSale() {
    if (input.status === "0") {
      return (
        <div style={{ display: "flex", alignItems: "center" }}>
          <input
            type="text"
            placeholder="Sale Price"
            name="salePrice"
            style={{ width: 200, marginRight: 10 }}
            onChange={handleInput}
          />{" "}
          %
        </div>
      );
    }
  }

  const handleFile = (e) => {
    const files = e.target.files;
    const newFiles = [...file, ...files];
    setFile(newFiles);
    setInput((state) => ({ ...state, avatars: newFiles }));
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    console.log(input);

    const errors = validateInputProd({ input, file });

    if (Object.keys(errors).length > 0) {
      const firstError = Object.values(errors)[0];
      toast.error(firstError);
      setError(errors);

      if (errors.avatars) {
        setFile([]); // reset state file
        setInput((state) => ({ ...state, avatars: [] })); // reset trong input
      }
      console.log(errors);

      return;
    } else {
      setError({});
      const token = JSON.parse(localStorage.getItem("token"));
      const config = {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };

      let formData = new FormData();
      formData.append("name", input.name);
      formData.append("price", input.price);
      formData.append("category", input.category);
      formData.append("brand", input.brand);
      formData.append("company", input.companyProfile);
      formData.append("detail", input.detail);
      formData.append("sale", input.salePrice);
      formData.append("status", input.status);

      Object.keys(file).map((item, i) => {
        return formData.append("file[]", file[item]);
      });

      API.post(API_URL.ADD_PRODUCT, formData, config).then((response) => {
        console.log(response);

        if (response.data.errors) {
          toast.error(response.data.errors);
        } else {
          navigate("/my-product");
          toast.success("Thêm sản phẩm thành công");
        }
      });
    }

    console.log("Submit data:", input, file);
  };

  return (
    <div className="col-sm-9">
      <div className="blog-post-area">
        <h2 className="title text-center">Update user</h2>
        <div className="signup-form">
          <h2>New Product</h2>
          <form action="#" onSubmit={handelSubmit}>
            <label>Name (*)</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              onChange={handleInput}
            />
            <label>Price (*)</label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              onChange={handleInput}
            />
            <label>Category (*)</label>
            <select name="category" onChange={handleInput}>
              <option>Please select category</option>
              {renderCategory()}
            </select>
            <label>brand (*)</label>
            <select name="brand" onChange={handleInput}>
              <option>Please select brand</option>
              {renderBrand()}
            </select>
            <label>Sale (*)</label>
            <select name="status" onChange={handleInput}>
              <option value="1">New</option>
              <option value="0">Sale</option>
            </select>
            {renderSale()}
            <label>Compony profile (*)</label>
            <input type="text" name="companyProfile" onChange={handleInput} />
            <label>Image (*)</label>
            <input
              type="file"
              id="files"
              accept="image/*"
              name="avatars"
              multiple
              style={{ paddingTop: 10 }}
              onChange={handleFile}
            />
            {file.length > 0 && (
              <div style={{ display: "flex", gap: "10px", marginBottom: 10 }}>
                {file.map((f, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(f)}
                    alt="preview"
                    width="100"
                    height="100"
                    style={{ objectFit: "cover", borderRadius: "8px" }}
                  />
                ))}
              </div>
            )}
            <br></br>
            <label>Detail (*)</label>
            <textarea
              name="detail"
              placeholder="Detail"
              onChange={handleInput}
            ></textarea>
            <button type="submit" className="btn btn-default">
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddProduct;
