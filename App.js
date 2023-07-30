import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Showarray from "./components/Showarray";

function App() {
  const uuu = "My First React App";
  const yyy = "yyyyyyyyyyyyyyy";
  const fruits = ["Apple", "Banana", "Orange", "Mango"];
  const allow = false;


  const myfunc = (e) => {
    e.preventDefault();
    const formdata= new FormData(e.target);
    console.log(formdata.getAll("username")[1])
    console.log("form submitted")
  };


  // if (allow) {
  //   return (
  //     <div className="App">
  //       <Home abcd={uuu} ttt={yyy} />
  //       <About />
  //       <h1>My Fruits</h1>

  //       <Showarray fruits={fruits} />
  //     </div>
  //   );
  // } else {
  //   return (
  //     <div>
  //       <h1>Not Allowed</h1>
  //     </div>
  //   );
  // }

  return (
    <div className="App">
      {allow ? (
        <>
          <Home abcd={uuu} ttt={yyy} />
          <About />
          <h1>My Fruits</h1>

          {/* <button onClick={myfunc}>Click Me</button>

          <Showarray fruits={fruits} /> */}


          <form onSubmit={myfunc}>
            <input type="text" name="username" placeholder="username"/><br />
            <input type="text" name="username" placeholder="username"/><br />
            <input type="password" name="password" placeholder="password"/><br />
            <input type="submit" value="submit"/>
          </form>
    </>
      ) : (
        <>
          <div>
            <h1>Not Allowed</h1>
          </div>
        </>
      )}
    </div>
  );
}

// rfce

export default App;


// hw  --- create a button which on click toggeles the background color of the page  
// create a signup form and on submit show all the fields in console
// create a login form and on submit show all the fields in console
// make a conditional rendering, use ternary operator and if else statement 
// try to use more components , create the form in other component and show the data in other component 

// form.js file ---- where the actual form is there and in this file lets have a another component called showdata.js 
//where we will show the data