import React, { useState } from "react";
import HomeIcon from "@material-ui/icons/Home";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import CodeIcon from "@mui/icons-material/Code";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";
import CallIcon from "@mui/icons-material/Call";
import {
  AssignmentTurnedInOutlined,
  // Close,
  NotificationsOutlined,
  PeopleAltOutlined,
  Search,
  ExpandMore,
} from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import { Avatar, Button, Input } from "@material-ui/core";
import "./css/QuoraHeader.css";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";
import axios from "axios";
// import SidebarOptions from "../DiscussionForum/SidebarOptions";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import Link from "@mui/material/Link";
// import WidgetContent from "./WidgetContent";
function QuoraHeader({ setSearchTerm }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpen2, setIsModalOpen2] = useState(false);
  const [isModalOpen3, setIsModalOpen3] = useState(false);
  const [inputUrl, setInputUrl] = useState("");
  const [question, setQuestion] = useState("");

  const Close = <CloseIcon />;
  const handleSubmit = async () => {
    if (question !== "") {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const body = {
        questionName: question,
        questionUrl: inputUrl,
      };
      await axios
        .post("/api/discussion/questions", body, config)
        .then((res) => {
          console.log(res.data);
          // alert(res.data);
          window.location.href = "/discussion";
        })
        .catch((e) => {
          console.log(e);
          alert(e);
        });
    }
  };
  return (
    <div>
      <div className="qHeader" style={{ height: "100px" }}>
        <div className="qHeader-content" style={{ maxWidth: "90%" }}>
          <div className="qHeader__logo">
            <img src="../../../image/qna.gif" height="90px" />
          </div>

          {/* <div className="qHeader__icons">
          <div className="qHeader__icon">
            <HomeIcon />
          </div>
          <div className="qHeader__icon">
            <FeaturedPlayListOutlinedIcon />
          </div>
          <div className="qHeader__icon">
            <AssignmentTurnedInOutlined />
          </div>
          <div className="qHeader__icon">
            <PeopleAltOutlined />
          </div>
          <div className="qHeader__icon">
            <NotificationsOutlined />
          </div>
        </div> */}
          <div className="qHeader__input">
            <Search />
            <Input
              type="text"
              placeholder="Search questions"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="qHeader__Rem">
            <Avatar />
            <Button onClick={() => setIsModalOpen(true)}>Add Question</Button>
            <Modal
              open={isModalOpen2}
              closeIcon={Close}
              onClose={() => setIsModalOpen2(false)}
              closeOnEsc
              center
              closeOnOverlayClick={false}
              styles={{
                overlay: {
                  height: "auto",
                  display: "block",
                },
              }}
            >
              <div className="" id="side" style={{ backgroundColor: "#fff" }}>
                <div
                  className="container navbar-expand-lg read navbar-light bg-light shadow-lg mb-2 bg-body rounded"
                  style={{ borderTop: "1px solid #7ad6fe" }}
                >
                  <AutoStoriesIcon className="my-3 " /> Read More of coding{" "}
                  <KeyboardDoubleArrowRightIcon />{" "}
                </div>
                <div className="sidebarOption">
                  <img
                    src="https://images.unsplash.com/photo-1555099962-4199c345e5dd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
                    alt=""
                  />
                  <Link
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      marginLeft: "10px",
                      fontSize: "16px",
                    }}
                    href="https://www.geeksforgeeks.org/how-to-get-started-with-competitive-programming/"
                  >
                    Competitve coding
                  </Link>
                </div>

                <div className="sidebarOption">
                  <img
                    src="https://images.unsplash.com/photo-1600463241302-88b0e1a51175?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NzQ3Mjk1MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                    alt=""
                  />

                  <Link
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      marginLeft: "10px",
                      fontSize: "16px",
                    }}
                    href="https://www.geeksforgeeks.org/web-development/"
                  >
                    Web Development
                  </Link>
                </div>
                <div className="sidebarOption">
                  <img
                    src="https://images.unsplash.com/photo-1541345023926-55d6e0853f4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzMjc0OTM1OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                    alt=""
                  />
                  <Link
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      marginLeft: "10px",
                      fontSize: "16px",
                    }}
                    href="https://roadmap.sh/android"
                  >
                    Android Development
                  </Link>
                </div>

                <div className="sidebarOption">
                  <img
                    src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
                    alt=""
                  />
                  <Link
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      marginLeft: "10px",
                      fontSize: "16px",
                    }}
                    href="https://www.geeksforgeeks.org/data-structures/"
                  >
                    DSA
                  </Link>
                </div>

                <div className="sidebarOption">
                  <img
                    src="https://images.unsplash.com/photo-1526379095098-d400fd0bf935?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYzOTAzNjQ0OA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                    alt=""
                  />
                  <Link
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      marginLeft: "10px",
                      fontSize: "16px",
                    }}
                    href="https://www.geeksforgeeks.org/python-programming-language/"
                  >
                    Python
                  </Link>
                </div>

                <div className="sidebarOption">
                  <img
                    src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
                    alt=""
                  />
                  <Link
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      marginLeft: "10px",
                      fontSize: "16px",
                    }}
                    href="https://www.geeksforgeeks.org/c-plus-plus/"
                  >
                    C/C++
                  </Link>
                </div>

                <div className="sidebarOption">
                  <img
                    src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTYyNjY5NzU5OQ&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                    alt=""
                  />
                  <Link
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      marginLeft: "10px",
                      fontSize: "16px",
                    }}
                    href="https://www.geeksforgeeks.org/java/"
                  >
                    Java
                  </Link>
                </div>

                <div className="sidebarOption">
                  <img
                    src="https://images.unsplash.com/photo-1629654297299-c8506221ca97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY0NzQ3MzU5MA&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
                    alt=""
                  />
                  <Link
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      marginLeft: "10px",
                      fontSize: "16px",
                    }}
                    href="https://www.geeksforgeeks.org/introduction-to-linux-operating-system/"
                  >
                    Linux
                  </Link>
                </div>

                <div className="sidebarOption">
                  <img
                    src="https://images.unsplash.com/photo-1564865878688-9a244444042a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
                    alt=""
                  />
                  <Link
                    style={{
                      color: "#000",
                      textDecoration: "none",
                      marginLeft: "10px",
                      fontSize: "16px",
                    }}
                    href="https://roadmap.sh/devops"
                  >
                    Devops
                  </Link>
                </div>
              </div>
            </Modal>

            <Modal
              open={isModalOpen3}
              closeIcon={Close}
              onClose={() => setIsModalOpen3(false)}
              closeOnEsc
              center
              closeOnOverlayClick={false}
              styles={{
                overlay: {
                  height: "auto",
                  display: "block",
                },
              }}
            >
              <div className="">
                <div
                  className="container navbar-expand-lg read navbar-light bg-light shadow-lg mb-2 bg-body rounded"
                  style={{ borderTop: "1px solid #7ad6fe" }}
                >
                  <DeveloperModeIcon className="my-3 " /> Explore & Practice{" "}
                  <KeyboardDoubleArrowRightIcon />{" "}
                </div>

                <div
                  className="container navbar-expand-lg read navbar-light bg-light shadow-lg mb-2 bg-body rounded"
                  style={{ borderTop: "1px solid #7ad6fe" }}
                >
                  <Link
                    href="../"
                    style={{
                      color: "#4e8be7",
                      textDecoration: "none",
                      marginLeft: "20px",
                      fontSize: "16px",
                    }}
                  >
                    <HomeIcon className="my-3 " /> Home{" "}
                    <KeyboardDoubleArrowRightIcon />{" "}
                  </Link>
                </div>

                <div
                  className="container navbar-expand-lg read navbar-light bg-light shadow-lg mb-2 bg-body rounded"
                  style={{ borderTop: "1px solid #7ad6fe" }}
                >
                  <Link
                    href="../codepen"
                    style={{
                      color: "#4e8be7",
                      textDecoration: "none",
                      marginLeft: "20px",
                      fontSize: "16px",
                    }}
                  >
                    <CodeIcon className="my-3 " /> Codepen{" "}
                    <KeyboardDoubleArrowRightIcon />{" "}
                  </Link>
                </div>

                <div
                  className="container navbar-expand-lg read navbar-light bg-light shadow-lg mb-2 bg-body rounded"
                  style={{ borderTop: "1px solid #7ad6fe" }}
                >
                  <Link
                    href="../problem-list"
                    style={{
                      color: "#4e8be7",
                      textDecoration: "none",
                      marginLeft: "20px",
                      fontSize: "16px",
                    }}
                  >
                    <QuestionAnswerIcon className="my-3 " /> ProblemSet{" "}
                    <KeyboardDoubleArrowRightIcon />{" "}
                  </Link>
                </div>

                <div
                  className="container navbar-expand-lg read navbar-light bg-light shadow-lg mb-2 bg-body rounded"
                  style={{ borderTop: "1px solid #7ad6fe" }}
                >
                  <Link
                    href="../compiler"
                    style={{
                      color: "#4e8be7",
                      textDecoration: "none",
                      marginLeft: "20px",
                      fontSize: "16px",
                    }}
                  >
                    <IntegrationInstructionsIcon className="my-3 " /> Online
                    Compiler <KeyboardDoubleArrowRightIcon />{" "}
                  </Link>
                </div>

                <div
                  className="container navbar-expand-lg read navbar-light bg-light shadow-lg mb-2 bg-body rounded"
                  style={{ borderTop: "1px solid #7ad6fe" }}
                >
                  <Link
                    href="../#contact"
                    style={{
                      color: "#4e8be7",
                      textDecoration: "none",
                      marginLeft: "20px",
                      fontSize: "16px",
                    }}
                  >
                    <CallIcon className="my-3 " /> Contact{" "}
                    <KeyboardDoubleArrowRightIcon />{" "}
                  </Link>
                </div>
              </div>
            </Modal>

            <Modal
              open={isModalOpen}
              closeIcon={Close}
              onClose={() => setIsModalOpen(false)}
              closeOnEsc
              center
              closeOnOverlayClick={false}
              styles={{
                overlay: {
                  height: "auto",
                },
              }}
            >
              <div className="modal__title">
                <h5>Add Question</h5>
                <h5>Share Link</h5>
              </div>
              <div className="modal__info">
                <Avatar className="avatar" />
                <div className="modal__scope">
                  <PeopleAltOutlined />
                  <p>Public</p>
                  <ExpandMore />
                </div>
              </div>
              <div className="modal__Field">
                <Input
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  type=" text"
                  placeholder="Start your question with 'What', 'How', 'Why', etc. "
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <input
                    type="text"
                    value={inputUrl}
                    onChange={(e) => setInputUrl(e.target.value)}
                    style={{
                      margin: "5px 0",
                      border: "1px solid lightgray",
                      padding: "10px",
                      outline: "2px solid #000",
                    }}
                    placeholder="Optional: inclue a link that gives context"
                  />
                  {inputUrl !== "" && (
                    <img
                      style={{
                        height: "40vh",
                        objectFit: "contain",
                      }}
                      src={inputUrl}
                      alt="displayimage"
                    />
                  )}
                </div>
              </div>
              <div className="modal__buttons">
                <button
                  className="cancle"
                  onClick={() => setIsModalOpen(false)}
                >
                  Cancel
                </button>
                <button onClick={handleSubmit} type="submit" className="add">
                  Add Question
                </button>
              </div>
            </Modal>
          </div>
        </div>
      </div>

      <div style={{display:'flex',justifyContent:'space-evenly'}}>
      <Button
        size = "large"
        style={{backgroundColor:'#4e8be7',color:'#fff'}}
        className="d-inline d-lg-none btnmodal"
        onClick={() => setIsModalOpen2(true)}
      >
        Read More
        <KeyboardDoubleArrowRightIcon />{" "}
      </Button>
      <Button
        className="d-inline d-lg-none"
        size = "large"
        style={{backgroundColor:'#4e8be7',color:'#fff'}}
        onClick={() => setIsModalOpen3(true)}
      >
        Explore More
        <KeyboardDoubleArrowRightIcon />
      </Button>
      </div>
    </div>
  );
}

export default QuoraHeader;
