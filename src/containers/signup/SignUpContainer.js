import React, { Component } from "react";
import SignUpForm from "./SignUpForm.js";
const FormValidators = require("./validate");
const validateSignUpForm = FormValidators.validateSignUpForm;
const validateLoginUpForm = FormValidators.validateLoginUpForm;
const zxcvbn = require("zxcvbn");


export default class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      user: {
        email: "",
        password: "",
        pwconfirm: ""
      },
      isSignup: true,
      btnTxt: "show",
      type: "password",
      score: "0",
      dismissSignup: false
    };

    this.pwMask = this.pwMask.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submitSignup = this.submitSignup.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.pwHandleChange = this.pwHandleChange.bind(this);
    this.changeIsSignup = this.changeIsSignup.bind(this);
  }

  handleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  changeIsSignup() {
    this.setState(state =>
      Object.assign({}, state, {
        isSignup: !state.isSignup
      })
    ); 
  }

  pwHandleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });

    if (event.target.value === "") {
      this.setState(state =>
        Object.assign({}, state, {
          score: "null"
        })
      );
    } else {
      var pw = zxcvbn(event.target.value);
      this.setState(state =>
        Object.assign({}, state, {
          score: pw.score + 1
        })
      );
    }
  }
  
  submitSignup(user) {
    //either use submit signup or submit login here 
    // var params = { landlord_checkbox: user.landlord_checkbox, password: user.pw, email: user.email };
    // TODO:  Connect to our server
    /*'''axios
      .post("https://ouramazingserver.com/api/signup/submit", params)
      .then(res => {
        if (res.data.success === true) {
          localStorage.token = res.data.token;
          localStorage.isAuthenticated = true;
          window.location.reload();
        } else {
          this.setState({
            errors: { message: res.data.message }
          });
        }
      })
      .catch(err => {
        console.log("Sign up data submit error: ", err);
      });*/
  }

  validateForm(event) {
    event.preventDefault();
    if (this.state.isSignup) {
      const payload = validateSignUpForm(this.state.user);
    } else {
      const payload = validateLoginUpForm(this.state.user);
    }
    if (payload.success) {
      this.setState({
        errors: {}
      });
      var user = {
        pw: this.state.user.password,
        email: this.state.user.email
      };
      this.submitSignup(user);
    } else {
      const errors = payload.errors;
      this.setState({
        errors
      });
    }
  }

  pwMask(event) {
    event.preventDefault();
    this.setState(state =>
      Object.assign({}, state, {
        type: this.state.type === "password" ? "input" : "password",
        btnTxt: this.state.btnTxt === "show" ? "hide" : "show"
      })
    );
  }

  render() {
    return (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 999 }}>
          <SignUpForm
          dismissSignup={this.props.dismissSignup}
          onSubmit={this.validateForm}
          onShow={this.props.show}
          onChange={this.handleChange}
          onPwChange={this.pwHandleChange}
          errors={this.state.errors}
          user={this.state.user}
          score={this.state.score}
          btnTxt={this.state.btnTxt}
          type={this.state.type}
          pwMask={this.pwMask}
          isSignup={this.state.isSignup}
          changeIsSignup = {this.changeIsSignup}
        />
      </div>
    );
  }
}
