import { useState } from "react";

const Issue_Header = () => {

  const [status, setStatus] = ([
    {id: 1, status: "Done"},
    {id: 2, status: "In Progress"},
    {id: 3, status: "Backlog"}
  ])

  return ( 
    <>
      {
        <div className="issue_header">
          <div className="issue_header_id">#</div>
          <div className="issue_header_name">Story</div>
          <div className="issue_header_issue">Release</div>
          <div className="issue_header_status">Status</div>
        </div>
      }
    </>
   );
}
 
export default Issue_Header;