import SearchIcon from '@mui/icons-material/Search';
import './formsearch.css';

const FormSearch = ({ value }) => {
  return (
    <>      
      <div>
        <SearchIcon id='SearchIconForm' />
        <input type="text" placeholder="O que você quer ouvir ?" name="" id="inputform" value={value} />
      </div>          
    </>
  )
}

export default FormSearch;