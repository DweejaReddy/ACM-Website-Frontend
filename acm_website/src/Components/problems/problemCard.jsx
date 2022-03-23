import React from "react";
import Problem from "./ProblemList.module.css";
import AssignmentIcon from "@mui/icons-material/Assignment";
const problemCard = (props) => {
  return (
    <>
      <div>
        <div className=" shadow p-1 mb-3 rounded" id={Problem.card}>
          <div className="card-body text-start">
            <h5 className="card-title ">
              <AssignmentIcon fontSize="small" />
              <strong> {props.data.Problemtitle}</strong>
            </h5>
            <div className="">
              <p className="card-text d-flex">
                <div
                  className=" font-monospace m-2 text-primary"
                  id={Problem.size}
                >
                  {props.data.tags}
                </div>
                <div className="m-2  text-black " id={Problem.size}>
                  Max-Score :{props.data.score}
                </div>
                <div className="m-2 text-black " id={Problem.size}>
                  Success-Rate : {props.data.accuracy}
                </div>
              </p>
              <div
                className="d-grid gap-2 d-md-flex justify-content-md-end"
                id={Problem.padding}
              >
                <a
                  className="butn  "
                  href={props.data.link}
                  id={Problem.butn}
                  type="button"
                ></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default problemCard;
