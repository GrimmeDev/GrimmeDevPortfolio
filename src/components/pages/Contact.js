import React from "react";
// import { Link } from "react-router-dom";

function Contact(props) {
  var email = "mailto:rjgrimes@gmail.com"
  return (
    <div>
      <h1>Contact Page</h1>
      <div className="row mx-auto py-2 px-2 custBGC" style={{ maxWidth: "600px" }}>
        <form>
          <div className="form-group">
            <label for="InputEmail">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone
                            else.</small>
          </div>
          <div className="form-group">
            <label for="exampleFormControlTextarea1">What are you contacting me about?</label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          <a type="submit" className="btn btn-dark" href={email}>
            <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-envelope" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd"
                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
            </svg> Email Me</a>
        </form>
      </div>
    </div>
  );
}

export default Contact;
