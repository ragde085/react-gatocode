import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import { useState } from "react";
import GatoKey from "./components/GatoKey";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <div className="container mt-2">
        <div className="jumbotron">
          <h1 className="display-1">Clave Gato</h1>
          <div className="row">
            <div className="col-md-8">
              <label htmlFor="textInput" className="form-label">
                Texto:
              </label>
              <textarea
                id="textInput"
                className="form-control"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
              />
              <button
                type="button"
                className="btn btn-danger mt-2"
                onClick={() => setInputText("")}
              >
                Limpiar
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <GatoKey text={inputText} width={40} height={40} />
        </div>
      </div>
    </div>
  );
}

export default App;
