//import CodeInput from './CodeInput'
import CodeInput from "./AceEditor";
import React, { useState, useEffect } from "react";
import Output from "./Output";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import Box from '@mui/material/Box';
import Navigation from "./Navigation";
import PreviewIcon from '@mui/icons-material/Preview';
import style from "./editor.module.css"
import Alert from '@mui/material/Alert';
import Mobileeditor from "./editormobile"
// import {isAuthenticated} from '../auth/Helpers';
import { useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
const Project = (props) => {
  const [jsCode, setjsCode] = useState(" ");
  const [htmlCode, sethtmlCode] = useState("    <h1 class='welcome'>welcome to ACM</h1><p class='welcome'>Note : Please Give space in each editor before you start</p>");
  const [cssCode, setcssCode] = useState(".welcome { color: rgb(11, 59, 59); background-color: aliceblue; padding: 3rem;  display:flex ;justify-content: center; } ");
  const [totalCode, settotalCode] = useState("");
  const [fullScreenView, setfullScreenView] = useState(false);
  const [codeMode, setcodeMode] = useState(0);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("dracula");
  const { id } = useParams();
  let token;
  token = localStorage.getItem("accessToken");

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  // useEffect(() => {
  //   token = localStorage.getItem("accessToken");

  //   isAuthenticated();

  //   axios.get('/api/codepen/getProject/' + id, {
  //     "headers": {
  //       "content-type": "application/json",
  //       "Authorization": "Bearer " + token,
  //     },
  //   })
  //     .then((res) => {
  //       setjsCode(res.data.js);
  //       sethtmlCode(res.data.html);
  //       setcssCode(res.data.css);
  //     })
  //     .catch(err => {
  //       window.location.href = '/codepen';
  //     })
  // }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      settotalCode(`
        <html>
          <body>${htmlCode}</body>
          <style>${cssCode}</style>
          <script>${jsCode}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [htmlCode, cssCode, jsCode]);

  const handleSave = () => {
    setOpen(true);
    const params = JSON.stringify({
      html: htmlCode,
      css: cssCode,
      js: jsCode,
      id: id,
    });
    token = localStorage.getItem("accessToken");
    axios
      .post("/api/codepen/saveProject", params, {
        headers: {
          "content-type": "application/json",
          Authorization: "Bearer " + token,
        },
      })
      .then(console.log("saved"))
      .catch((err) => console.error(err));
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handlemyProjects = () => {
    window.location.href = "/codepen/";
  };
  const temp = (value) => {
    console.log(value);
  };
  const handle = useFullScreenHandle();
  return (
<>

      <div id={style.mobile}>

 <Mobileeditor/>
      </div>


  <div id={style.desktop}>
    <div className="Project" style={{ BackgroundImage: "linear-gradient(-45deg,  rgba(90, 209, 240, 1) 0%,  rgba(113, 222, 249, 1) 13%,  rgba(168, 229, 243, 1) 29%,   rgba(110, 241, 252, 0.5) 49%,  rgba(100, 242, 250, 1) 74%,  rgba(113, 222, 249, 1) 94%,  rgb(185, 236, 247) 100%)"}}>
        <Navigation setTheme={setTheme} theme={theme} handleSave={handleSave} fsView={fullScreenView} />

    <Box container spacing={1}>
          {!fullScreenView && (
            <Box  display="grid" gridTemplateColumns="repeat(12, 1fr)" >
            <Box  gridColumn="span 4">
              <CodeInput titles="HTML" language="html" value={htmlCode} save={sethtmlCode} theme={theme} />
            </Box>
            <Box  gridColumn="span 4">
           <CodeInput  titles="CSS" language="css" value={cssCode} save={setcssCode} theme={theme} />
            </Box>
            <Box  gridColumn="span 4">
              <CodeInput  titles="JAVASCRIPT" language="javascript" value={jsCode} save={setjsCode} theme={theme} />
            </Box>
            </Box>
          )}
          <Box
            item
            xs={12}
            md={fullScreenView ? 12 : 6}
            lg={fullScreenView ? 12 : 6}
          >
          <div className=" d-flex justify-content-end mx-4 ">
            <Button className="FullScreenToggle fixed-bottom m-1"  
              onClick={() => {
                setfullScreenView(!fullScreenView);
              }} id={style.buttons}
              variant="outlined"
            >
            <PreviewIcon/>  View
            </Button>
             <Button  id={style.buttons}  className="d-none d-lg-block m-1" size="medium" onClick={handle.enter}><FullscreenIcon/></Button>
              </div>
              <FullScreen handle={handle}>
            <Output code={totalCode} theme={theme}></Output>
             </FullScreen>
          </Box>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert
              onClose={handleClose}
              severity="success"
              sx={{ width: "100%" }}
            >
              Project Saved Succesfully!
            </Alert>
          </Snackbar>
        </Box>

      </div>
      </div>
    </>  );
  };

export default Project;
