const Item = (props) => {
  const id = props.id;
  const name = props.name;
  const issue = props.issue;
  const status = props.status;
  let color = "#f7f7f7"

  if (status === "Done"){
    color = "rgb(0, 32, 96)"
  } else if(status === "Backlog"){
    color = "rgb(81, 81, 81)"
  } else if (status === "In Progress"){
    color = "rgb(21, 135, 36)"
  } else {

  }

  const bar = {
    backgroundColor: `${color}`,
    transition: 'box-shadow .3s',
    transition: 'font-weight .3s'
  }

  

  return (
    <div className="issue-list">
      <div className="issue-id">{id}</div>
      <div className="issue-name">{name}</div>
      <div className="issue-issue">{issue}</div>
      <div className="issue-status" style={bar}>{status}</div>
    </div>
    
   );
}
 
export default Item;