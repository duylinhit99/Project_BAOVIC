import { Link } from "react-router-dom";

function MenuAcc() {
  return (
    <div className="col-sm-3">
      <div className="left-sidebar">
        <h2>Category</h2>
        <div className="panel-group category-products" id="accordian">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <Link
                  data-toggle="collapse"
                  data-parent="#accordian"
                  to="/account"
                >
                  <span className="badge pull-right">
                    <i className="fa fa-plus"></i>
                  </span>
                  Account
                </Link>
              </h4>
            </div>
          </div>
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <Link
                  data-toggle="collapse"
                  data-parent="#accordian"
                  to="/my-product"
                >
                  <span className="badge pull-right">
                    <i className="fa fa-plus"></i>
                  </span>
                  My Product
                </Link>
              </h4>
            </div>
            <div id="mens" className="panel-collapse collapse">
              <div className="panel-body">
                <ul>
                  <li>
                    <a href="#">Fendi</a>
                  </li>
                  <li>
                    <a href="#">Guess</a>
                  </li>
                  <li>
                    <a href="#">Valentino</a>
                  </li>
                  <li>
                    <a href="#">Dior</a>
                  </li>
                  <li>
                    <a href="#">Versace</a>
                  </li>
                  <li>
                    <a href="#">Armani</a>
                  </li>
                  <li>
                    <a href="#">Prada</a>
                  </li>
                  <li>
                    <a href="#">Dolce and Gabbana</a>
                  </li>
                  <li>
                    <a href="#">Chanel</a>
                  </li>
                  <li>
                    <a href="#">Gucci</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="shipping text-center">
          <img src="images/home/shipping.jpg" alt="" />
        </div>
      </div>
    </div>
  );
}

export default MenuAcc;
