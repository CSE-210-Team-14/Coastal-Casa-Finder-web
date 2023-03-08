import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PasswordStr from "./PasswordStr";
import "./style.css";

const SignUpForm = ({
  onSubmit,
  dismissSignup,
  onChange,
  errors,
  user,
  score,
  btnTxt,
  type,
  pwMask,
  onPwChange, 
  isSignup,
  changeIsSignup,
}) => {

  return (
    <div className="loginBox">
      <div style={{display: "flex", justifyContent: 'flex-end'}}>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={dismissSignup}>
                <span aria-hidden="true">&times;</span>
          </button>
      </div>
      <h1>{isSignup ? "Sign Up" : "Sign In"}</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
      <form onSubmit={onSubmit}>
        <div className="signUpFields">
        <TextField
          name="email"
          label="Email"
          value={user.email}
          onChange={onChange}
          error={"email" in errors}
          helperText={errors.email}
        /></div>
        <div className="signUpFields">
        <TextField
          type={type}
          name="password"
          label="Password"
          value={user.password}
          onChange={onPwChange}
          error={"password" in errors}
          helperText={errors.password}
        />
        </div>
        {isSignup ? 
        <div className="signUpFields">
        <TextField
          type={type}
          name="pwconfirm"
          label="Confirm Password"
          value={user.pwconfirm}
          onChange={onChange}
          error={"pwconfirm" in errors}
          helperText={errors.pwconfirm}
        /> 
        </div> : null}
        <div className="pwStrRow">
          {score >= 1 && (
            <div>
              <PasswordStr score={score} /> 
              <Button 
                className="pwShowHideBtn" 
                label={btnTxt} onClick={pwMask} 
                style={{position: 'relative', left: '50%', transform: 'translateX(-50%)'}} 
              />
            </div>
            )} 
        </div>
        <Button 
          className="signUpSubmit"
          onClick={dismissSignup}
          type="submit"
        >{isSignup ? "Sign Up" : "Sign In"}</Button>
      </form>
      <p>
        <Button 
          className="signUpSubmit"
          onClick={changeIsSignup}
          type="submit"
        >{isSignup ? "Already have an account? Sign in here" : "Don't have an account? Sign up here"}</Button>
      </p>
    </div>
  );
};

export default SignUpForm;
