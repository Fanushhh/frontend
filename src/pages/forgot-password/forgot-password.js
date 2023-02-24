import { TextField } from "@mui/material";
import styles from "./forgot-password.module.css";
import authenticationImage from "../../images/authentication-image.svg";
import Navbar from "../../components/navbar/navbar";
import {Link} from 'react-router-dom';
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
              Go to <Link to="/login">login.</Link>
            </p>
            <p>
              Create a new <Link to="/register">account.</Link>
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
