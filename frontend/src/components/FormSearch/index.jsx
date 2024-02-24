import SearchIcon from '@mui/icons-material/Search';
import './formsearch.css';

const FormSearch = ({ value, onChange }) => {
  return (
    <>      
      <div>
        <SearchIcon id='SearchIconForm' />
        <input 
          type="text" 
          placeholder="O que você quer ouvir ?" 
          id="inputform" 
          value={value} 
          onChange={onChange}
        />
      </div>          
    </>
  )
}

export default FormSearch;