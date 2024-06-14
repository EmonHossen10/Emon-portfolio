import { Helmet } from "react-helmet-async";
import "./App.css";
import Footer from "./Components/Footer";
import HomePage from "./Pages/HomePage";

function App() {
  return (
    <div>
      <Helmet>
        <title>Portfolio | Home</title>
      </Helmet>
      <HomePage></HomePage>
      <Footer></Footer>
    </div>
  );
}

export default App;
