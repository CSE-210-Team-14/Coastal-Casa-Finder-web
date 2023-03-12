import React, { Component } from "react";
import SignUpForm from "./SignUpForm.js";
import axios from "axios";
// const FormValidators = require("./validate");
// const validateSignUpForm = FormValidators.validateSignUpForm;
// const validateLoginUpForm = FormValidators.validateLoginUpForm;
const zxcvbn = require("zxcvbn");

export default class SignUpContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      user: {
        email: "",
        password: "",
        pwconfirm: "",
      },
      isSignup: true,
      btnTxt: "show",
      type: "password",
      score: "0",
      dismissSignup: false,
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
      user,
    });
  }

  changeIsSignup() {
    this.setState((state) =>
      Object.assign({}, state, {
        isSignup: !state.isSignup,
      })
    );
  }

  pwHandleChange(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user,
    });

    if (event.target.value === "") {
      this.setState((state) =>
        Object.assign({}, state, {
          score: "null",
        })
      );
    } else {
      var pw = zxcvbn(event.target.value);
      this.setState((state) =>
        Object.assign({}, state, {
          score: pw.score + 1,
        })
      );
    }
  }

  async submitSignup(e) {
    e.preventDefault();
    if (this.state.isSignup) {
      const response = await axios.post(
        "http://18.196.64.140:8080/landlord/signup",
        {
          email: this.state.user.email,
          password: this.state.user.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      localStorage.setItem("user", this.state.user.email);
      localStorage.setItem("JWTToken", response.data.data);
      window.dispatchEvent(new Event("storage"));
    } else {
      const response = await axios.post(
        "http://18.196.64.140:8080/landlord/signin",
        {
          email: this.state.user.email,
          password: this.state.user.password,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      localStorage.setItem("user", this.state.user.email);
      localStorage.setItem("JWTToken", response.data.data);
      window.dispatchEvent(new Event("storage"));
    }
    this.props.dismissSignup();
  }

  validateForm(event) {
    event.preventDefault();
    this.submitSignup(event);
  }

  pwMask(event) {
    event.preventDefault();
    this.setState((state) =>
      Object.assign({}, state, {
        type: this.state.type === "password" ? "input" : "password",
        btnTxt: this.state.btnTxt === "show" ? "hide" : "show",
      })
    );
  }

  render() {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 999,
        }}
      >
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
          changeIsSignup={this.changeIsSignup}
        />
      </div>
    );
  }
}
