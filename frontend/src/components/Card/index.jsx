import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './card.css'

const CardItem = ({ image, title, description }) => {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        image={ image }
        id='CardMediaImage'
      />
      <CardContent id='CardContent'>
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