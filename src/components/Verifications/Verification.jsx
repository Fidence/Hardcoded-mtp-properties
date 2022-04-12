import React from "react";
import Image from "../assets/svg/image.svg";

const Verification = () => {
  return (
    <div className="verification">
      <div className="verification__main">
        <div className="wrapper">
          <h4>Document/Account Verifications </h4>
          <h5>Upload Doucument</h5>
          <form action="">
            <div className="rights">
              <p>Right of Ownership</p>
              <div className="ownership">
                <img src={Image} alt="" />
                <input type="text" placeholder="Upload Image" />
              </div>
            </div>
            <div className="rights">
              <p>Certificate of Ownership</p>
              <div className="ownership">
                <img src={Image} alt="" />
                <input type="text" placeholder="Upload Image" />
              </div>
            </div>
            <div className="rights">
              <p>Governor's Consent</p>
              <div className="ownership">
                <img src={Image} alt="" />
                <input type="text" placeholder="Upload Image" />
              </div>
            </div>
            <div className="rights">
              <p>Property Management Agreement</p>
              <div className="ownership">
                <img src={Image} alt="" />
                <input type="text" placeholder="Upload Image" />
              </div>
            </div>

            <div className="check">
              <input type="checkbox" />
              <span>I consent the verification of my document</span>
            </div>
          </form>
        </div>

        {/* second wrapper */}

        <div className="wrapper__2">
          <h5>Account Verification</h5>
          <p>Account details shoul tally with registration details</p>
          <form action="">
            <div className="account">
              <p>Bank Name</p>
              <input type="text" />
            </div>
            <div className="account">
              <p>Account Name</p>
              <input type="text" />
            </div>
            <div className="account">
              <p>Account Number</p>
              <input type="text" />
            </div>
          </form>
        </div>
        <button>Finish</button>
      </div>
    </div>
  );
};

export default Verification;
