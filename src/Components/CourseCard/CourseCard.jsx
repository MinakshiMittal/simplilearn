import "./CourseCard.css";
import { useNavigate } from "react-router-dom";

export const CourseCard = ({ course }) => {
  const { id, thumbnailURL, title, price } = course;

  const navigate = useNavigate();

  return (
    <div className="available-project-card-container" key={id}>
      <div className="card-container">
        <img className="project-image" src={thumbnailURL} alt="project" />
        <div
          className="product-name-with-wishlist-icon"
          style={{ flexGrow: 1 }}
        >
          <h4 style={{ color: "white" }}>{title}</h4>
          <i className="fas fa-heart"></i>
        </div>
        <div className="product-price">
          <p className="current-product-price">₹{price}</p>
          <small className="amount-saved"></small>
        </div>
        <button
          className="button primary-btn"
          onClick={() => navigate(`/course/${id}/buy-course`)}
        >
          BUY COURSE
        </button>
      </div>
    </div>
  );
};
