import { 
  Box, 
  Grid, 
  Typography 
} from "@mui/material";
import Sidebar from "../../Sidebar";
import CardItem from "../../Card";
import './style.css'

import '/node_modules/bootstrap/dist/css/bootstrap.min.css'

const Home = () => {
  return (
    <>
      <Sidebar>
        <Grid container spacing={2}>
          <Grid item md={12} lg={12}>
            <div className="Container">
              <div className="ms-sm-0 ms-md-0 ms-lg-4 d-flex align-items-center flex-column flex-sm-column flex-md-column py-5 py-sm-5 py-md-5 text-md-center flex-lg-row">
                <div className="Container_image">
                  <img 
                    src="https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2786728538107328&height=300&width=300&ext=1710794274&hash=Afow1tfCCYdoMol1tApNwSve9Zhk3n7FhcPAM7QS6GvLEA" 
                    alt="" 
                  />
                </div>
                <div className="ms-0 ms-sm-0 ms-md-0 ms-lg-4">
                  <div className="text-center text-sm-center text-md-center text-lg-start mt-4 mt-sm-4 mt-md-4">Perfil</div>
                  <div className="fw-bold h1 display-1">
                    Diones Pereira
                  </div> 
                  <div className="text-center text-sm-center text-md-center text-lg-start">1 playlist pública</div>                
                </div>
              </div>

              <div className="ms-sm-0 ms-md-0 ms-lg-4 bg-white">
                ...
              </div>
            </div>
          </Grid>
          
        </Grid>
      </Sidebar>
    </>
  )
}

export default Home;