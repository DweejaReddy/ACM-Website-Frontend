import React, { useState, useEffect } from "react";
import Problem from "./ProblemList.module.css";
import Navbar from "../UI/header/header";
import HomeIcon from "@mui/icons-material/Home";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ProblemCard from "./problemCard";




const ProblemList = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  const [data, setdata] = useState([]);
  const gettodos = () => {
    fetch("https://622c2314087e0e041e040caa.mockapi.io/problemlist")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setdata(json);
      });
  };

  useEffect(() => {
    gettodos();
    console.log(data);
  },);
  return (
    <div  id={Problem.container}>
      <Navbar />
      <div>
        <nav className=" container navbar-expand-lg navbar-light  bg-light shadow-lg  mb-2 bg-body rounded" style={{ borderTop:"1px solid #7ad6fe"  }}>
          <HomeIcon className="my-2" /> Home <KeyboardDoubleArrowRightIcon/> ProblemList
        </nav>
      </div>
      
      <div className="container " >
      <Box sx={{ flexGrow: 1 }}> 
      <Grid container spacing={2}  >
        <Grid item xs={9} className=" my-3" >
        {data.map((item) => {
            
            return (
              <div >
              <ProblemCard title={item.Problemtitle} tags={item.tags} maxscore={item.score} success={item.accuracy} link={item.link} /> 
              </div>
            );
          })}
          
          
          
        </Grid>
        <Grid item xs={3}><div className="d-flex justify-content-end m-3">
        <Paper  className="shadow-lg   bg-body "
          component="form"
          sx={{
            borderRadius: 12,
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: 400,
          }}
        >
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Question Here"
            inputProps={{ "aria-label": "Search Question Here" }}
          />
          <IconButton type="submit" sx={{ p: "10px" }} aria-label="search" id={Problem.color}>
            <SearchIcon />
          </IconButton>
        </Paper>
      </div> 
        </Grid>
      </Grid>
    </Box>
     </div>
    </div>
  );
};

export default ProblemList;
