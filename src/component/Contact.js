import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="container ">
      <h4 className="center">Contact</h4>
      <div className="row center">
        <div className="col s12 ">
          <div className="card center">
            <div className="card-image profileimage ">
              <img alt="zewdu erkyhun" src="https://avatars.githubusercontent.com/u/19651935?s=400&u=7242d9c5635b311a963a2de29fca3b47ac07c790&v=4" />
            </div>
            <div className="card-content">
              <p>
                I am genuinely enthusiastic in software engineering,
                particularly full stack web development, cross-platform apps,
                and data science. Open to new opportunities
              </p>
            </div>
            <div className="card-action ">
              <a href="https://github.com/zewdu444" target="_blank" rel="noreferrer">
                {' '}
                <i className="medium material-icons teal-text ">link</i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
