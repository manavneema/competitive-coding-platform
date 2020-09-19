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
          class="btn btn-outline-dark btn-lg btn-developer"
          onClick={handleClickSignup}
        >
          <i class="fas fa-laptop-code"></i> Developer
        </button>
        <button
          type="button"
          class="btn btn-outline-dark btn-lg btn-teacher"
          onClick={handleClickLogin}
        >
          <a href="login.html"></a>
          <i class="fas fa-terminal"></i> Teacher
        </button>
      </div>
    );
}

export default Landingpage;