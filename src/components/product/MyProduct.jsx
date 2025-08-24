import { useEffect, useState } from "react";
import { data, Link } from "react-router-dom";
import API from "../../API";
import API_URL from "../../api/API_URL";

function MyProduct() {
  const [products, setProducts] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));

  // Fetch products from API or state management
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
    };

    API.get(API_URL.MY_PRODUCT, config)
      .then((response) => {
        if (response.data && response.data.data) {
          const { data } = response;
          setProducts(data.data);
        } else {
          console.log("No products found");
        }
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const renderProduct = () => {
    if (Object.keys(products).length > 0) {
      return Object.keys(products).map((key, index) => {
        const imgArr = JSON.parse(products[key].image);
        const firstImage = imgArr[0];
        return (
          <tr key={key}>
            <td>
              <h4>
                <a href="">{products[key].id}</a>
              </h4>
            </td>
            <td className="cart_description">
              <a href="">{products[key].name}</a>
            </td>
            <td className="cart_product">
              <img
                style={{ width: "100px", height: "100px" }}
                src={
                  "http://localhost/laravel8/laravel8/public/upload/product/" +
                  products[key].id_user +
                  "/" +
                  firstImage
                }
                alt="product"
              />
            </td>
            <td className="cart_price">{products[key].price}</td>
            <td className="cart_total">
              <Link href="">
                <i className="fa fa-pencil-square" aria-hidden="true"></i>
              </Link>
              <Link href="">
                <i className="fa fa-trash-o" aria-hidden="true"></i>
              </Link>
            </td>
          </tr>
        );
      });
    }
  };

  return (
    <div className="col-sm-9">
      <div className="table-responsive cart_info">
        <table className="table table-condensed">
          <thead>
            <tr className="cart_menu">
              <td className="idPro">Id</td>
              <td className="description">Name</td>
              <td className="image">Image</td>
              <td className="price">Price</td>
              <td className="total">Action</td>
            </tr>
          </thead>
          <tbody>{renderProduct()}</tbody>
        </table>
        <Link to="/product/add">
          <button type="submit" className="btn btn-default btn-primary">
            Add New
          </button>
        </Link>
      </div>
    </div>
  );
}
export default MyProduct;
