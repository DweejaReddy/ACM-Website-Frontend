import { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import ProjectCard from "./ProjectCard";
// import axios from "axios";
// import { useParams } from "react-router";
import NavBar2 from "../Codepen/Navbar2";
import homeStyle from "./home.module.css";
import { Link } from "react-router-dom";
import headerCSS from "../UI/header/header.module.css";


const HomeScreen = () => {
  let username = null;
  const [projects, setProjects] = useState([]);

  // const Header = () => {
  //   const user = useSelector(selectUser);
  //   const dispatch = useDispatch();
  //   const logOut = () => {
  //     dispatch(logout());
  //   };

  // useEffect(() => {
  //   const token = localStorage.getItem("accessToken");
  //   axios.get('/api/codepen/getAllProjects', {
  //     "headers": {
  //       "content-type": "application/json",
  //       "Authorization": "Bearer " + token,
  //     },
  //   })
  //     .then((res) => {
  //       setProjects(res.data);
  //       console.log(res.data[0]);
  //       if(res.data[0] !== undefined){
  //         username = res.data[0].owner;
  //       }
  //     })
  //     .catch(err => {
  //       console.error(err);
  //       window.location.href = '/login';
  //     });
  // }, [])

  return (
    <div>
      <div className="DisplayCards">
        <Grid container spacing={3}>
          {projects.length !== 0 ? (
            projects.map((project) => {
              return (
                <Grid key={project._id} item xs={12} lg={4} md={6}>
                  <ProjectCard
                    user={username}
                    name={project.name}
                    htmlCode={project.html}
                    cssCode={project.css}
                    id={project._id.toString()}
                  ></ProjectCard>
                </Grid>
              );
            })
          ) : (
            <div>
              
              <div className={`${homeStyle.Nav}`}>
              
        <div
          className={`${homeStyle.bg} ${homeStyle.design} d-flex align-items-center justify-content-center mx-auto row`}
        >
          <div className="col-12 col-lg-6">
            <iframe
              className="d-none d-lg-block"
              style={{
                marginTop: "-40px",
                pointerEvents: "none",
                height: "40vh",
                width: "40vw",
              }}
              src="https://embed.lottiefiles.com/animation/90753"
            ></iframe>

            <iframe
              className="d-block d-lg-none"
              style={{ width: "100%", height: "100%", pointerEvents: "none" }}
              src="https://embed.lottiefiles.com/animation/90753"
            ></iframe>
          </div>

          <div className="col-12 col-md-6" style={{marginTop:'-80px'}}>
            <h3 className={`${homeStyle.text}`}>
              Hey, No Projects! Create one now and improve your frontend
              Skills!!
            </h3>
            <NavBar2/>
          </div>
        </div>
      </div>
            </div>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default HomeScreen;
