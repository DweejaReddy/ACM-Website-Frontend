// import { Add } from "@material-ui/icons";
import React from "react";
import "./css/SidebarOptions.css";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Link from '@mui/material/Link';

function SidebarOptions() {
  return (
    <div className="sidebarOptions" id="side" style={{backgroundColor:'#fff'}}>
     <div className="container navbar-expand-lg read navbar-light bg-light shadow-lg mb-2 bg-body rounded"
					style={{ borderTop: "1px solid #7ad6fe" }}>
					<AutoStoriesIcon className="my-3 " /> Read More of coding <KeyboardDoubleArrowRightIcon />{" "}
					</div>
      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
          alt=""
        />
        <Link style={{color:'#000',textDecoration:'none',marginLeft:'10px',fontSize:'16px'}} href='https://www.geeksforgeeks.org/how-to-get-started-with-competitive-programming/'>Competitve coding</Link>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1600463241302-88b0e1a51175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NzQ3Mjk1MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          alt=""
        />

        <Link style={{color:'#000',textDecoration:'none',marginLeft:'10px',fontSize:'16px'}} href="https://www.geeksforgeeks.org/web-development/">Web Development</Link>
      </div>
      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMjc0OTM1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          alt=""
        />
        <Link style={{color:'#000',textDecoration:'none',marginLeft:'10px',fontSize:'16px'}} href='https://roadmap.sh/android'>Android Development</Link>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
          alt=""
        />
        <Link style={{color:'#000',textDecoration:'none',marginLeft:'10px',fontSize:'16px'}} href='https://www.geeksforgeeks.org/data-structures/'>DSA</Link>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzOTAzNjQ0OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          alt=""
        />
        <Link style={{color:'#000',textDecoration:'none',marginLeft:'10px',fontSize:'16px'}} href ="https://www.geeksforgeeks.org/python-programming-language/">Python</Link>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
          alt=""
        />
        <Link style={{color:'#000',textDecoration:'none',marginLeft:'10px',fontSize:'16px'}} href="https://www.geeksforgeeks.org/c-plus-plus/">C/C++</Link>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjY5NzU5OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          alt=""
        />
        <Link style={{color:'#000',textDecoration:'none',marginLeft:'10px',fontSize:'16px'}} href="https://www.geeksforgeeks.org/java/">Java</Link>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NzQ3MzU5MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          alt=""
        />
        <Link style={{color:'#000',textDecoration:'none',marginLeft:'10px',fontSize:'16px'}} href="https://www.geeksforgeeks.org/introduction-to-linux-operating-system/">Linux</Link>
      </div>

      <div className="sidebarOption">
        <img
          src="https://images.unsplash.com/photo-1564865878688-9a244444042a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
          alt=""
        />
        <Link style={{color:'#000',textDecoration:'none',marginLeft:'10px',fontSize:'16px'}} href="https://roadmap.sh/devops">Devops</Link>
      </div>

      
    </div>
  );
}

export default SidebarOptions;
