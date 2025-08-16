import Header from "./layouts/Header";
import Footer from "./layouts/Footer";
import { useLocation } from "react-router-dom";
import MenuAcc from "./layouts/MenuAcc";
import MenuLeft from "./layouts/MenuLeft";

function App(props) {
  let params = useLocation();

  return (
    <>
      <Header />
      <section>
        <div className="container">
          <div className="row">
            {params["pathname"].includes("account") ? (
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
