import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import header from "./components/header";
import home from './components/home';
import footer from './components/footer';
import axios from "axios";


function App() {
  function render() {
    axios.get(
     "http://localhost:3001/tierra"
    )
    .then((response) => {
      console.log(response)
      return response
    })


    // Calling function and assigned it to the variable
    const mytable = "compa";
    return mytable
  }
  const mytable = render()
  return ( 
    <div className="App">
       {mytable} 
       {"render"} 
    </div>
  );
}

export default App;

