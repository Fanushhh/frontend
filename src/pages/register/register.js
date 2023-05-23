import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  EMAIL_ERRORS,
  FIRST_NAME_ERRORS,
  LAST_NAME_ERRORS,
  PASSWORD_ERRORS,
  REPEAT_PASSWORD_ERRORS,
} from "../../constants/register";
import {
  allLetter,
  ValidateEmail,
  hasSpaces,
  validatePassword,
} from "../../utils/validation";
import { showToastr } from "../../features/toastr/toastr-slice";
import styles from "./register.module.scss";
import authenticationImage from "../../images/authentication-image.svg";
import Navbar from "../../components/navbar/navbar";
import { Link } from "react-router-dom";

export default function Register() {
  console.log("REGISTER PAGE RENDER");

  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const [firstNameErrorText, setFirstNameErrorText] = useState("");
  const [lastNameErrorText, setLastNameErrorText] = useState("");
  const [emailErrorText, setEmailErrorText] = useState("");
  const [passwordErrorText, setPasswordErrorText] = useState("");
  const [repeatPasswordErrorText, setRepeatPasswordErrorText] = useState("");

  const isSubmitButtonDisabled =
    firstName === "" ||
    lastName === "" ||
    email === "" ||
    password === "" ||
    repeatPassword === "" ||
    firstNameErrorText !== "";

  const handleSubmitForm = (event) => {
    event.preventDefault();
    dispatch(
      showToastr({
        message: "Am dat click pe submit button",
        severity: "success",
      })
    );
  };

  const handleChangeFirstName = (event) => {
    const firstNameInput = event.target.value;
    setFirstName(firstNameInput);
    if (firstNameInput.length < 3) {
      setFirstNameErrorText(FIRST_NAME_ERRORS.MIN_LENGTH);
 
    } else if (firstNameInput.length > 30) {
      setFirstNameErrorText(FIRST_NAME_ERRORS.MAX_LENGTH);

    } else if (hasSpaces(firstNameInput)) {
      setFirstNameErrorText(FIRST_NAME_ERRORS.ONLY_SPACES);
    } else if (!allLetter(firstNameInput)) {
      setFirstNameErrorText(FIRST_NAME_ERRORS.ONLY_LETTERS);
    } else {
      setFirstNameErrorText("");
    }
  };

  const handleChangeLastName = (event) => {
    const lastNameInput = event.target.value;
    if (lastNameInput.length < 3) {
      setLastNameErrorText(LAST_NAME_ERRORS.MIN_LENGTH);
      setLastName(lastNameInput);
      console.log("1");
    } else if (lastNameInput.length > 30) {
      setLastNameErrorText(LAST_NAME_ERRORS.MAX_LENGTH);
      setLastName(lastNameInput);
      console.log("2");
    } else if (hasSpaces(lastNameInput)) {
      setLastNameErrorText(LAST_NAME_ERRORS.ONLY_SPACES);
      setLastName(lastNameInput);
      console.log("3");
    } else if (!allLetter(lastNameInput)) {
      setLastNameErrorText(LAST_NAME_ERRORS.ONLY_LETTERS);
      setLastName(lastNameInput);
      console.log("4");
    } else {
      setLastNameErrorText("");
      setLastName(lastNameInput);
      console.log("5");
    }
  };

  const handleChangeEmail = (event) => {
    const emailInput = event.target.value;
    if (emailInput.length < 6) {
      setEmailErrorText(EMAIL_ERRORS.MIN_LENGTH);
      setEmail(emailInput);
    } else if (emailInput.length > 100) {
      setEmailErrorText(EMAIL_ERRORS.MAX_LENGTH);
      setEmail(emailInput);
    } else if (!ValidateEmail(emailInput)) {
      setEmailErrorText(EMAIL_ERRORS.INVALID);
      setEmail(emailInput);
    } else {
      setEmail(emailInput);
      setEmailErrorText("");
    }
  };

  const handleChangePassword = (event) => {
    const passwordInput = event.target.value;
    if (passwordInput.length < 6) {
      setPasswordErrorText(PASSWORD_ERRORS.MIN_LENGTH);
      console.log("1");
      setPassword(passwordInput);
    } else if (passwordInput.length > 30) {
      setPasswordErrorText(PASSWORD_ERRORS.MAX_LENGTH);
      setPassword(passwordInput);
      console.log("2");
    } else if (hasSpaces(passwordInput)) {
      setPasswordErrorText(PASSWORD_ERRORS.ONLY_SPACES);
      setPassword(passwordInput);
      console.log("3");
    } else if (!validatePassword(passwordInput)) {
      setPasswordErrorText(PASSWORD_ERRORS.LOWERCASE_LETTER);
      setPassword(passwordInput);
      console.log("4");
    } else {
      setPassword(passwordInput);
      setPasswordErrorText("");
      console.log("5");
    }
  };
  const handleChangeRepeatPassword = (event) => {
    const repeatPasswordInput = event.target.value;
    if (repeatPasswordInput.length < 6) {
      setRepeatPasswordErrorText(REPEAT_PASSWORD_ERRORS.MIN_LENGTH);
      console.log("1");
      setRepeatPassword(repeatPasswordInput);
    } else if (repeatPasswordInput.length > 30) {
      setRepeatPasswordErrorText(REPEAT_PASSWORD_ERRORS.MAX_LENGTH);
      setRepeatPassword(repeatPasswordInput);
      console.log("2");
    } else if (hasSpaces(repeatPasswordInput)) {
      setRepeatPasswordErrorText(REPEAT_PASSWORD_ERRORS.ONLY_SPACES);
      setRepeatPassword(repeatPasswordInput);
      console.log("3");
    } else if (!validatePassword(repeatPasswordInput)) {
      setRepeatPasswordErrorText(REPEAT_PASSWORD_ERRORS.LOWERCASE_LETTER);
      setRepeatPassword(repeatPasswordInput);
      console.log("4");
    } else {
      setRepeatPassword(repeatPasswordInput);
      setRepeatPasswordErrorText("");
      console.log("5");
    }
  };

  return (
    <div>
      <main className={styles.main}>
        <form onSubmit={handleSubmitForm}>
          <img src={authenticationImage} alt="Authentication iamge" />
          <TextField
            autoComplete="off"
            error={firstNameErrorText.length !== 0}
            label="First name"
            variant="outlined"
            placeholder="Insert first name..."
            value={firstName}
            onChange={handleChangeFirstName}
            size="small"
            helperText={firstNameErrorText}
          />
          <TextField
            autoComplete="off"
            helperText={lastNameErrorText}
            label="Last name"
            variant="outlined"
            placeholder="Insert last name..."
            value={lastName}
            size="small"
            error={lastNameErrorText.length !== 0}
            onChange={handleChangeLastName}
          />
          <TextField
            autoComplete="off"
            label="Email"
            variant="outlined"
            type="email"
            placeholder="Insert email..."
            value={email}
            size="small"
            onChange={handleChangeEmail}
            error={emailErrorText.length !== 0}
            helperText={emailErrorText}
          />
          <TextField
            autoComplete="off"
            label="Password"
            variant="outlined"
            type="password"
            placeholder="Insert password..."
            size="small"
            value={password}
            onChange={handleChangePassword}
            error={passwordErrorText.length !== 0}
            helperText={passwordErrorText}
          />
          <TextField
            autoComplete="off"
            label="Repeat password"
            variant="outlined"
            type="password"
            placeholder="Repeat password..."
            size="small"
            value={repeatPassword}
            onChange={handleChangeRepeatPassword}
            error={repeatPasswordErrorText.length !== 0}
            helperText={repeatPasswordErrorText}
          />
          <button type="submit" disabled={isSubmitButtonDisabled}>
            Register
          </button>
          <div className={styles.links}>
            <p>
              Already have an account? <Link to="/login">Login here.</Link>
            </p>
            <p>
              Forgot your password? No problemo,{" "}
              <Link to="/forgot-password">reset it here.</Link>
            </p>
          </div>
        </form>
      </main> 
    </div>
  );
}
