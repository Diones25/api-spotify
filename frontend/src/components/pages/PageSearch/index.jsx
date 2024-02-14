import { 
  Box, 
  Typography
} from "@mui/material";
import Sidebar from "../../Sidebar";
import FormSearch from "../../FormSearch";


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
      </Sidebar>
    </>
  )
}

export default PageSearch;