import { TextField } from "@mui/material";
import styles from "./forgot-password.module.css";
import authenticationImage from "../../images/authentication image.svg";
import Navbar from "../../components/navbar/navbar";

export default function ForgotPassword() {
  return (
    <div>
      <main className={styles.main}>
        <form>
          <img src={authenticationImage} alt="Authentication iamge" />
          <TextField
            autoComplete="off"
            label="Email"
            variant="outlined"
            type="email"
            placeholder="Insert email..."
            size="small"
          />
          <button>Send reset link.</button>
          <div className={styles.links}>
            <p>
              Go to <a href="/login">login.</a>
            </p>
            <p>
              Create a new <a href="/register">account.</a>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
