import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Work from "./components/Work/Work";

function App() {
  return (
    <div className="bg-[#14213d]">
      <NavBar></NavBar>
      <Home></Home>
      <About></About>
      <Work></Work>
      <Contact></Contact>
    </div>
  );
}

export default App;
