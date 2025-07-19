import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

function App(props) {
  return (
    <>
      <Header />
      {props.children}
      <Footer />
    </>
  );
}

export default App;
