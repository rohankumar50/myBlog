import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Navbar from "./components/navbar/Navbar";
import './App.css'
import Seperator from "./components/seperator/Seperator";
function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Main />
    </div>
  );
}

export default App;
