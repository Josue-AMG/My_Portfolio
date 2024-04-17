import React from "react";
import "./MenuVar.css";

export function MenuVar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand fs-1" href="#">My Portfolio🗃️</a> {/* Cambia fs-1 al tamaño deseado */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">Inicio</a>
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Proyectos
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="#">Movil</a></li>
              <li><a className="dropdown-item" href="#">Web</a></li>
              <li><a className="dropdown-item" href="#">Escritorio</a></li>
            </ul>
            <a className="nav-link" href="#">Contacto</a>
            
          </div>
        </div>
      </div>
    </nav>
  );
}
