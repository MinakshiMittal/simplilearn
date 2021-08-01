import "./PaymentCard.css";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router";

export const PaymentCard = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  return (
    <div className="payment-details">
      <p>Payment Amount: ₹900</p>
      <form className="payment-form">
        <input type="number" placeholder="Card Number" />
        <div className="expiry-date">
          <label>ExpiryDate:</label>
          <input type="date" placeholder="Month" />
          <input type="date" placeholder="Month" />
        </div>
        <input type="number" placeholder="CVV" />
        <input type="text" placeholder="Card Holder Name" />
        <input type="text" placeholder="Street" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="PostCode" />
        <button
          type="button"
          onClick={() => navigate(`/course/${courseId}/payment/otp`)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
