import { 
  Box, 
  TextField, 
  InputAdornment, 
  Grid
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './formsearch.css'

const FormSearch = () => {
  return (
    <>
      <Grid container spacing={2} marginBottom={"25px"}>
        <Grid item xs={12} sm={8} md={6} lg={6}>
          <Box sx={{ '& > :not(style)': { m: 1 } }}>
            <TextField
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
        </Grid>
      </Grid>
    </>
  )
}

export default FormSearch;