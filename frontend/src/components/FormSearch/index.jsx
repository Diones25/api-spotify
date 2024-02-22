import { 
  TextField, 
  InputAdornment
} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import './formsearch.css';

const FormSearch = () => {
  return (
    <>      
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
    </>
  )
}

export default FormSearch;