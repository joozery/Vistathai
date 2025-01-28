import React from "react";
import "./WhyFundingPips.css";
import { FaHandPaper, FaTrophy, FaDollarSign, FaThumbsUp } from "react-icons/fa";

const WhyFundingPips = () => {
  const data = [
    {
      icon: <FaHandPaper />,
      title: "Zero Reward Denials.",
      description: "Trade with a peace of mind.",
    },
    {
      icon: <FaTrophy />,
      title: "Flexible Reward Cycles.",
      description: "The choice is yours: weekly, bi-weekly or monthly.",
    },
    {
      icon: <FaDollarSign />,
      title: "We Grow Together.",
      description: "Trade up to $300,000 in simulated capital.",
    },
    {
      icon: <FaThumbsUp />,
      title: "Choice is Yours.",
      description: "Pick your favorite evaluation.",
    },
  ];

  return (
    <div className="why-funding-pips-container">
      <h2 className="why-funding-pips-title">Why FundingPips?</h2>
      <div className="why-funding-pips-grid">
        {data.map((item, index) => (
          <div key={index} className="why-funding-pips-card">
            <div className="why-funding-pips-icon">{item.icon}</div>
            <h3 className="why-funding-pips-card-title">{item.title}</h3>
            <p className="why-funding-pips-card-description">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyFundingPips;
