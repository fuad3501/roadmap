import './App.css';
import GetIssues2 from './issues2';
import Timeline from './Timeline';
import TimelineHeader from './TimelineHeader';
import Issue_Header from './Issue_Header';
import filter from './filter.png';
import sort from './issues2';

function App() {

  let sort_param = null;
  
  function handleFilter(param){
    sort_param = param;
  }

  return (
    <div className="container">
      
      {/* Header */}
      <div className="header"><p>Object Storage Roadmap</p></div>
      
      {/* Issue Header */}
      <div className="issue_header_container">
        < Issue_Header />
      </div>

      {/* Issue Pane */}
      <div className="issues">
      <div className="filter-body">

      <div className="filter_header_name">
        <button className="hoverbtn" onClick={() => handleFilter("name")}><img className="filter_img" src={filter} ></img></button>
      </div>

      <div className="filter_header_issue">
        <button className="hoverbtn" onClick={() => handleFilter("issue")}><img className="filter_img" src={filter} ></img></button>
      </div>

      <div className="filter_header_status">
        <button className="hoverbtn" onClick={sort}><img className="filter_img" src={filter} ></img></button>
      </div>

      </div>
        <GetIssues2 param={sort_param}/>
      </div>

      {/* Timeline Header */}
      <div className="timeline_header">
        <TimelineHeader />
      </div>

      {/* Timeline */}  
      <div className="timeline">
        <Timeline />
      </div>

    </div>
  );
}

export default App;