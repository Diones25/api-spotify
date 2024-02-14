import { 
  Box, 
  Grid, 
  Typography
} from "@mui/material";
import Sidebar from "../../Sidebar";
import FormSearch from "../../FormSearch";
import CardCategory from "../../CardCategory";



const PageSearch = () => {
  return (
    <>
      <Sidebar>        
      <FormSearch />
        <Box>
          <Typography variant="h5" gutterBottom id='TypographyTitle'>
            Navegar por todas as seções
          </Typography>
        </Box>
        <div style={{ marginTop: '25px' }}>
          <Grid container spacing={2} columns={18}>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <CardCategory 
                image={"https://t.scdn.co/images/8e6eaf8b5c9449fdbb689a4fdace1f25.jpeg"}
                title={'Sertanejo'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <CardCategory 
                image={"https://t.scdn.co/images/8e6eaf8b5c9449fdbb689a4fdace1f25.jpeg"}
                title={'Sertanejo'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <CardCategory 
                image={"https://t.scdn.co/images/8e6eaf8b5c9449fdbb689a4fdace1f25.jpeg"}
                title={'Sertanejo'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <CardCategory 
                image={"https://t.scdn.co/images/8e6eaf8b5c9449fdbb689a4fdace1f25.jpeg"}
                title={'Sertanejo'}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={3} lg={2}>
              <CardCategory 
                image={"https://t.scdn.co/images/8e6eaf8b5c9449fdbb689a4fdace1f25.jpeg"}
                title={'Sertanejo'}
              />
            </Grid>
          </Grid> 
        </div>
      </Sidebar>
    </>
  )
}

export default PageSearch;