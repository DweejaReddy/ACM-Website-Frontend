//import CodeInput from './CodeInput'
import CodeInput from "./AceEditor";
import React, { useState, useEffect } from "react";
import Output from "./Output";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import axios from "axios";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
// import {isAuthenticated} from '../auth/Helpers';
import { useParams } from "react-router-dom";
import SaveIcon from '@mui/icons-material/Save';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
const Mobileeditor = (props) => {
  const [jsCode, setjsCode] = useState(" ");
  const [htmlCode, sethtmlCode] = useState("    <h1 class='welcome'>welcome to ACM</h1><p class='welcome'>Note : Please Give space in each editor before you scart</p>");
  const [cssCode, setcssCode] = useState(".welcome { color: rgb(11, 59, 59); background-color: aliceblue; padding: 3rem; } ");
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
  return (
    <div className="Project">
      <Grid container spacing={2}>
        {!fullScreenView && (
          <Grid item xs={12} md={6} lg={6}>
            <Button size="small"
              disabled={codeMode === 0}
              className={
                codeMode === 0 ? "codeMode-active" : "codeMode-inactive"
              }
              onClick={() => {
                setcodeMode(0);
              }}
              variant="outlined"
            >
              <HtmlIcon/>
            </Button>
            <Button  color="primary"
              disabled={codeMode === 1}
              className={
                codeMode === 1 ? "codeMode-active" : "codeMode-inactive"
              }
              onClick={() => {
                setcodeMode(1);
              }}
              variant="outlined"
            >
              <CssIcon/>
            </Button>
            <Button  color="primary"
              disabled={codeMode === 2}
              className={
                codeMode === 2 ? "codeMode-active" : "codeMode-inactive"
              }
              onClick={() => {
                setcodeMode(2);
              }}
              variant="outlined"
            >
              <JavascriptIcon/>
            </Button>
            <Button color="primary"
              className="FullScreenToggle"
              onClick={() => {
                handlemyProjects();
              }}
              variant="outlined"
            >
              My Projects
            </Button>
            <Button size="small"
              className="FullScreenToggle"
              onClick={() => {
                handleSave();
              }}
              variant="outlined"
            >
              <SaveIcon/>
            </Button>
            {codeMode === 0 && (
              <CodeInput
                titles="HTML"
                language="html"
                value={htmlCode}
                save={sethtmlCode}
                setTheme={setTheme}
                theme={theme}
              ></CodeInput>
            )}
            {codeMode === 1 && (
              <CodeInput
                titles="CSS"
                language="css"
                value={cssCode}
                save={setcssCode}
                setTheme={setTheme}
                theme={theme}
              ></CodeInput>
            )}
            {codeMode === 2 && (
              <CodeInput
                titles="JAVASCRIPT"
                language="javascript"
                value={jsCode}
                save={setjsCode}
                setTheme={setTheme}
                theme={theme}
              ></CodeInput>
            )}
          </Grid>
        )}
        <Grid
          item
          xs={12}
          md={fullScreenView ? 12 : 6}
          lg={fullScreenView ? 12 : 6}
        >
          <Button
            className="FullScreenToggle"
            onClick={() => {
              setfullScreenView(!fullScreenView);
            }}
            variant="outlined"
          >
            View
          </Button>


          <Output  code={totalCode}></Output>
        </Grid>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Project Saved Succesfully!
          </Alert>
        </Snackbar>
      </Grid>
    </div>
  );
};

export default Mobileeditor;
