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
          <div className="CardImg">
            <img src={ image } alt="" />
          </div>
          <div className="CardTitle">
            { title }
          </div>
          <div className="CardDescription">
            { description }
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;