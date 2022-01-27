import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";

function App() {
  const URL = "https://express-react-lab-nd.herokuapp.com/";

  return (
    <div className="App">
      <Header />
      <About URL={URL} />
      <Projects URL={URL} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;