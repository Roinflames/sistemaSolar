import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import header from "./components/header";
import home from './components/home';
import footer from './components/footer';



function App() {
  function render() {
    // Calling function and assigned it to the variable
    const mytable = "this.getTable()";
  
    return (
      <>
        {/* rendered the JSX */}
       mytable 
      </>
    );
  }
  return ( 
    <div className="App">
       {render} 
    </div>
  );
}

export default App;

