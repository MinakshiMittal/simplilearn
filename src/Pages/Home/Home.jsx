import { useNavigate } from "react-router";
import { MainNav } from "../../Components";
import "./Home.css";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <>
      <MainNav />
      <div className="home-page">
        <div
          className="image-container"
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            className="home-page-cover-img"
            src="https://cdn.pixabay.com/photo/2018/03/08/05/07/training-3207841_1280.jpg"
            alt="cover img"
          />
          <div className="text-overlay"></div>
        </div>
        <div className="text-container">
          <p className="get-paid-text">Get Knowledge with fun</p>
          <p className="description-text">
            <span className="styled-text">
              Getting correct and detailed information is very important.
            </span>
            <br /> We have brought you a list of courses which you can buy to
            have better understanding and excel in life.
          </p>
        </div>
        <button
          className="getting-started"
          onClick={() => navigate("/user/login")}
        >
          Get Started
        </button>
      </div>
    </>
  );
};
