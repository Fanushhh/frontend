import { TextField } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { showToastr } from "../../features/toastr/toastr-slice";
import styles from "./login.module.css";
import authenticationImage from "../../images/authentication-image.svg";
import Navbar from '../../components/navbar/navbar';
import { Link } from "react-router-dom";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const isSubmitButtonDisabled = email === "" || password === "";

  const handleSubmitForm = (event) => {
    event.preventDefault();
    alert("OK");
    dispatch(
      showToastr({
        message: "Am dat click pe submit button",
        severity: "success",
      })
    );
  };

  const handleChangeEmail = (event) => {
    const emailInput = event.target.value;
    setEmail(emailInput);
  };

  const handleChangePassword = (event) => {
    const passwordInput = event.target.value;
    setPassword(passwordInput);
  };

  return (
    <div>
      <main className={styles.main}>
        <form onSubmit={handleSubmitForm}>
          <img src={authenticationImage} alt="Authentication iamge" />
          <TextField
            autoComplete="off"
            label="Email"
            variant="outlined"
            type="email"
            placeholder="Insert email..."
            value={email}
            size="small"
            onChange={handleChangeEmail}
          />
          <TextField
            label="Password"
            variant="outlined"
            type="password"
            placeholder="Insert password..."
            value={password}
            size="small"
            onChange={handleChangePassword}
          />
          <button disabled={isSubmitButtonDisabled}>Login</button>
          <div className={styles.links}>
            <p>
              Don't have an account? <Link to="/register">Register here.</Link>
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
