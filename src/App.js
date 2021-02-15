import logo from "./logo.svg";
import "./App.css";
import ProfilePic from "./Images/favicon.jpg";

function App() {
  return (
    <div>
      <header>
        <div className="TID">
          <div className="title">
            <h1>
              {" "}
              KHA'A <span>Store</span>
            </h1>
          </div>
          <div className="discription">
            <p>
              <b>Initializing a new App</b>
            </p>
          </div>
        </div>
      </header>
      <div className="image">{/* <img src={ProfilePic} /> */}</div>
    </div>
  );
}

export default App;
