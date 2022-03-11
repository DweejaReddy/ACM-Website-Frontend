import React from "react";

const Output = (props) => {

  return (
    <div className="output" style={{backgroundColor:"white"}}>
      <iframe title="Output" srcDoc={props.code} width="100%" height="750vh" sandbox="allow-scripts"
        frameBorder="0"></iframe>
    </div>
  );
}

export default Output;
