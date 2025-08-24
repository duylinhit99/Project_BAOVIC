import { ToastContainer } from "react-toastify";

import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { useLocation } from "react-router-dom";
import MenuAcc from "./layouts/MenuAcc";
import MenuLeft from "./layouts/MenuLeft";

function App(props) {
  let params = useLocation();
  const typeMenu = ["account", "my-product", "add-product"];

  return (
    <>
      <Header />
      <ToastContainer position="bottom-left" autoClose={3000} theme="colored" />
      <section>
        <div className="container">
          <div className="row">
            {typeMenu.some((item) => params["pathname"].includes(item)) ? (
              <MenuAcc />
            ) : (
              <MenuLeft />
            )}
            {props.children}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default App;
