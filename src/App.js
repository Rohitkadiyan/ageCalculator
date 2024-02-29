import AgeCalculator from "./components/AgeCalculator";
import "./App.css";

function App() {
  return (
    <div
      className="App col-md-12 "
      style={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <div className="  col-md-7 mx-auto bg-light p-4 m-4">
        <AgeCalculator />
      </div>
    </div>
  );
}

export default App;
