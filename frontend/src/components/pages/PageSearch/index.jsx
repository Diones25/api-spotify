import React, { useState } from 'react'; 
import { 
  Grid
} from "@mui/material";
import FormSearch from "../../FormSearch";
import Card from "../../Card";
import CardRounded from "../../CardRounded";
import { search } from '../../../services/api.js';
import image_notFound from '../../../assets/img/image_notFound.jpg';
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

          {query &&
            <Grid item lg={2}>
              <div className="Container_buttons">
                <button className="active" onClick={() => handleTypeChange('artist,album,playlist,track')}>Tudo</button>
                <button onClick={() => handleTypeChange('artist')}>Artistas</button>
                <button onClick={() => handleTypeChange('playlist')}>Playlists</button>
                <button onClick={() => handleTypeChange('track')}>Músicas</button>
                <button onClick={() => handleTypeChange('album')}>Álbuns</button>
              </div>
            </Grid>          
          }
        </Grid>
      </div>     

      {/*Colocar um loading enquando as mucias carregam*/}
      {results && results.tracks && (
        <div className="ms-sm-0 ms-md-0 ms-lg-4 mt-5">
          <div id="Title" className="fw-bold h3 text-center text-sm-center text-md-center text-lg-start">
            Musicas
          </div>
          
          <div className="container-fluid d-flex flex-column">
            <div className="row">
              <div className="col-md-12 col-lg-12">
          
                {results.tracks.items.map((track) => (
                  <div className="col-md-6">
                    
                    <iframe 
                      style={{ borderRadius: "12px" }} 
                      src={`https://open.spotify.com/embed/track/${track.id}?utm_source=generator&theme=0`} 
                      width="100%" 
                      height="152" 
                      frameBorder="0" 
                      allowfullscreen="" 
                      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture;" 
                      loading="lazy">
                    </iframe>
                  </div>
                ))}            
              </div>
            </div>                    
          </div>
        </div>           
      )}
        
      <div className="ms-sm-0 ms-md-0 ms-lg-4 mt-5">
        {results && searchType === 'artist'&& results.length > 0 &&(
          <>                                   
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
              {results.map((artist) => (                  
                <Grid item lg={2} key={artist.id}>
                  <CardRounded                    
                    image={artist.image ? artist.image : image_notFound}
                    title={artist.name}
                    description={ artist.type ? 'Artista' : '' }
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </div> 

      <div className="ms-sm-0 ms-md-0 ms-lg-4 mt-5">
        {results && searchType === 'album'&& results.length > 0 &&(
          <>
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
                {results.map((album) => (
                  <Grid item lg={2}>
                    <Card
                      image={album.image ? album.image : image_notFound}
                      title={album.name}
                      description={album.type ? 'Album' : ''}
                    />
                  </Grid>
                ))}
            </Grid>
          
          </>
        )}
      </div>

      <div className="ms-sm-0 ms-md-0 ms-lg-4 mt-5">
        {results && searchType === 'playlist'&& results.length > 0 &&(
          <>
            <div id="Title" className="fw-bold h3 text-center text-sm-center text-md-center text-lg-start">
              Playlists
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
              {results.map((playlist) => (
                <Grid item lg={2}>
                  <Card
                    image={playlist.image ? playlist.image : image_notFound}
                    title={playlist.name}
                    description={playlist.type ? 'Playlist' : ''}
                  />
                </Grid>
              ))}
            </Grid>
          </>
        )}
      </div>
    </>
  )
}

export default PageSearch;