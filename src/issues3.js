import GetIssues2 from './issues2';
import filter from './filter.png'

const GetIssues3 = () => {

  let sort_param = null;
  
  function handleFilter(param){
    sort_param = param;
  }

  return ( 
    <>
      <div className="filter-body">

        <div className="filter_header_name">
          <button className="hoverbtn" onClick={() => handleFilter("Story")}><img className="filter_img" src={filter} ></img></button>
        </div>

        <div className="filter_header_issue">
          <button className="hoverbtn" onClick={() => handleFilter("Release")}><img className="filter_img" src={filter} ></img></button>
        </div>

        <div className="filter_header_status">
          <button className="hoverbtn" onClick={() => handleFilter("Status")}><img className="filter_img" src={filter} ></img></button>
        </div>

      </div>

      <GetIssues2 param = {sort_param}/>
    </>
   );
}
 
export default GetIssues3;