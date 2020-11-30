import React from "react";
import PortCards from "./PortCards"
import projects from "../projects.json"


// {projects.map(el=> {
//     return <portCards {...}
// })}


function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div className="row">
        {
          projects.projects.map(el => {
            return <PortCards props={el} key={el.name} />
          })
        }
      </div>
    </div>
  );
}

export default Portfolio;
