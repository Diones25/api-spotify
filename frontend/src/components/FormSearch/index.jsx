import { 
  Box, 
  TextField, 
  InputAdornment, 
  Grid
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import Card from "../Card";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import './formsearch.css';

const FormSearch = () => {
  return (
    <>
      <Grid container spacing={2} marginBottom={"25px"}>
        <Grid item xs={12} sm={8} md={6} lg={6}>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <TextField
              id="TextField"
              placeholder="O que você quer ouvir ?"
              InputProps={
                {
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon id='SearchIconForm' />
                    </InputAdornment>
                  ),
                }
              }
              variant="outlined"
            />
          </Box> 

          <div className="ms-sm-0 ms-md-0 ms-lg-4">
            <div className="fw-bold h3 text-center text-sm-center text-md-center text-lg-start">
              Artistas mais tocados este mês
            </div>

            <Grid className="d-flex justify-content-center justify-content-sm-center justify-content-md-center justify-content-lg-start" container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
              <Grid item lg={2}>
                <Card
                  image={"https://i.scdn.co/image/ab67706c0000da84dd2105276d0026eb209244e4"}
                  title={'Barões da Pis...'}
                  description={'Artista'}
                />
              </Grid>
              <Grid item lg={2}>
                <Card
                  image={"https://i.scdn.co/image/ab67706c0000da84dd2105276d0026eb209244e4"}
                  title={'Barões da Pis...'}
                  description={'Artista'}
                />
              </Grid>

              <Grid item lg={2}>
                <Card
                  image={"https://i.scdn.co/image/ab67706c0000da84dd2105276d0026eb209244e4"}
                  title={'Barões da Pis...'}
                  description={'Artista'}
                />
              </Grid>
            </Grid>
          </div>

        </Grid>
      </Grid>
    </>
  )
}

export default FormSearch;