import {useState} from 'react';

const Timebar = (props) => {

  const status = props.status;
  const min_date = new Date(props.min_date);
  let start_date = new Date()
  let due_date = new Date()
  let color = "rgb(255,227, 128)";
  let grad = "none";

  const done = 'rgb(0, 32, 96)';
  const backlog = 'rgb(81, 81, 81)';
  const in_prog = 'rgb(21, 135, 36)';
  const buffer = 120;
   
  bar_style: if (props.start_date === "" && props.due_date === ""){

    color = "white";
    break bar_style;
  
  }else if (status === "Done"){

    if (props.start_date === ""){
      start_date = new Date()
      let temp = new Date(props.due_date)
      start_date.setDate(temp.getDate()-buffer)
      grad = `linear-gradient(to left, ${done}, rgb(255,255,255))`
    }else if (props.due_date === ""){
      due_date = new Date()
      let temp = new Date(props.start_date)
      due_date.setDate(temp.getDate()+buffer)
      grad = `linear-gradient(to right, ${done}, rgb(255,255,255))`
    }else{
      start_date = props.start_date;
      due_date = props.due_date;
      color = `${done}`
    }

  } else if (status === "In Progress"){

    if (props.start_date === ""){
      start_date = new Date()
      let temp = new Date(props.due_date)
      start_date.setDate(temp.getDate()-buffer)
      grad = `linear-gradient(to left, ${in_prog}, rgb(255,255,255))`
    }else if(props.due_date === ""){
      due_date = new Date()
      let temp = new Date(props.start_date)
      due_date.setDate(temp.getDate()+buffer)
      grad = `linear-gradient(to right, ${in_prog}, rgb(255,255,255))`
    }else{
      start_date = props.start_date
      due_date = props.due_date
      color = `${in_prog}`
    }

  }else if (status === "Backlog"){

    if (props.start_date === ""){
      start_date = new Date()
      let temp = new Date(props.due_date)
      start_date.setDate(temp.getDate()-buffer)
      grad = `linear-gradient(to left, ${backlog}, rgb(255, 255, 255))`
    }else if(props.due_date === ""){
      start_date = new Date()
      let temp = new Date(props.start_date)
      due_date.setDate(temp.getDate()+buffer)
      grad = `linear-gradient(to right, ${backlog}, rgba(255, 255, 255))`
    }else{
      start_date = props.start_date
      color = `${backlog}`
    }

  }else{

      start_date = props.start_date
      due_date = props.due_date
      color="black"

  }

  const width = Math.round((Math.floor((Math.abs(new Date(due_date)-new Date(start_date)))/(1000*60*60*24))/456*100), 1);
  const margin = Math.round(Math.floor((Math.abs(new Date(start_date)-min_date))/(1000*60*60*24))/456*100);
  // console.log("Dates: ", start_date, due_date);
  // console.log("Min Date: ", min_date)
  // console.log("params:", width, margin)

  const bar = {
    position: 'relative',
    display: 'inline-block',
    width: `${width}%`,
    height: '11px',
    background: `${color}`,
    backgroundImage: `${grad}`,
    marginLeft: `${margin}%`,
    borderRadius: '6px',
    transition: 'box-shadow .3s',
    transition: 'padding .3s'
  }

  const label = {
    transition: 'box-shadow .3s',
    transition: 'opacity .3s'
  }

  // const [start, setStart] = ([]);
  // setStart(props.start_date);

  return ( 
    <div className="bar-hover">
      <div className="bar" style={bar}>
        <span className="label1">{props.start_date}</span>
        <span className="label2">{props.due_date}</span>
        <span className="label3"><center>150 days</center></span>
      </div>
    </div>
   );
}
 
export default Timebar;