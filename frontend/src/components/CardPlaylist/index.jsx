import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './style.css'

const CardItem = ({ image, title, description }) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        style={{ with:  '240px', height: '240px', background: "#282828" }}
        component="img"
        image={ image }
        id='CardMediaImage'
      />
      <CardContent id='CardContent' style={{ background: "#282828" }}>
        <Typography variant="h6" gutterBottom id='TypographyTitle'>
          { title }          
        </Typography>
        <Typography variant="body2" color="text.secondary" id='TypographyDescription'>
          { description }          
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardItem;