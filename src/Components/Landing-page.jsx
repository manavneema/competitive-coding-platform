import React from "react";

function Landingpage() {
    function handleClickLogin() {
        window.location = 'login.html';
    }
    function handleClickSignup() {
        window.location = 'signup.html';
    }
    return (
      <div>
        <button
          type="button"
          className="btn btn-outline-dark btn-lg btn-developer"
          onClick={handleClickSignup}
        >
          <i className="fas fa-laptop-code"></i> Developer
        </button>
        <button
          type="button"
          className="btn btn-outline-dark btn-lg btn-teacher"
          onClick={handleClickLogin}
        >
          <i className="fas fa-terminal"></i> Teacher
        </button>
      </div>
    );
}

export default Landingpage;