import { 
  Box, 
  Grid, 
  Typography 
} from "@mui/material";
import Sidebar from "../../Sidebar";
import CardItem from "../../Card";

const Home = () => {
  return (
    <>
      <Sidebar>
        <Box>
        <Typography variant="h5" gutterBottom id='TypographyTitle'>
          Álbuns populares        
        </Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <CardItem 
              image={"https://i.scdn.co/image/ab67706c0000da84dd2105276d0026eb209244e4"}
              title={'Barões da Pis...'}
              description={'Barões da Pisadinha 2024...'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <CardItem 
              image={"https://i.scdn.co/image/ab67706c0000da84dd2105276d0026eb209244e4"}
              title={'Barões da Pis...'}
              description={'Barões da Pisadinha 2024...'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <CardItem 
              image={"https://i.scdn.co/image/ab67706c0000da84dd2105276d0026eb209244e4"}
              title={'Barões da Pis...'}
              description={'Barões da Pisadinha 2024...'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <CardItem 
              image={"https://i.scdn.co/image/ab67706c0000da84dd2105276d0026eb209244e4"}
              title={'Barões da Pis...'}
              description={'Barões da Pisadinha 2024...'}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2}>
            <CardItem 
              image={"https://i.scdn.co/image/ab67706c0000da84dd2105276d0026eb209244e4"}
              title={'Barões da Pis...'}
              description={'Barões da Pisadinha 2024...'}
            />
          </Grid>
        </Grid>
      </Sidebar>
    </>
  )
}

export default Home;