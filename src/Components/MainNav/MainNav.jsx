import "./MainNav.css";
import { Link } from "react-router-dom";
import { useAuth } from "../../Context";

export const MainNav = () => {
  const { isUserLogin, logout } = useAuth();
  return (
    <div className="page-main-menu">
      <img
        src="https://cdn.pixabay.com/photo/2017/01/08/10/49/group-1962592_1280.png"
        alt="logo"
        className="hero-image"
      ></img>
      <div className="hero-name">CODE-N-MINGLE</div>
      {!isUserLogin && (
        <Link className="login" to="/buyer/login">
          Log In
        </Link>
      )}
      {isUserLogin && (
        <button onClick={logout} className="logout-button">
          Logout
        </button>
      )}
      {isUserLogin && <Link to="/buyer/dashboard">Dashboard</Link>}
      {!isUserLogin && <Link to="/">Log In As A Coder</Link>}
    </div>
  );
};
