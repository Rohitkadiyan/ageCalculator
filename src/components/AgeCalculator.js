import React, { useState } from "react";

const AgeCalculator = () => {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(0);
  const [Month, setMonth] = useState(0);
  const [day, setDay] = useState(0);

  // Calculate Age
  const calculateAge = () => {
    const today = new Date();
    const birthDated = new Date(birthDate);
    let CurrentAge = today.getFullYear() - birthDated.getFullYear();
    const monthDiff = today.getMonth() - birthDated.getMonth();
    if (monthDiff < 0) {
      CurrentAge--;
    }
    setAge(CurrentAge);
    setMonth(today.getMonth() + 1);
    setDay(today.getDate());
  };

  // Reset Calculator
  const resetCalculator = () => {
    setBirthDate("");
    setAge(0);
  };
  return (
    <div className="container">
      <h2>Age Calculator</h2>
      <p>The Age Calculator can determine the age or Interval</p>
      <div className="container row text-center my-3">
        <div className="col-md-6 p-4">
          <h3>Select Date of Birth</h3>
          <input
            type="date"
            className="date p-2 border border-1"
            value={birthDate}
            onChange={(e) => {
              setBirthDate(e.target.value);
            }}
          />
          <div className="container my-3">
            <button className="btn btn-success me-2" onClick={calculateAge}>
              Calculate Age{" "}
            </button>
            <button className="btn btn-danger" onClick={resetCalculator}>
              Reset{" "}
            </button>
          </div>
        </div>
        <div className="col-md-6 bg-white rounded-3 p-4">
          <div className="container my-4">
            <h5>Your Age is </h5>
          </div>
          <h5>
            {age > 0 ? `${age}Years / ${Month}Months / ${day}days` : "..."}
          </h5>
        </div>
      </div>
    </div>
  );
};

export default AgeCalculator;
