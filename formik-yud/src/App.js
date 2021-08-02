import rocketImg from "./assests/rocket.png";
import Signup from "./components/Signup";

function App() {
  return (
    <div className="App">
      <div className="container mt-3">
        <div className="row">
          <div className="col-md-5">
            <Signup />
          </div>
          <div className="col-md-7">
            <img className="img-fluid w-100" src={rocketImg} alt="rocketImg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
