import React from "react";
import "./HowItWorks.css";

const steps = [
  {
    id: "01",
    img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fhow-works-1.e3786cbe8e1412328379fbcdf12461eb.png&w=640&q=75",
    title: "Become a Delivery Man",
    desc: "As a delivery driver, you'll make reliable money—working anytime, anywhere.",
    link: "Start Earning",
  },
  {
    id: "02",
    img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fhow-works-2.84405c280834a1d7c966672045696a03.png&w=640&q=75",
    title: "Become a Partner",
    desc: "Grow your business and reach new customers by partnering with us.",
    link: "Sign up your store",
  },
  {
    id: "03",
    img: "https://superprops-next.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fimage%2Fsrc%2Fcommon%2Fassets%2Fimage%2FfoodDelivery%2Fhow-works-3.bb212f3d20d801168c1d4090b345aa45.png&w=640&q=75",
    title: "Try Android/iOS App",
    desc: "Get the best DoorDash experience with live order tracking.",
    link: "Get the app",
  },
];

const HowItWorks = () => {
  return (
    <div className="how-it-works">
      <h2 className="title">Let’s see how it works</h2>
      <div className="steps">
        {steps.map((step, index) => (
          <div className="step" key={index}>
            <div className="step-img">
              <span className="step-id">{step.id}</span>
              <img src={step.img} alt={step.title} />
            </div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.desc}</p>
            <a href="#" className="step-link">
              {step.link} →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
