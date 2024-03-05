import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
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
      const response = await search(query, searchType)
      setResults(response)            
    } catch (error) {
      console.error(`Erro ao pesquisar: `);
    }
  }

  const handleTypeChange = (type) => {
    setSearchType(type);
  }

  const handleInputChange = async (e) => {
    setQuery(e.target.value)
    handleTypeChange('artist,album,playlist,track')
  }
  
  return (
    <>
      <div className="ms-sm-0 ms-md-0 ms-lg-4 mt-5">
        <Grid
          className="
            d-flex 
            justify-content-center 
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
            <div className='
              d-flex flex-column
              flex-sm-row
              flex-md-row
              flex-lg-row'
            > 
              <FormSearch 
                value={query}
                onChange={handleInputChange}
              />
              <button 
                type='submit' 
                className='mt-3 mt-sm-0 mt-md-0 mt-lg-0' 
                id='buttonSearch' 
                onClick={handleSearch}
              >Pesquisar</button>            
            </div>
          </Grid>
        </Grid>
      </div>

      <div className="ms-sm-0 ms-md-0 ms-lg-4 mt-3">
        <Grid
          className="
            d-flex justify-content-center 
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
                      title={track.name}
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
        
      {results && results.artists && (
        <div className="ms-sm-0 ms-md-0 ms-lg-4 mt-5">
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
                {results.artists.items.map((artist) => (                  
                  <Grid item lg={2} key={artist.id}>
                    <Link id='Link' to={`/artist/${artist.id}`}>
                      <CardRounded                    
                        image={artist.images.filter(image => image.width === 640).map(image => image.url).toString() ? artist.images.filter(image => image.width === 640).map(image => image.url).toString() : image_notFound}
                        title={artist.name.length >= 16 ? `${artist.name.substr(0, 16)}...` : artist.name}
                        description={ artist.type ? 'Artista' : '' }
                      />
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </>
        </div> 
      )}

      {results && results.albums && (
        <div className="ms-sm-0 ms-md-0 ms-lg-4 mt-5">
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
                  {results.albums.items.map((album) => (
                    <Grid item lg={2}>
                      <Link id='Link' to={`/album/${album.id}`}>
                        <Card
                          image={album.images.filter(image => image.width === 640).map(image => image.url).toString() ? album.images.filter(image => image.width === 640).map(image => image.url).toString() : image_notFound}
                          title={album.name.length >= 16 ? `${album.name.substr(0, 16)}...` : album.name}
                          description={album.type ? 'Album' : ''}
                        />
                      </Link>
                    </Grid>
                  ))}
              </Grid>
            
            </>
        </div>
      )}

      {results && results.playlists && (
        <div className="ms-sm-0 ms-md-0 ms-lg-4 mt-5">
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
                {results.playlists.items.map((playlist) => (
                  <Grid item lg={2}>
                    <Link id='Link' to={`/playlist/${playlist.id}`}>
                      <Card
                        image={playlist.images.filter(image => image.width === 640).map(image => image.url).toString() ? playlist.images.filter(image => image.width === 640).map(image => image.url).toString() : image_notFound}
                        title={playlist.name.length >= 16 ? `${playlist.name.substr(0, 16)}...` : playlist.name}
                        description={playlist.type ? 'Playlist' : ''}
                      />                      
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </>
        </div>
      )}
    </>
  )
}

export default PageSearch;