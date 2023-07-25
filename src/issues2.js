import {useState, useEffect} from 'react';
import axios from 'axios'
import Item from './Item'
import './App.css';

const GetIssues2 = (props) => {

  const param = props.param;
  console.log(param);

  const [posts, setPosts] = useState([]);
  console.log(posts)

  useEffect(() => {
    axios.get("http://localhost:8000/issues").then(res => {
        setPosts(res.data)
      })  


  }, [])

  function sort(){
    console.log("sort function")
  }

  posts.sort(function(a, b){
    if (a[param] < b[param])
      return -1;
    if (a[param] > b[param])
      return 1;
    return 0;
  })
  
  return ( 
    
    <>
      {posts.map((i) => (
        <div className="bar-border" key={i.id}>
          <Item id={i.id} name={i.name} issue={i.issue} status={i.status} />
        </div>
      ))}
    </>
   );
}
 
export default GetIssues2;