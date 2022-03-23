import React,{ useState} from "react";
import AceEditor from "react-ace";
import InputIcon from '@mui/icons-material/Input';
import Button from "@mui/material/Button";
//editor themes
import "brace/theme/monokai";
import "brace/theme/dracula";
import "brace/theme/xcode";
import "brace/theme/eclipse";
import "brace/theme/terminal";
import "brace/theme/twilight";
import "brace/theme/github";
const Input = () => {
      const [theme, setTheme] = useState("dracula"); 
      const [input, setInput] = useState("");
  const [langForEditor, setLangForEditor] = useState("c_cpp");
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
  return (
    <div>
      <Button  style={{  backgroundColor: "#f54242" }} 
        className="m-1 p-1"
        type="button "
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasWithBothOptions"
        aria-controls="offcanvasWithBothOptions"
     
        onMouseEnter={{ color: "black" }}
        id="btn1"
        onClick={Function1}
      >
        Input <InputIcon/>
      </Button>
      <div
      
        class="offcanvas offcanvas-end "
        tabindex="-1"
        id="offcanvasWithBackdrop"
        aria-labelledby="offcanvasWithBackdropLabel"
      ></div>
      <div
        class="offcanvas offcanvas-end " style={{ backgroundColor: "#003152"}}
        data-bs-scroll="true"
        tabindex="-1"
        id="offcanvasWithBothOptions"
        aria-labelledby="offcanvasWithBothOptionsLabel"
      >
        <div class="offcanvas-header">
          <h6 class="offcanvas-title text-center  text-white" id="offcanvasWithBothOptionsLabel">
            <b>INPUT</b> 
          </h6>
          <Button
            type="button"
            class="btn-close text-reset "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></Button>
        </div>
        <div class="offcanvas-body" style={{ backgroundColor: "#bceef9" }}>
          <div className="">
            <div
              style={{backgroundColor: "#bceef9"
              }}
            >
          <kbd>  custom input</kbd>
              <AceEditor 
                  placeholder="//INPUT" className="img-fluid"
                  mode={langForEditor}
                    theme={theme}
                    name="input-box "
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
                    width="87vw"
                  height="82vh"
                /> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Input;
