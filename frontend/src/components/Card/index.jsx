import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import './card.css'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardItem = ({ image, title, description }) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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