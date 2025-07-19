import Register from "../../components/login/Register";
import Login from "../../components/login/Login";

function Index() {
  return (
    <section id="form">
      <div className="container">
        <div className="row">
          <Login />
          <div className="col-sm-1">
            <h2 className="or">OR</h2>
          </div>
          <Register />
        </div>
      </div>
    </section>
  );
}

export default Index;
