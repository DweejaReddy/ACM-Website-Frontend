import React from "react";
import AceEditor from "react-ace";
//languages
import "brace/mode/javascript";
import "brace/mode/css";
import "brace/mode/html";
import "ace-builds/src-noconflict/ext-language_tools";

const CodeInput = (props) => {
  return (
    <div style={{margin:"10px",backgroundColor:"black",borderRadius:"5px"}}>
      <kbd>{props.titles}</kbd>
      <AceEditor
        placeholder="//Your Code Here" mode={props.language}
        onChange={code => props.save(code)}
        showPrintMargin={false} setValue={props.value}
        theme={props.theme} name="blah2" fontSize={18} showGutter={true} highlightActiveLine={true}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 4,
        }}
        width="100%" height="50vh"
      />
    </div>
  )
}

export default CodeInput;
