import React from 'react';
import '../PCards/PCard.css';


const PCard = ({ imagen, titulo, descripcion, link }) => {


  return (
    <>
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


              </div>
            </p>


          </div>
        </div>
      </div>


    </>

  );
};

export default PCard;
