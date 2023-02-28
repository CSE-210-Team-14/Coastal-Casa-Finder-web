import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PasswordStr from "./PasswordStr";
import CloseButton from 'react-bootstrap/CloseButton';
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
  onPwChange
}) => {

  return (
    <div className="loginBox">
      <div style={{display: "flex", justifyContent: 'flex-end'}}>
            <CloseButton style ={{ alignSelf: 'flex-end' }} onClick={dismissSignup}/>
      </div>
      <h1>Sign Up</h1>
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
        </div>
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
        <div className="signUpFields">
          <input type="checkbox" id="scales" name="landlord_checkbox"></input>
          I am a landlord
          </div>
        <Button 
          variant="contained"
          className="signUpSubmit"
          type="submit"
        >Sign Up</Button>
      </form>
      <p>
        Aleady have an account? <br />
        <a href="/">Log in here</a>
      </p>
    </div>
  );
};

export default SignUpForm;
