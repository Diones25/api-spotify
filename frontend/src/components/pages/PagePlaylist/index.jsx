import {  Grid } from "@mui/material";
import Sidebar from "../../Sidebar";
import './styles.css';

const PagePlaylist = () => {
  return (
    <>
      <Sidebar>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <div id="Container">
              <iframe
                title="Spotify"
                className="SpotifyPlayer"
                src="https://embed.spotify.com/?uri=spotify:playlist:3s6pzAP2AsaWIHcpSatR3c&view=list&theme=black"
                width="100%"
                height="100%"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy">
              </iframe>
            </div>            
          </Grid>
        </Grid>
      </Sidebar>
    </>
  )
}

export default PagePlaylist;