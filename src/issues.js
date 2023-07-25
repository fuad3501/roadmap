import {useState} from 'react';
import './App.css';

const GetIssues = () => {

  let data;
  let [items, setItems] = useState([
    {id: "", name: "", issue: "", status: ""}
  ])

  async function fetchData(){
    let uri = "http://localhost:8000/issues";
    const res = await fetch(uri);
    data = await res.json();
    data.forEach((o, i) => o.id = i+1);
    items = data;
    data.forEach((i) => (
      setItems([...items,
      {id: i.id,
      name: i.name,
      issue: i.issue,
      status: i.status}
    ])))

    // const [posts, setPosts] = useState([
    //   {id: "", name: "", issue: "", status: ""}
    // ]);
    // useEffect(() => {
    //   axios.get("http://localhost:8000/employees").then(res => {
    //       setPosts(res.data)})
    // }, [])
    // console.log(items);

  }
  
  return ( 
    
    <>
      <div>
        <button onClick={fetchData}>Refresh</button>
      </div>
      {items.map((i) => (
        <div className="issue-list" key={i.id}>
          <div className="issue-id">{i.id}</div>
          <div className="issue-name">{i.name}</div>
          <div className="issue-issue">{i.issue}</div>
          <div className="issue-status">{i.status}</div>
        </div>
      ))}
    </>
   );
}
 
export default GetIssues;