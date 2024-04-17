import React from 'react';
import '../PCards/Card.css';


const Card = ({ imagen, titulo, descripcion, link }) => {
  return (
    <div className="col">
      <div className="card">
        <img src={imagen} className="card-img-top" alt="..." />
        <div className="card-body">
          <hr />
          <h5 className="card-title">{titulo}</h5>
          <hr />
          <p>
            <div className='row-buttons'>

              <a href={link}>
                <button className="btn btn-secondary" type="button" >
                  Ir a gitHub
                </button>
              </a>
              <div className="card card-body">
                {descripcion}
              </div>
              
            </div>
          </p>


        </div>
      </div>
    </div>

  );
};

export default Card;
