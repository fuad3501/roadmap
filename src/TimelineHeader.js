import {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';

const TimelineHeader = () => {

  const [posts, setPosts] = useState([]);

  // Fetch Data
  useEffect(() => {
    axios.get("http://localhost:8000/issues").then(res => {
        setPosts(res.data)
      })}, [])

  const data = posts.filter(function (i){
    return i.start_date !== ""
  })
  // Get all start dates
  const start_dates = data.map(i => new Date(i.start_date));

  // Get earliest date, month and year 
  const min_date = new Date(Math.min(...start_dates));
  const min_month = min_date.getMonth();
  const min_year = min_date.getFullYear();
  
  let Q1_m = null;
  let Q2_m = null;
  let Q3_m = null;
  let Q4_m = null;
  let Q5_m = null;

  let Q1_y = null;
  let Q2_y = null;
  let Q3_y = null;
  let Q4_y = null;
  let Q5_y = null;

  Q1_y = min_year;
  
  switch (min_month){
    case 0:
      Q1_m = "Q1";
      break;
    case 1:
      Q1_m = "Q2";
      break;
    case 2:
      Q1_m = "Q1";
      break;
    case 3:
      Q1_m = "Q2";
      break;
    case 4:
      Q1_m = "Q2";
      break;
    case 5:
      Q1_m = "Q2";
      break;
    case 6:
      Q1_m = "Q3";
      break;
    case 7:
      Q1_m = "Q3";
      break;
    case 8:
      Q1_m = "Q3";
      break;
    case 9:
      Q1_m = "Q4";
      break;
    case 10:
      Q1_m = "Q4";
      break;
    case 11:
      Q1_m = "Q4";
      break;
    default:

  }

  if (Q1_m === "Q1" ){
    Q2_m = "Q2"
    Q2_y = Q1_y
  } else if (Q1_m === "Q2") {
    Q2_m = "Q3"
    Q2_y = Q1_y
  } else if (Q1_m === "Q3"){
    Q2_m = "Q4"
    Q2_y = Q1_y
  } else if (Q1_m === "Q4"){
    Q2_m = "Q1"
    Q2_y = Q1_y + 1
  }

  if (Q2_m === "Q1" ){
    Q3_m = "Q2"
    Q3_y = Q2_y
  } else if (Q2_m === "Q2") {
    Q3_m = "Q3"
    Q3_y = Q2_y
  } else if (Q2_m === "Q3"){
    Q3_m = "Q4"
    Q3_y = Q2_y
  } else if (Q2_m === "Q4"){
    Q3_m = "Q1"
    Q3_y = Q2_y + 1
  }

  if (Q3_m === "Q1" ){
    Q4_m = "Q2"
    Q4_y = Q3_y
  } else if (Q3_m === "Q2") {
    Q4_m = "Q3"
    Q4_y = Q3_y
  } else if (Q3_m === "Q3"){
    Q4_m = "Q4"
    Q4_y = Q3_y
  } else if (Q3_m === "Q4"){
    Q4_m = "Q1"
    Q4_y = Q3_y + 1
  }

  if (Q4_m === "Q1" ){
    Q5_m = "Q2"
    Q5_y = Q4_y
  } else if (Q4_m === "Q2") {
    Q5_m = "Q3"
    Q5_y = Q4_y
  } else if (Q4_m === "Q3"){
    Q5_m = "Q4"
    Q5_y = Q4_y
  } else if (Q4_m === "Q4"){
    Q5_m = "Q1"
    Q5_y = Q4_y + 1
  }

  return ( 
    <div className="timeline_header_wrapper">
      <div className="Q1">{Q1_m + "/" + Q1_y}</div>
      <div className="Q2">{Q2_m + "/" + Q2_y}</div>
      <div className="Q3">{Q3_m + "/" + Q3_y}</div>
      <div className="Q4">{Q4_m + "/" + Q4_y}</div>
      <div className="Q5">{Q5_m + "/" + Q5_y}</div>
    </div>
   );
}
 
export default TimelineHeader;