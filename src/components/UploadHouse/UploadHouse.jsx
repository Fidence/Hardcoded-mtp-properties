import React from "react";
import { Last } from "react-bootstrap/esm/PageItem";
import Room5 from "../assets/images/room5.png";
import Room6 from "../assets/images/room6.png";
import Room7 from "../assets/images/room7.png";
import Room8 from "../assets/images/room8.png";
import Trash from "../assets/svg/trash-can.svg";
import Image from "../assets/svg/image.svg";
import Phone from "../assets/svg/phone.svg";
import Email from "../assets/svg/email.svg";
import Arrow from "../assets/svg/back-arrow.svg";
import Location from "../assets/svg/location-avatar.svg";
import Naria from "../assets/svg/currency-naira.svg";

const UploadHouse = () => {
  return (
    <div className="upload__main">
      <div className="mainwrapper">
        <div className="upload__wrapper">
          <div className="arrow">
            <img src={Arrow} alt="" />
            <span>Back</span>
          </div>
          <div className="cirles">
            <div className="cirle__one">
              <p>upload house</p>
            </div>
            <div className="cirle__two"></div>
            <div className="cirle__three">
              <p>Add Features</p>
            </div>
            <div className="cirle__four"></div>
            <div className="cirle__five">
              <p>Account Verification</p>
            </div>
          </div>
        </div>

        <div className="houses">
          <h4>Upload Houses</h4>
          <div className="videos">
            <img src={Image} alt="" />
            <span>Add Image/Vedios</span>
          </div>
          <div className="display">
            <div className="grid1">
              <div className="trash">
                <img src={Trash} alt="" />
              </div>
            </div>
            <div className="grid2">
              <img src={Trash} alt="" />
            </div>
            <div className="grid3">
              <img src={Trash} alt="" />
            </div>
            <div className="grid__overlay">
              <img src={Trash} alt="" />
            </div>
          </div>
        </div>

        {/*  */}

        <div className="details">
          <h4>House Details</h4>
          <div className="add__info">
            <p>Add Title</p>

            <input
              type="text"
              name=""
              placeholder="e.g., 4-Bedroom duplex with siwmming pool"
            />
          </div>

          <div className="add">
            <p>Location</p>
            <div className="flex2">
              <input type="text" name="" placeholder="e.g., Uyo, Akwa Ibom" />
              <img src={Location} alt="" />
            </div>
          </div>
          <div className="add">
            <p>Rent Rate</p>
            <div className="flex2">
              <input type="text" name="" placeholder="e.g., 10,000/monthly" />
              <img src={Naria} alt="" />
            </div>
          </div>
          <div className="add">
            <p>Caution deposite</p>
            <div className="flex2">
              <input type="text" name="" placeholder="e.g., 70,000/year" />
              <img src={Location} alt="" />
            </div>
          </div>
          <hr />
        </div>

        <div className="landlords">
          <h4>Landlord Details</h4>
          <div className="add__info">
            <p>Fullname</p>
            <input type="text" name="" />
          </div>
          <div className="add">
            <p>Phone Number</p>
            <div className="flex2">
              <input type="text" name="" placeholder="e.g., +2347031234567" />
              <img src={Phone} alt="" />
            </div>
          </div>
          <div className="add">
            <p>Email</p>
            <div className="flex2">
              <input
                type="text"
                name=""
                placeholder="e.g., eaxmple@gmail.com"
              />
              <img src={Email} alt="" />
            </div>
          </div>
        </div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default UploadHouse;
