import * as React from 'react';
import './style.css';

{/*Icone svg abaixo é de pause*/}
{/*<svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 bneLcE"><path d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>*/}

const Card = ({ image, title, description }) => {

  return (
    <>
      <div className="Card">
        <div className="ContainerPlaybutton">
          <button className='playbutton'>
            <svg data-encore-id="icon" role="img" aria-hidden="true" viewBox="0 0 24 24" class="Svg-sc-ytk21e-0 bneLcE"><path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path></svg>            
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