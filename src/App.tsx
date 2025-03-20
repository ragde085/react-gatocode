import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import { useState } from "react";
import logo from "./assets/logo.png";
import GatoKey from "./components/GatoKey";

function App() {
  const [inputText, setInputText] = useState("");

  return (
    <div>
      <div className="container mt-2">
        <div className="jumbotron text-center">
          {" "}
          {/* Center content */}
          <div className="row">
            <div className="col-md-8 mx-auto">
              {" "}
              {/* Center column */}
              <h1 className="display-1 d-flex align-items-center justify-content-center mb-4">
                <img
                  src={logo}
                  className="rounded me-3" // Add margin to the right of the image
                  alt="Escudo Scouts Grupo XV Zapopan"
                  style={{ width: "80px" }} // Adjust size as needed
                />
                Clave Gato
              </h1>
              <p className="lead">
                Puedes ingresar cualquier texto y ver su versión en gato.
              </p>
              <label
                htmlFor="textInput"
                className="form-label text-start d-block"
              >
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
                className="btn btn-danger m-2"
                onClick={() => setInputText("")}
              >
                Limpiar
              </button>
              <button
                className="btn btn-primary m-2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#desc"
                aria-expanded="false"
                aria-controls="desc"
              >
                Descripción
              </button>
            </div>
            <div className="col-md-4">
              <div id="desc" className="collapse card card-body ">
                <p className="text-start d-block">
                  La Clave Gato es un sistema de codificación basado en un
                  esquema de 9 cuadrantes, inspirado en el concepto de T9
                  utilizado en teclados antiguos de teléfonos móviles. Cada
                  cuadrante contiene tres letras, y la posición de la letra
                  dentro del cuadrante (inicio, medio o final) se indica
                  mediante un asterisco (*). Este sistema permite representar
                  texto de manera visual utilizando imágenes que corresponden a
                  los cuadrantes y las posiciones específicas de las letras.
                </p>
              </div>
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
