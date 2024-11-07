import "./App.css";
import { useState } from "react";

function App() {
  const [result, setresult] = useState("");

  const cilckhandler = (event) => {
    setresult(result.concat(event.target.value));
  };
  const clearhandler = () => {
    setresult("");
  };
  const calculate = () => {
    setresult(eval(result).toString());
  };

  return (
    <div className="calc">
      <input type="text" placeholder="0" id="answer" value={result} />

      <div className="row">
        <input
          type="button"
          value={"clear"}
          className="button1"
          onClick={clearhandler}
        />
        <input
          type="button"
          value={"%"}
          className="operator"
          onClick={cilckhandler}
        />
        <input
          type="button"
          value={"/"}
          className="operator"
          onClick={cilckhandler}
        />
        <input
          type="button"
          value={"*"}
          className="operator"
          onClick={cilckhandler}
        />
      </div>

      <div className="row">
        <input type="button" value={7} onClick={cilckhandler} />
        <input type="button" value={8} onClick={cilckhandler} />
        <input type="button" value={9} onClick={cilckhandler} />
        <input
          type="button"
          value={"-"}
          className="operator"
          onClick={cilckhandler}
        />
      </div>

      <div className="row">
        <input type="button" value={4} onClick={cilckhandler} />
        <input type="button" value={5} onClick={cilckhandler} />
        <input type="button" value={6} onClick={cilckhandler} />
        <input
          type="button"
          value={"+"}
          className="operator"
          onClick={cilckhandler}
        />
      </div>

      <div className="row">
        <input type="button" value={1} onClick={cilckhandler} />
        <input type="button" value={2} onClick={cilckhandler} />
        <input type="button" value={3} onClick={cilckhandler} />
        <input
          type="button"
          value={"="}
          className="button1"
          onClick={calculate}
        />
      </div>

      <div className="row">
        <input
          type="button"
          value={0}
          className="zero"
          onClick={cilckhandler}
        />
        <input type="button" value={"."} onClick={cilckhandler} />
      </div>
    </div>
  );
}

export default App;
