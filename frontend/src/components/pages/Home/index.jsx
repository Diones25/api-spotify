import { 
  Box, 
  Container, 
  Grid, 
  Typography 
} from "@mui/material";
import Sidebar from "../../Sidebar";
import CardArtist from "../../CardArtist";
import CardPlaylist from "../../CardPlaylist";
import './style.css'

import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  return (
    <>
      <Sidebar>
        <Grid container spacing={2}>
          <Grid item md={12} lg={12}>
            <div className="Container pb-4">
              <div className="ms-sm-0 ms-md-0 ms-lg-4 d-flex align-items-center flex-column flex-sm-column flex-md-column py-5 py-sm-5 py-md-5 text-md-center flex-lg-row">
                <div className="Container_image">
                  <img 
                    src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2786728538107328&height=300&width=300&ext=1710794274&hash=Afow1tfCCYdoMol1tApNwSve9Zhk3n7FhcPAM7QS6GvLEA" 
                    alt="" 
                  />
                </div>
                <div className="ms-0 ms-sm-0 ms-md-0 ms-lg-4">
                  <div className="text-center text-sm-center text-md-center text-lg-start mt-4 mt-sm-4 mt-md-4">Perfil</div>
                  <div className="fw-bold h1 display-1">
                    Diones Pereira
                  </div> 
                  <div className="text-center text-sm-center text-md-center text-lg-start">1 playlist pública</div>                
                </div>
              </div>

              <div className="ms-sm-0 ms-md-0 ms-lg-4">
                <div className="fw-bold h3 text-center text-sm-center text-md-center text-lg-start">
                  Artistas mais tocados este mês
                </div> 
                <div className="subtitle text-center text-sm-center text-md-center text-lg-start mb-2">
                  Artistas mais tocados este mês
                </div>

                <Grid className="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item lg={2}>
                    <CardArtist
                      className='ContainerImg'
                      image={"https://i.scdn.co/image/ab67706c0000da84dd2105276d0026eb209244e4"}
                      title={'Barões da Pis...'}
                      description={'Artista'}
                    />
                  </Grid>
                  <Grid item lg={2}>
                    <CardArtist
                      image={"https://i.scdn.co/image/df73c0cebe56cafe705ffdba5085ccbd5680bd16"}
                      title={'Barões da Pis...'}
                      description={'Artista'}
                    />
                  </Grid>
                </Grid>
              </div>

              <div className="ms-sm-0 ms-md-0 ms-lg-4 mt-5">
                <div className="fw-bold h3 text-center text-sm-center text-md-center text-lg-start">
                  Músicas mais tocadas este mês
                </div>
                <div className="subtitle text-center text-sm-center text-md-center text-lg-start mb-2">
                  Visíveis apenas para você
                </div>

                <Container maxWidth="xxl">
                  <iframe
                    style={{ borderRadius: '12px' }}
                    src="https://open.spotify.com/embed/track/2JTir3y1VuJQmexiTCMcTP?utm_source=generator&theme=0"
                    width="100%"
                    height="152"
                    frameBorder="0"
                    allowfullscreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy">
                  </iframe>
                </Container>
              </div>

              <div className="ms-sm-0 ms-md-0 ms-lg-4 mt-5 pb-5">
                <div className="fw-bold h3 text-center text-sm-center text-md-center text-lg-start">
                  Playlists públicas
                </div>
                <Grid className="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                  <Grid item lg={2}>
                    <CardPlaylist
                      style={{ with:  '169px', height: '169px' }}
                      image={"https://mosaic.scdn.co/300/ab67616d00001e020394a52f692fc791ae423b2dab67616d00001e02858cbd4e511749d933554ebbab67616d00001e0290ef169a80af9f3d8377c1b8ab67616d00001e02beab1b8ce544dc064445b2c4"}
                      title={'Barões da Pisadinha'}
                      description={'De Diones Pereira'}
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
          
        </Grid>
      </Sidebar>
    </>
  )
}

export default Home;