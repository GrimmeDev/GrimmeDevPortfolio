import React from "react";
import headshot from "../../Assets/headshot.jpg"

function About() {
  return (
    <div className="aboutMe">
      <header class="page-header">
        <h1>
          GrimmeDev<small> - Robert Grimes</small>
        </h1>
      </header>
      <div className="row">
        <div className="col-lg-3">
          <div className="box">
            <img alt="Robert" src={headshot} width="300"
              className="img-thumbnail border border-dark" />
          </div>
        </div>
        <section className="col-lg-9">
          <h1>About Me</h1>
          <p>
            My name is Robert and I live in Austin, Texas. I am in training to be a
            Full-Stack Developer though UT Austin and working on becoming a Cyber Security Consultant.
            Currently, I am working as a System Administrator for a non-profit in Austin.
                    </p>
          <ul id="aboutMeList">
            <li>
              I have traveled to all 50 states of the United States. I have been on 6 of the 7 continents,
              including Antarctica, and have been in 19 countries around the world.
                        </li>
            <li>
              I am an Eagle Scout from BSA Troop 32.
                        </li>
            <li>
              I love cats and dogs.
                        </li>
            <li>
              I enjoy reading and writing when I can, I love fantasy and science fiction novels.
                        </li>
            <li>
              I love cooking and trying out new recipes.
                        </li>
          </ul>
          <div className="row" id="bottomNav">
            <nav>
              <ul className="nav nav-pills justify-content-start">
                <li className="nav-item">
                  <a href="https://www.linkedin.com/in/robert-grimes-97375714/"
                    className="btn btn-dark personalLinks" target="_blank">LinkedIn</a>
                </li>
                <li className="nav-item">
                  <a href="https://github.com/GrimmeDev" className="btn btn-dark personalLinks"
                    target="_blank">Github</a>
                </li>
                <li className="nav-item">
                  <a href="https://docs.google.com/document/d/17jo5SfVkkwjDVniI0fpPvLeMUXYeIsDoDxW2e_RQOQs/export?format=pdf"
                    className="btn btn-dark personalLinks" target="_blank">Resume</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
