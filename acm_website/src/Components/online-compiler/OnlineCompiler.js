import axios from "axios";
// import "./App.css";
import stubs from "./stubs";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import moment from "moment";
import AceEditor from "react-ace";
import { styled } from "@mui/material/styles";
import MuiAccordion from "@mui/material/Accordion";
import KeyboardDoubleArrowDownSharpIcon from "@mui/icons-material/KeyboardDoubleArrowDownSharp";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import Preloader from "./preloader";
// import brace from "brace";
//languages
import "brace/mode/javascript";
import "brace/mode/c_cpp";
import "brace/mode/python";
import "brace/mode/java";
//editor themes
import "brace/theme/monokai";
import "brace/theme/dracula";
import "brace/theme/xcode";
import "brace/theme/eclipse";
import "brace/theme/terminal";
import "brace/theme/twilight";
import "brace/theme/github";

import "ace-builds/src-noconflict/ext-language_tools";

//Styling using MAterial UI

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import Backdrop from "@mui/material/Backdrop";
import ButtonGroup from "@mui/material/ButtonGroup";
import CircularProgress from "@mui/material/CircularProgress";
import ClearAllIcon from '@mui/icons-material/ClearAll';
import CopyAllIcon from '@mui/icons-material/CopyAll';
// const Item = styled(Paper)(({theme}) => ({
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: "center",
//     color: theme.palette.text.secondary,
// }));
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PublishIcon from '@mui/icons-material/Publish';
import InputIcon from '@mui/icons-material/Input';
import { VscOutput } from "react-icons/vsc";
import { FullScreen, useFullScreenHandle } from "react-full-screen";


const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  "&:not(:last-child)": {
    borderBottom: 0,
  },
  "&:before": {
    display: "none",
  },
}));
const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <KeyboardDoubleArrowDownSharpIcon
        sx={{ fontSize: "2rem", color: "red" }}
      />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "dark"
      ? "rgba(255, 255, 255, .05)"
      : "rgba(0, 0, 0, .03)",
  flexDirection: "row-reverse",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(90deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

function OnlineCompiler() {
  let params = useParams();

  const [code, setCode] = useState("");
  const [output, setOutput] = useState("");
  const [input, setInput] = useState("");
  const [language, setLanguage] = useState("cpp");
  const [langForEditor, setLangForEditor] = useState("c_cpp");
  const [theme, setTheme] = useState("dracula");
  const [jobId, setJobId] = useState(null);
  const [status, setStatus] = useState(null);
  const [jobDetails, setJobDetails] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const [expanded, setExpanded] = React.useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  const Function1 = () => {
    let x = document.getElementById("input");
    let y = document.getElementById("output");
    let a = document.getElementById("btn1");
    let b = document.getElementById("btn2");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.style.display = "none";
    }
    a.style.backgroundColor = "#f54242";
    a.style.color = "black";
    b.style.backgroundColor = "#1976d2";
    b.style.color = "white";
  };

  const Function2 = () => {
    let z = document.getElementById("output");
    let w = document.getElementById("input");
    let c = document.getElementById("btn2");
    let d = document.getElementById("btn1");
    if (z.style.display === "none") {
      z.style.display = "block";
      w.style.display = "none";
    }
    c.style.backgroundColor = "#f54242";
    c.style.color = "black";
    d.style.backgroundColor = "#1976d2";
    d.style.color = "white";
  };

  useEffect(() => {
    setCode(stubs[language]);
  }, [language]);

  useEffect(() => {
    const defaultLang = localStorage.getItem("default-language") || "cpp";
    setLanguage(defaultLang);
  }, []);

  let pollInterval;

  const handleSubmit = async () => {
    const payload = {
      language,
      code,
      input,
      probID: params.id,
    };
    try {
      setOutput("");
      setStatus(null);
      setJobId(null);
      setJobDetails(null);
      setIsLoading(true);
      const { data } = await axios.post("/api/compiler/run", payload);
      if (data.jobId) {
        setJobId(data.jobId);
        setStatus("Submitted.");

        // poll here
        pollInterval = setInterval(async () => {
          const { data: statusRes } = await axios.get(`/api/compiler/status`, {
            params: {
              id: data.jobId,
            },
          });
          const { success, job, error } = statusRes;
          console.log(statusRes);
          if (success) {
            const { status: jobStatus, output: jobOutput } = job;
            setStatus(jobStatus);
            setJobDetails(job);
            if (jobStatus === "pending") return;
            jobStatus === "error"
              ? setOutput(
                  jobOutput
                    .substring(1, jobOutput.length - 1)
                    .replaceAll(/\\n/g, "\n")
                )
              : setOutput(jobOutput);
            clearInterval(pollInterval);
            setIsLoading(false);
          } else {
            console.error(error);
            setOutput(error);
            setStatus("Bad request");
            clearInterval(pollInterval);
            setIsLoading(false);
          }
        }, 1000);
      } else {
        setOutput("Retry again.");
        setIsLoading(false);
      }
    } catch ({ response }) {
      if (response) {
        const errMsg = response.data.err.stderr;
        setOutput(errMsg);
      } else {
        setOutput("Please retry submitting.");
      }
      setIsLoading(false);
    }
  };

  const setDefaultLanguage = () => {
    localStorage.setItem("default-language", language);
    console.log(`${language} set as default!`);
  };

  const handleClearInput = (event) => {
    setInput("");
  };

  const renderTimeDetails = () => {
    if (!jobDetails) {
      return "";
    }
    let { submittedAt, executionTime } = jobDetails;
    let result = "";
    submittedAt = moment(submittedAt).toString();
    result += `Job Submitted At: ${submittedAt}  `;
    if (executionTime === undefined) return result;
    result += `Execution Time: ${executionTime}ms`;
    return result;
  };
  const handle = useFullScreenHandle();
  return loading ? (
    <>
      <Preloader />
    </>
  ) : (
    <div style={{ backgroundColor: "#F7DBD7" }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={isLoading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Box sx={{ flexGrow: 1 }}>
      <FullScreen handle={handle}> 
        <Grid container spacing="0.2vh">
            <Grid item xs={12}>
               <Box
              display="flex"
              justifyContent="center"
              sx={{
                padding: 0.7,
                background: "linear-gradient(to right, #e3f4f8, #adecfa)",
                gap: "20px",
              }}
              >
              <Typography
                display="flex"
                justifyContent="center"
                color="#005580"
                padding={1}
                fontSize="large"
                sx={{
                  fontFamily: "Lato",
                  // fontStyle: "normal",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: 30,
                    width: 35,
                  }}
                  src="./image/compiler.png"
                />
                Online Compiler
              </Typography>
              <FormControl size="small" style={{ marginTop: "5px" }}>
                <Select
                  value={theme}
                  onChange={(e) => {
                    setTheme(e.target.value);
                  }}
                >
                  <MenuItem
                    style={{ textTransform: "capitalize" }}
                    value="monokai"
                  >
                    Monokai
                  </MenuItem>
                  <MenuItem
                    style={{ textTransform: "capitalize" }}
                    value="twilight"
                  >
                    Twilight
                  </MenuItem>
                  <MenuItem
                    style={{ textTransform: "capitalize" }}
                    value="dracula"
                  >
                    Dracula
                  </MenuItem>
                  <MenuItem
                    style={{ textTransform: "capitalize" }}
                    value="xcode"
                  >
                    Xcode
                  </MenuItem>
                  <MenuItem
                    style={{ textTransform: "capitalize" }}
                    value="github"
                  >
                    Github
                  </MenuItem>
                  <MenuItem
                    style={{ textTransform: "capitalize" }}
                    value="eclipse"
                  >
                    Eclipse
                  </MenuItem>
                  <MenuItem
                    style={{ textTransform: "capitalize" }}
                    value="terminal"
                  >
                    Terminal
                  </MenuItem>
                </Select>
              </FormControl>

              <FormControl size="small" style={{ marginTop: "5px" }}>
                <Select
                  value={language}
                  onChange={(e) => {
                    const shouldSwitch = window.confirm(
                      "Are you sure you want to change language? WARNING: Your current code will be lost."
                    );
                    if (shouldSwitch) {
                      // console.log("here");
                      setLanguage(e.target.value);
                      if (e.target.value === "py") {
                        setLangForEditor("python");
                      } else if (
                        e.target.value === "cpp" ||
                        e.target.value === "c"
                      ) {
                        setLangForEditor("c_cpp");
                      } else if (e.target.value === "js") {
                        setLangForEditor("javascript");
                      } else if (e.target.value === "java") {
                        setLangForEditor("java");
                      }
                      setCode(""); //
                      console.log("here");
                    }
                  }}
                >
                  <MenuItem value="cpp">C++</MenuItem>
                  <MenuItem value="py">Python</MenuItem>
                  <MenuItem value="c">C</MenuItem>
                  <MenuItem value="js">JavaScript</MenuItem>
                  <MenuItem value="java">Java</MenuItem>
                </Select>
              </FormControl>
              <Button
                onClick={setDefaultLanguage}
                style={{ backgroundColor: "#f54242" }}
                className="d-none d-lg-block"
                variant="contained"
                size="small"
              >
              RESET <RestartAltIcon/>
              </Button>
              <Button
                onClick={handleSubmit}
                className="d-none d-lg-block"
                variant="contained"
                size="small"
              >
               SUBMIT <PublishIcon/>
              </Button>
              <Button  className="d-none d-lg-block" size="medium" onClick={handle.enter}><FullscreenIcon/></Button>
              <Button   className="d-none d-lg-block" size="medium" ><CopyAllIcon/></Button>
            </Box>

            <Box
              display="flex"
              justifyContent="center"
              sx={{
                padding: 0.7,
                background: "linear-gradient(to right, #e3f4f8, #adecfa)",
                gap: "20px",
              }}
            >
              <Button
                onClick={setDefaultLanguage}
                className="d-block d-lg-none"
                variant="contained"
                size="medium"
                style={{ backgroundColor: "#f54242" }}
              >
                RESET <RestartAltIcon/>
              </Button>
              <Button
                onClick={handleSubmit}
                className="d-block d-lg-none"
                variant="contained"
                size="medium"
              >
                SUBMIT <PublishIcon/>
              </Button>
              <Button  className="d-block d-lg-none" size="medium" onClick={handle.enter}><FullscreenIcon/></Button>
              <Button   className="d-block d-lg-none" size="medium" ><CopyAllIcon/></Button>
            </Box>
           
            <AceEditor
            style={{display:'grid',resize:'vertical'}}
              placeholder="//Your Code Here"
              mode={langForEditor}
              showPrintMargin={false}
              theme={theme}
              name="blah2"
              onChange={(code) => {
                setCode(code);
              }}
              fontSize={18}
              showGutter={true}
              highlightActiveLine={true}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                showLineNumbers: true,
                tabSize: 4,
              }}
              width="100%"
              height="82vh"
            /> 
        
          </Grid>

          <Accordion
            expanded={expanded === "panel1"}
            onChange={handleChange("panel1")}
          >
            <Box
              display="flex"
              justifyContent="end"
              margin="auto"
              sx={{
                // padding: 0.7,
                background: "#003153",
                gap: "20px",
              }}
            >
           
              <ButtonGroup
                variant="contained"
                size="small" 
                className=""
                aria-label="outlined primary button group"
              >
                <Button
                  style={{  }}
                  onMouseEnter={{ color: "black" }} className="m-1"
                  id="btn1"
                  onClick={Function1}
                >
                 Input  <InputIcon/>
                </Button>
                <Button
                  style={{  backgroundColor: "#f54242" }} className="m-1"
                  id="btn2"
                  onClick={Function2}
                >
                  Output <VscOutput/>
                </Button>
                <Button
                  style={{  marginRight: "50px"  }} className="m-1"
                  onClick={handleClearInput}
                >
                  Clear  <ClearAllIcon/>
                </Button>
                <AccordionSummary
                  aria-controls="panel1d-content"
                  id="panel1d-header" 
                ></AccordionSummary>
              </ButtonGroup>
              
            </Box>
            <Grid container>
              <Grid item sm={12}>
                <div className="" style={{ display: "none" }} id="input">
                  <AceEditor 
                  style={{display:'flex',resize:'horizontal'}}
                    placeholder="//Input"
                    mode={langForEditor}
                    theme={theme}
                    name="input-box"
                    value={input}
                    onChange={(input) => {
                      setInput(input);
                    }}
                    fontSize={18}
                    showPrintMargin={false}
                    showGutter={true}
                    highlightActiveLine={true}
                    setOptions={{
                      showLineNumbers: true,
                      tabSize: 4,
                      useWorker: false,
                    }}
                    width="100vw"
                    height="50vh"
                  />
                </div>
              </Grid>
              <Grid sm={12} className="" id="output">
                <AceEditor
                style={{resize:'vertical'}}
                  placeholder="//Output"
                  theme={theme}
                  name="output-box"
                  value={`Status : ${status === null ? "" : status}\nJobId : ${
                    jobId === null ? "" : jobId
                  }\n${renderTimeDetails()}\nOutput : \n${output}`}
                  fontSize={18}
                  showPrintMargin={false}
                  showGutter={true}
                  highlightActiveLine={true}
                  setOptions={{
                    showLineNumbers: true,
                    tabSize: 4,
                    useWorker: false,
                    readOnly: true,
                  }}
                  width="100vw"
                  height="50vh"
                  editorProps={{ readOnly: true }}
                />
              </Grid>
            </Grid>
          </Accordion>
        </Grid>
        </FullScreen>  
      </Box>
    </div>
  );
}

export default OnlineCompiler;
