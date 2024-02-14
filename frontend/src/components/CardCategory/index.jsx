import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './card.css'

const CardCategory = ({ image, title }) => {

  function generateColor() {
    const letters = '0123456789ABCDEFGHIJLMNOPQRSTUVXZ';
    let color = '#';
    
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    
    return color;
    
  }

  return (
    <Card 
      sx={{ maxWidth: 224 }}
      id='Card' 
      style={{ 
        backgroundColor: `${generateColor()}` 
      }}
      >
      <div id="CardImageContainer">
        <CardMedia
          component="img"
          image={ image }
          id='CardMediaImageCategory'
        />        
      </div>
      <div id='CardTypographyContainer'>
        <Typography variant="h6" gutterBottom id='TypographyTitleCategory'>
            { title }          
        </Typography>
      </div>
    </Card>
  )
}

export default CardCategory;