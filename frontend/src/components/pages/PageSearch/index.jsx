import React, { useState } from 'react'; 
import { 
  Grid
} from "@mui/material";
import FormSearch from "../../FormSearch";
import Card from "../../Card";
import CardRounded from "../../CardRounded";
import { search } from '../../../services/api.js'
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./style.css"

const PageSearch = () => {
  const [ query, setQuery ] = useState('');
  const [ searchType, setSearchType ] = useState('');
  const [ results, setResults ] = useState([]);

  const handleSearch = async () => {
    try {

      if(searchType === 'artist,album,playlist,track') {
        /*Aqui fica a pesquisa geral*/
        console.log('Está pesquisando tudo')
        const response = await search(query, 'artist,album,playlist,track')
        setResults(response)
        console.log(response)
      }
      else {
        /*Aqui fica a pesquisa por alguma das categorias*/
        console.log('Está pesquisando alguma categoria')
        const response = await search(query, searchType)
        setResults(response)
        console.log(response)
      }
      
    } catch (error) {
      console.error(`Erro ao pesquisar: `);
    }
  }

  const handleTypeChange = (type) => {
    setSearchType(type);
    console.log(searchType)
  }
  
  return (
    <>
      <div className="ms-sm-0 ms-md-0 ms-lg-4 mt-5">
        <Grid
          className="
            d-flex justify-content-center 
            justify-content-sm-center 
            justify-content-md-center 
            justify-content-lg-start
            flex-column
            flex-sm-row
            flex-md-row
            flex-lg-row
            align-items-center
          "
          container spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item lg={2}>
            <FormSearch 
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button type='submit' onClick={handleSearch}>Pesquisar</button>
            <br />
            
          </Grid>
        </Grid>
      </div>

      <div className="ms-sm-0 ms-md-0 ms-lg-4 mt-3">
        <Grid
          className="
            d-flex justify-content-center 
            justify-content-sm-center 
            justify-content-md-center 
            justify-content-lg-start
            flex-column
            flex-sm-row
            flex-md-row
            flex-lg-row
            align-items-center
          "
          container spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item lg={2}>
            <div className="Container_buttons">
              <button className="active" onClick={() => handleTypeChange('artist,album,playlist,track')}>Tudo</button>
              <button onClick={() => handleTypeChange('artist')}>Artistas</button>
              <button onClick={() => handleTypeChange('playlist')}>Playlists</button>
              <button onClick={() => handleTypeChange('track')}>Músicas</button>
              <button onClick={() => handleTypeChange('album')}>Álbuns</button>
            </div>
          </Grid>
        </Grid>
      </div>
        
      <div className="ms-sm-0 ms-md-0 ms-lg-4 mt-5">
        <div id="Title" className="fw-bold h3 text-center text-sm-center text-md-center text-lg-start">
          Artistas
        </div>
        
        <Grid 
          className="
            d-flex justify-content-center 
            justify-content-sm-center 
            justify-content-md-center 
            justify-content-lg-start
            flex-column
            flex-sm-row
            flex-md-row
            flex-lg-row
            align-items-center
          " 
            container spacing={{ xs: 2, md: 3 }} 
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
          <Grid item lg={2}>
            <CardRounded
              image={"https://i.scdn.co/image/df73c0cebe56cafe705ffdba5085ccbd5680bd16"}
              title={'50 Cent'}
              description={'Artista'}
            />
          </Grid>
          <Grid item lg={2}>
            <CardRounded
              image={"https://i.scdn.co/image/ab676161000051749a398209a4ef3360dce2dec4"}
              title={'Snoop Dogg'}
              description={'Artista'}
            />
          </Grid>

          <Grid item lg={2}>
            <CardRounded
              image={"https://i.scdn.co/image/ab67616100005174a00b11c129b27a88fc72f36b"}
              title={'Eminem'}
              description={'Artista'}
            />
          </Grid>
        </Grid>
      </div> 

      <div className="ms-sm-0 ms-md-0 ms-lg-4 mt-5">
        <div id="Title" className="fw-bold h3 text-center text-sm-center text-md-center text-lg-start">
          Albuns
        </div>

        <Grid 
          className="
            d-flex justify-content-center 
            justify-content-sm-center 
            justify-content-md-center 
            justify-content-lg-start
            flex-column
            flex-sm-row
            flex-md-row
            flex-lg-row
            align-items-center
          " 
            container spacing={{ xs: 2, md: 3 }} 
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
          <Grid item lg={2}>
            <Card
              image={"https://i.scdn.co/image/ab67616d00001e02d843fabb75fef14010e30cae"}
              title={'Get Rich Or Die Tryin'}
              description={'2003 . 50 Cent'}
            />
          </Grid>
          <Grid item lg={2}>
            <Card
              image={"https://i.scdn.co/image/ab67616d00001e0291f7222996c531b981e7bb3d"}
              title={'The Massacre'}
              description={'2005 . 50 Cent'}
            />
          </Grid>

          <Grid item lg={2}>
            <Card
              image={"https://i.scdn.co/image/ab67616d00001e02f4f2ccbae0c1905fcaf75b77"}
              title={'Barões da Pis...'}
              description={'2017 . 50 Cent'}
            />
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default PageSearch;