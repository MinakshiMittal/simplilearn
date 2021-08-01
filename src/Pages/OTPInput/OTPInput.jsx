import { useState } from "react";
import { useParams, useNavigate } from "react-router";

export const OTPInput = () => {
  const navigate = useNavigate();
  const { courseId } = useParams();
  const [otp, setOtp] = useState(0);

  const submitHandler = () => {
    console.log(typeof otp);
    if (otp === "123456") {
      return navigate(`/course-details/${courseId}`);
    }
    return alert("otp entered is wrong! Try again");
  };

  return (
    <form style={{ backgroundColor: "transparent" }}>
      <label>Enter OTP</label>
      <input type="number" onChange={(event) => setOtp(event.target.value)} />
      <button type="button" onClick={submitHandler}>
        Submit
      </button>
    </form>
  );
};
