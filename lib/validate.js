export function registerValidate(values) {
  const errors = {};

  if (!values.name) {
    errors.name = "Required";
  }

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  // validation for password
  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length < 6 || values.password.length > 20) {
    errors.password = "Must be greater then 6 and less then 20 characters long";
  } else if (values.password.includes(" ")) {
    errors.password = "Invalid Password";
  } else if (
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]+/.test(
      values.password
    )
  ) {
    errors.password =
      "Must contain at least 1 lowercase letter, 1 uppercase letter, 1 special character, and 1 number";
  }

  //   // validate confirm password
  //   if (!values.cpassword) {
  //     errors.cpassword = "Required";
  //   } else if (values.password !== values.cpassword) {
  //     errors.cpassword = "Password Not Match...!";
  //   } else if (values.cpassword.includes(" ")) {
  //     errors.cpassword = "Invalid Confirm Password";
  //   }

  return errors;
}

export function resetPassValidate(values) {
  const errors = {};

  // validation for password
  if (!values.newPass) {
    errors.newPass = "Required";
  } else if (values.newPass.length < 6 || values.newPass.length > 20) {
    errors.newPass = "Must be greater then 6 and less then 20 characters long";
  } else if (values.newPass.includes(" ")) {
    errors.newPass = "Invalid Password";
  } else if (
    !/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])[a-zA-Z0-9!@#$%^&*()_+]+/.test(
      values.newPass
    )
  ) {
    errors.newPass =
      "Must contain at least 1 lowercase letter, 1 uppercase letter, 1 special character, and 1 number";
  }

  // validate confirm password
  if (!values.confirmNewPass) {
    errors.confirmNewPass = "Required";
  } else if (values.newPass !== values.confirmNewPass) {
    errors.confirmNewPass = "Passwords Don't Match !";
  } else if (values.confirmNewPass.includes(" ")) {
    errors.confirmNewPass = "Invalid Confirm Password";
  }

  return errors;
}
