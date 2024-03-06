import React from 'react';


const LoginForm = () => {
  return (
    <div className="wrapper">
      <div className="title-text">
        <div className="title login">
          Login Form
        </div>
        <div className="title signup">
          Signup Form
        </div>
      </div>
      <div className="form-container">
        <div className="slide-controls">
          <input type="radio" name="slide" id="login" defaultChecked />
          <input type="radio" name="slide" id="signup" />
          <label htmlFor="login" className="slide login">Login</label>
          <label htmlFor="signup" className="slide signup">Signup</label>
          <div className="slider-tab"></div>
        </div>
        <div className="form-inner">
          <form action="index.html" className="login">
            <div className="field">
              <input type="text" placeholder="Correo Electrónico" required />
            </div>
            <div className="field">
              <input type="password" placeholder="Contraseña" required />
            </div>
            <div className="pass-link"><a href="#">Olvidaste tu contraseña?</a></div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="button" id="loginButton" value="Login" />
            </div>
            <div className="signup-link">No tiene cuenta? <a href="#signup">Regístrese Ahora</a></div>
          </form>
          <form action="index.html" className="signup">
            <div className="field">
              <input type="text" placeholder="Nombre" required />
            </div>
            <div className="field">
              <input type="text" placeholder="Correo Electrónico" required />
            </div>
            <div className="field">
              <input type="text" placeholder="Dirección del Local" required />
            </div>
            <div className="field">
              <input type="tel" placeholder="Teléfono del Local" required />
            </div>
            <div className="field">
              <input type="tel" placeholder="Contraseña" required />
            </div>
            <div className="field">
              <input type="tel" placeholder="Repita la contraseña" required />
            </div>
            <div className="field btn">
              <div className="btn-layer"></div>
              <input type="button" id="signupButton" value="Signup" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
