import React from "react";
import "./css/WidgetContent.css";
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import CodeIcon from '@mui/icons-material/Code';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import CallIcon from '@mui/icons-material/Call';
function WidgetContent() {
  return (
    <div className=" widget__contents d-none d-lg-block">
      {/* <div className="widget__content"> */}
      <div className="container navbar-expand-lg read navbar-light bg-light shadow-lg mb-2 bg-body rounded"
					style={{ borderTop: "1px solid #7ad6fe" }}>
					<DeveloperModeIcon className="my-3 " /> Explore & Practice <KeyboardDoubleArrowRightIcon />{" "}
					</div>

          <div className="container navbar-expand-lg read navbar-light bg-light shadow-lg mb-2 bg-body rounded"
					style={{ borderTop: "1px solid #7ad6fe" }}>
					<Link href= "../" style={{color:'#4e8be7',textDecoration:'none',marginLeft:'20px',fontSize:'16px'}}><HomeIcon className="my-3 " /> Home <KeyboardDoubleArrowRightIcon />{" "}</Link>
					</div>

          <div className="container navbar-expand-lg read navbar-light bg-light shadow-lg mb-2 bg-body rounded"
					style={{ borderTop: "1px solid #7ad6fe" }}>
					<Link href= "../codepen" style={{color:'#4e8be7',textDecoration:'none',marginLeft:'20px',fontSize:'16px'}}><CodeIcon className="my-3 " /> Codepen <KeyboardDoubleArrowRightIcon />{" "}</Link>
					</div>

          <div className="container navbar-expand-lg read navbar-light bg-light shadow-lg mb-2 bg-body rounded"
					style={{ borderTop: "1px solid #7ad6fe" }}>
					<Link href= "../problem-list" style={{color:'#4e8be7',textDecoration:'none',marginLeft:'20px',fontSize:'16px'}}><QuestionAnswerIcon className="my-3 " /> ProblemSet <KeyboardDoubleArrowRightIcon />{" "}</Link>
					</div>

          <div className="container navbar-expand-lg read navbar-light bg-light shadow-lg mb-2 bg-body rounded"
					style={{ borderTop: "1px solid #7ad6fe" }}>
					<Link href= "../compiler" style={{color:'#4e8be7',textDecoration:'none',marginLeft:'20px',fontSize:'16px'}}><IntegrationInstructionsIcon className="my-3 " /> Online Compiler <KeyboardDoubleArrowRightIcon />{" "}</Link>
					</div>

          <div className="container navbar-expand-lg read navbar-light bg-light shadow-lg mb-2 bg-body rounded"
					style={{ borderTop: "1px solid #7ad6fe" }}>
					<Link href= "../#contact" style={{color:'#4e8be7',textDecoration:'none',marginLeft:'20px',fontSize:'16px'}}><CallIcon className="my-3 " /> Contact <KeyboardDoubleArrowRightIcon />{" "}</Link>
					</div>
      {/* </div> */}
    </div>
  );
}

export default WidgetContent;
