import { LoginForm, OverlayContainer, MainNav } from "../../Components";
import "./UserCredentials.css";

export const Login = () => {
  return (
    <>
      <MainNav />
      <div className="credentials-container">
        <div class="container" id="container">
          <LoginForm />
          <OverlayContainer />
        </div>
      </div>
    </>
  );
};
