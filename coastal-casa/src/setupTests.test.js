// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
const FormValidators = require("./validate");
const validateSignUpForm = FormValidators.validateSignUpForm;

describe("Signup Validation Tests", () => {
    test("it should validate the info that a user has typed into the sign up form", () => {
      const payload1 = { email: "test@gmail.com", 
        password: "testtest", 
        pwconfirm: "testtest"};
      const payload2 = { email: "test@gmail", 
        password: "testte", 
        pwconfirm: "testte"};
      var errors = {};
      var message = "";
      var output1 = {
        success: true,
        message,
        errors
      };
      errors = {"email": "Please provide a correct email address.",
           "password": "Password must have at least 8 characters.",};
      message = "Check the form for errors.";
      const output2 = {
        success: false,
        message,
        errors
      };
      expect(validateSignUpForm(payload1)).toEqual(output1);
      expect(validateSignUpForm(payload2)).toEqual(output2);

      
    });
  });