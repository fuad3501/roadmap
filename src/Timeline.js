import { useState, useEffect} from "react";
import axios from 'axios'
import "./App.css"
import Timebar from './Timebar'

const Timeline = () => {

  const [posts, setPosts] = useState([]);
  // console.log(posts)

  // Fetch data from API on refresh
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
  const days = min_date.getDate();
  min_date.setDate(min_date.getDate()-days+1)    // Gets the start date of the timeline
  const min_m = min_date.getMonth();
  const min_y = min_date.getFullYear()
  let Q_m = null;
  
  switch(min_m){
    case 0:
      Q_m = 'Jan'
      break;
    case 1:
      Q_m = 'Jan'
      break;    
    case 2:
      Q_m = 'Jan'
      break;
    case 3:
      Q_m = 'Apr'
      break; 
    case 4:
      Q_m = 'Apr'
      break;
    case 5:
      Q_m = 'Apr'
      break;    
    case 6:
      Q_m = 'Jul'
      break;
    case 7:
      Q_m = 'Jul'
      break; 
    case 8:
      Q_m = 'Jul'
      break;
    case 9:
      Q_m = 'Oct'
      break; 
    case 10:
      Q_m = 'Oct'
      break;
    case 11:
      Q_m = 'Oct'
      break;
    default:

  }

  const Q_start = new Date(`01-${Q_m}-${min_y}`)
  

  return ( 
    <>
        {posts.map((o)=>(
          <div className="bar-border" key={o.id}>
            <Timebar start_date={o.start_date} due_date={o.due_date} min_date={Q_start} status={o.status}/>
          </div>
        ))}
    </>
   );
}

export default Timeline;