import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import Sidebar from "../../Sidebar";
import './pagedetails.css'

const PageDetails = () => {
  return (
    <>
      <Sidebar>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div id="Container">
              
              <div id="ContainerCard">
                <Grid item xs={10} sm={4} md={3} lg={2}>
                  <div id="ContainerImage">
                    <Card>
                      <CardMedia
                        component="img"
                        image={"https://i.scdn.co/image/ab67706c0000da84dd2105276d0026eb209244e4"}
                      />
                    </Card>
                  </div>
                </Grid>
                
                <Grid item xs={10} sm={8} md={10} lg={8}>
                  <div id="ContainerDescription">
                  <Typography variant="p" gutterBottom>
                    Playlist     
                  </Typography>
                  <Typography variant="h4" gutterBottom>
                    Barões da Pisadinha - As Melhores 💥 Os Barões da Pisadinha 2024       
                  </Typography>
                  <Typography variant="p" gutterBottom>
                    Barões da Pisadinha 2024 Playlist 🔥 Atualizado! Ouça os maiores sucessos de
                    Os Barões da Pisadinha ! Tadalafila, Recairei, Esquema Preferido, Basta Você Me Ligar, Tá Rocheda, Zero Saudade e mais!       
                  </Typography>
                  </div>
                </Grid>
              </div>
              
            </div>
          </Grid>
        </Grid>
      </Sidebar>
    </>
  )
}

export default PageDetails;