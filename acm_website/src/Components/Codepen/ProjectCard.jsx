import { Card, CardMedia, CardContent, CardActions, Typography, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import axios from 'axios'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import cardStyle from "./card.module.css";
// import Header1 from "../UI/header/header";
import headerCSS from "../UI/header/header.module.css";
import Footer from "../UI/Footer";
const ProjectCard = (props) => {
  const token = localStorage.getItem("accessToken");
  const handleDelete = (id) => {
    const params = JSON.stringify({
      id: id
    });
    axios
      .post("/api/codepen/deleteProject", params, {
        "headers": {
          "content-type": "application/json",
          "Authorization": "Bearer " + token,
        },
      })
      .then(window.location.reload(true))
      .catch(err => console.error(err));

  }
  const handle = useFullScreenHandle();
  const code = `
    <html>
      <body>${props.htmlCode}</body>
      <style>${props.cssCode}</style>
    </html>
  `;
  return (
    <div>
       {/* <Header1/> */}
       <nav id="mainNavbar" sticky="true" className={`navbar navbar-light navbar-expand-lg py-0 align-items-center pe-5 ${headerCSS.stickyTop}`} >
      <a href="/" className="navbar-brand">
        <img className="d-none d-lg-block ml-3" src="https://drive.google.com/uc?export=view&id=1saqVt7YDhxYcamJFyhAt64elrxJ2DULg" alt="acm" width="250px" />
        <img className="d-sm d-lg-none" src="https://drive.google.com/uc?export=view&id=1saqVt7YDhxYcamJFyhAt64elrxJ2DULg" alt="acm" width="200px" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navLinks" aria-label="Toggle navigation"><span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse d-lg-flex justify-content-lg-end" id="navLinks">
        <ul className={`navbar-nav ${headerCSS.navbarNav}`}>
          <li className={`nav-item mx-auto ${headerCSS.navItem}`}>
            <a href="../#home" className={`nav-link ${headerCSS.navLink}`}>Overview</a>
          </li>
          <li className={`mx-auto ${headerCSS.navItem}`}>
            <a href="/forum" className={`nav-link ${headerCSS.navLink}`}>Discussion Forum</a>
          </li>
          <li className={`mx-auto ${headerCSS.navItem}`}>
            <a href="/problemset" className={`nav-link ${headerCSS.navLink}`}>Problemset</a>
          </li>
          <li className={`mx-auto ${headerCSS.navItem}`}>
            <a href="/complier" className={`nav-link ${headerCSS.navLink}`}>IDE</a>
          </li>
          <li className={`nav-item mx-auto ${headerCSS.navItem}`}>
            <a href="#footer" className={`nav-link ${headerCSS.navLink}`}>Contact</a>
          </li>
        </ul>
      </div>
    </nav >
      <div className={`my-3 text-center ${cardStyle.glitch} ${cardStyle.headingpro}`}>Your projects</div>
    <div class={`row align-items-center mx-auto`} style={{maxWidth:'90%'}}>
    <Card sx={{ maxWidth: 360 }} className={`col-12 col-md-6 col-lg-4 my-4 mx-auto`} style={{backgroundColor:'#555', borderRadius:'10px'}}>
      <FullScreen handle={handle}> 
      <CardMedia
        component="iframe"
        height="160"
        srcDoc={code}
        alt="green iguana"
      />
       </FullScreen>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
      </CardContent>
      <CardActions>
        <div style={{borderTop:'1px solid #bad9d2'}} className='mx-auto ' >
        <Button className="codeMode mx-auto mt-3" size="small">
          <Link to={`/codepen/projects/${props.id}`} variant="danger" style={{color:"#fff"}}>Edit<EditIcon></EditIcon></Link>
        </Button>
        <Button className="mt-3" size="small" style={{color:"#52cbe3"}} variant="danger" onClick={() => handleDelete(props.id)}>Delete
          <DeleteIcon></DeleteIcon>
        </Button>
        
        <Button  className="mt-3" variant="danger" style={{color:"#fff"}} size="medium" onClick={handle.enter}>Full-View<FullscreenIcon/></Button>
        </div>
      </CardActions>
      
    </Card>

    <Card sx={{ maxWidth: 360 }} className={`col-12 col-md-6 col-lg-4 my-4 mx-auto`} style={{backgroundColor:'#555', borderRadius:'10px'}}>
      <FullScreen handle={handle}> 
      <CardMedia
        component="iframe"
        height="160"
        srcDoc={code}
        alt="green iguana"
      />
       </FullScreen>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
      </CardContent>
      <CardActions>
        <div style={{borderTop:'1px solid #bad9d2'}} className='mx-auto ' >
        <Button className="codeMode mx-auto mt-3" size="small">
          <Link to={`/codepen/projects/${props.id}`} variant="danger" style={{color:"#fff"}}>Edit<EditIcon></EditIcon></Link>
        </Button>
        <Button className="mt-3" size="small" style={{color:"#52cbe3"}} variant="danger" onClick={() => handleDelete(props.id)}>Delete
          <DeleteIcon></DeleteIcon>
        </Button>
        
        <Button  className="mt-3" variant="danger" style={{color:"#fff"}} size="medium" onClick={handle.enter}>Full-View<FullscreenIcon/></Button>
        </div>
      </CardActions>
      
    </Card>

    <Card sx={{ maxWidth: 360 }} className={`col-12 col-md-6 col-lg-4 my-4 mx-auto`} style={{backgroundColor:'#555', borderRadius:'10px'}}>
      <FullScreen handle={handle}> 
      <CardMedia
        component="iframe"
        height="160"
        srcDoc={code}
        alt="green iguana"
      />
       </FullScreen>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
      </CardContent>
      <CardActions>
        <div style={{borderTop:'1px solid #bad9d2'}} className='mx-auto ' >
        <Button className="codeMode mx-auto mt-3" size="small">
          <Link to={`/codepen/projects/${props.id}`} variant="danger" style={{color:"#fff"}}>Edit<EditIcon></EditIcon></Link>
        </Button>
        <Button className="mt-3" size="small" style={{color:"#52cbe3"}} variant="danger" onClick={() => handleDelete(props.id)}>Delete
          <DeleteIcon></DeleteIcon>
        </Button>
        
        <Button  className="mt-3" variant="danger" style={{color:"#fff"}} size="medium" onClick={handle.enter}>Full-View<FullscreenIcon/></Button>
        </div>
      </CardActions>
      
    </Card>


    

    </div>

    <div id='footer'><Footer/></div>


    </div>
  );
}

export default ProjectCard;