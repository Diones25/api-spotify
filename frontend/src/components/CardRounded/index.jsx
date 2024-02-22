import * as React from 'react';
import playIconSvg from '../../assets/img/play.svg';
import './style.css';

const Card = ({ image, title, description }) => {

  return (
    <>
      <div className="Card">
        <div className="ContainerPlaybutton">
          <button className='playbutton'>
            <img src={playIconSvg} alt="" />
          </button>
        </div>
        <div className="CardContent">
          <div className="CardImg rounded">
            <img src={ image } alt="" />
          </div>
          <h6 className="CardTitle">
            { title }
          </h6>
          <span className="CardDescription">
            { description }
          </span>
        </div>
      </div>
    </>
  );
}

export default Card;