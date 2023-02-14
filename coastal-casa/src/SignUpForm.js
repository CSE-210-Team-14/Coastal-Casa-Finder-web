import React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import PasswordStr from "./PasswordStr";
import "./style.css";

const SignUpForm = ({
  history,
  onSubmit,
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
      <h1>Sign Up</h1>
      {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}

      <form onSubmit={onSubmit}>
        <div className="signUpFields">
        <TextField
          name="email"
          label="Email"
          value={user.email}
          onChange={onChange}
          error={errors.email}
          helperText={errors.email}
        /></div>
        <div className="signUpFields">
        <TextField
          type={type}
          name="password"
          label="Password"
          value={user.password}
          onChange={onPwChange}
          error={errors.password}
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
          error={errors.pwconfirm}
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
