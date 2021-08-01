import { SignUpForm, OverlayContainer, MainNav } from "../../Components";
import "./UserCredentials.css";

export const SignUp = () => {
  return (
    <>
      <MainNav />
      <div className="credentials-container">
        <div class="container right-panel-active" id="container">
          <SignUpForm />
          <OverlayContainer />
        </div>
      </div>
    </>
  );
};
