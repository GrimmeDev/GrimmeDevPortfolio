import React from "react";
import PortCards from "./PortCards";
import { projects } from "../projects.json";
import fasmalogo from "../../Assets/fasmalogo.png"
import homepageExample from "../../Assets/homepageExample.png"
import lwSignup from "../../Assets/lwSignup.png"
// import cyberSafe from "../../Assets/cyberSafe.png"
import passGenerator from "../../Assets/passGenerator.png"
import weatherDash from "../../Assets/weatherDash.png"
import employeeOutput from "../../Assets/employeeOutput.png"


// {projects.map(el=> {
//     return <portCards {...}
// })}


function Portfolio() {
  return (
    <div className="portPage">
      <h1>Portfolio Page</h1>
      <div className="row">
        <PortCards name={projects[0].name} image={fasmalogo}
          repo={projects[0].repo} desc={projects[0].desc} />
        <PortCards name={projects[1].name} image={homepageExample}
          repo={projects[1].repo} desc={projects[1].desc} />
        <PortCards name={projects[2].name} image={lwSignup}
          repo={projects[2].repo} desc={projects[2].desc} />
        {/* <PortCards name={projects[3].name} image={"https://via.placeholder/150"}
          repo={projects[3].repo} desc={projects[3].desc} /> */}
        <PortCards name={projects[4].name} image={passGenerator}
          repo={projects[4].repo} desc={projects[4].desc} />
        <PortCards name={projects[5].name} image={weatherDash}
          repo={projects[5].repo} desc={projects[5].desc} />
        <PortCards name={projects[6].name} image={employeeOutput}
          repo={projects[6].repo} desc={projects[6].desc} />
      </div>
    </div>
  );
}

export default Portfolio;
