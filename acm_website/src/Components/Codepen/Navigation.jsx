import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SaveIcon from '@mui/icons-material/Save';
import CodeIcon from '@mui/icons-material/Code';
import GridViewIcon from '@mui/icons-material/GridView';
import InputLabel from '@mui/material/InputLabel';
//editor themes
import "brace/theme/monokai";
import "brace/theme/dracula";
import "brace/theme/xcode";
import "brace/theme/eclipse";
import "brace/theme/terminal";
import "brace/theme/twilight";
import "brace/theme/github";
const Navigation = (props) => {
  const handlemyProjects = () => {
    window.location.href = "/codepen/";
  };

  return (<>

    < nav> <div className="mainheader">

    <div>
      <br/>
      <iframe src="https://embed.lottiefiles.com/animation/16497"  frameBorder="0" title="animatedicons" height="30px" scrolling="no"  style={{pointerEvents:"none"}} > </iframe>
    <div className="mx-3 text-end " style={{marginTop:"-42px"}}>
<button type="button" target="_blank" class="btn btn-sm btn-outline-primary"><GridViewIcon/> Change View</button>

        <button className="FullScreenToggle btn  btn-sm btn-outline-primary" onClick={() => {
            props.handleSave();
          }} variant="outlined">
        <SaveIcon/>  Save
        </button>
        <button className="FullScreenToggle btn btn-sm btn-outline-primary" onClick={() => {
            handlemyProjects();
          }} variant="outlined">
      <CodeIcon/>    My Projects
        </button>
        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>

            <Select
              labelId="demo-simple-select-label"
               id="demo-simple-select"
              label="Age"
              value={props.theme}
              onChange={e => {
                props.setTheme(e.target.value);
              }}
            >
              <MenuItem value="dracula">
                <em>dracula</em>
              </MenuItem>
              <MenuItem value="monokai">monokai</MenuItem>
              <MenuItem value="twilight">twilight</MenuItem>
              <MenuItem value="dracula">dracula</MenuItem>
              <MenuItem value="xcode">xcode</MenuItem>
              <MenuItem value="github">github</MenuItem>
              <MenuItem value="eclipse">eclipse</MenuItem>
              <MenuItem value="terminal">terminal</MenuItem>
            </Select>
          </FormControl>

      </div>
    </div>
  </div>
</nav>

</>);
};

export default Navigation;
